#!/usr/bin/env python3
"""
Community connection tracer for graphify.
Run after any /graphify --update to show how communities connect.

Usage:
    python3 graphify-out/trace-communities.py
    python3 graphify-out/trace-communities.py --diff  # compare with previous snapshot
"""

import json
import sys
from collections import defaultdict
from pathlib import Path

GRAPH_PATH = Path("graphify-out/graph.json")
LABELS_PATH = Path("graphify-out/.graphify_labels.json")
SNAPSHOT_PATH = Path("graphify-out/.community_snapshot.json")


def load_graph():
    from networkx.readwrite import json_graph
    import networkx as nx

    data = json.loads(GRAPH_PATH.read_text())
    G = json_graph.node_link_graph(data, edges="links")
    labels = (
        json.loads(LABELS_PATH.read_text()) if LABELS_PATH.exists() else {}
    )
    return G, labels


def analyze(G, labels):
    node_to_comm = {}
    comm_to_nodes = defaultdict(set)
    for nid, ndata in G.nodes(data=True):
        c = ndata.get("community", -1)
        node_to_comm[nid] = c
        comm_to_nodes[c].add(nid)

    # Cross-community edges
    cross_edges = defaultdict(list)
    for u, v, edata in G.edges(data=True):
        cu = node_to_comm.get(u, -1)
        cv = node_to_comm.get(v, -1)
        if cu != cv:
            key = tuple(sorted([cu, cv]))
            cross_edges[key].append(
                {
                    "source": G.nodes[u].get("label", u),
                    "source_comm": cu,
                    "target": G.nodes[v].get("label", v),
                    "target_comm": cv,
                    "relation": edata.get("relation", ""),
                    "confidence": edata.get("confidence", ""),
                    "confidence_score": edata.get("confidence_score", 0),
                }
            )

    # Connected components
    import networkx as nx

    components = list(nx.connected_components(G))

    # Community sizes
    comm_sizes = {c: len(nodes) for c, nodes in comm_to_nodes.items()}

    return {
        "total_nodes": G.number_of_nodes(),
        "total_edges": G.number_of_edges(),
        "total_communities": len(comm_to_nodes),
        "connected_components": len(components),
        "isolated_nodes": sum(1 for c in components if len(c) == 1),
        "cross_community_edges": {
            f"{a}-{b}": edges for (a, b), edges in cross_edges.items()
        },
        "cross_edge_count": sum(len(v) for v in cross_edges.values()),
        "largest_component_size": max(len(c) for c in components),
        "community_sizes": comm_sizes,
    }


def print_report(result, labels, diff=None):
    print(f"Graph: {result['total_nodes']} nodes, {result['total_edges']} edges")
    print(
        f"Communities: {result['total_communities']} | Components: {result['connected_components']} | Isolated: {result['isolated_nodes']}"
    )
    print(
        f"Cross-community edges: {result['cross_edge_count']} across {len(result['cross_community_edges'])} pairs"
    )
    print(f"Largest connected component: {result['largest_component_size']} nodes")
    print()

    if result["cross_community_edges"]:
        print("=== CROSS-COMMUNITY BRIDGES ===")
        for pair_key, edges in sorted(
            result["cross_community_edges"].items(),
            key=lambda x: -len(x[1]),
        ):
            a, b = pair_key.split("-")
            la = labels.get(a, f"Community {a}")
            lb = labels.get(b, f"Community {b}")
            print(f"\n  [{a}] {la} <-> [{b}] {lb} ({len(edges)} edges)")
            for e in edges:
                print(
                    f"    {e['source']} --{e['relation']} [{e['confidence']} {e['confidence_score']}]--> {e['target']}"
                )
    else:
        print("No cross-community edges found.")

    if diff:
        print("\n=== CHANGES SINCE LAST SNAPSHOT ===")
        old_cross = diff.get("cross_edge_count", 0)
        new_cross = result["cross_edge_count"]
        old_nodes = diff.get("total_nodes", 0)
        new_nodes = result["total_nodes"]
        old_comps = diff.get("connected_components", 0)
        new_comps = result["connected_components"]

        print(f"  Nodes: {old_nodes} -> {new_nodes} ({new_nodes - old_nodes:+d})")
        print(
            f"  Cross-community edges: {old_cross} -> {new_cross} ({new_cross - old_cross:+d})"
        )
        print(
            f"  Connected components: {old_comps} -> {new_comps} ({new_comps - old_comps:+d})"
        )

        # Find new cross-community pairs
        old_pairs = set(diff.get("cross_community_edges", {}).keys())
        new_pairs = set(result["cross_community_edges"].keys())
        added = new_pairs - old_pairs
        removed = old_pairs - new_pairs
        if added:
            print(f"\n  NEW bridges: {', '.join(added)}")
        if removed:
            print(f"  LOST bridges: {', '.join(removed)}")


def main():
    do_diff = "--diff" in sys.argv

    G, labels = load_graph()
    result = analyze(G, labels)

    diff = None
    if do_diff and SNAPSHOT_PATH.exists():
        diff = json.loads(SNAPSHOT_PATH.read_text())

    print_report(result, labels, diff)

    # Save snapshot for future diffs
    SNAPSHOT_PATH.write_text(json.dumps(result, indent=2, default=str))
    print(f"\nSnapshot saved to {SNAPSHOT_PATH}")


if __name__ == "__main__":
    main()
