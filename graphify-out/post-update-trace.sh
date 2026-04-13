#!/bin/bash
# Run this after /graphify --update to see what changed in community connections
# Usage: bash graphify-out/post-update-trace.sh

PYTHON=$(cat graphify-out/.graphify_python 2>/dev/null || echo "python3")

echo ""
echo "╔══════════════════════════════════════════╗"
echo "║   COMMUNITY CONNECTION TRACE (post-update)  ║"
echo "╚══════════════════════════════════════════╝"
echo ""

$PYTHON graphify-out/trace-communities.py --diff

echo ""
echo "To explore a specific bridge, run:"
echo '  /graphify query "How does [concept A] connect to [concept B]?"'
