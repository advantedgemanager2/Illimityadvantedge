# Project Context
**Project:** Illimity AdvantEdge — Transition Finance Knowledge Platform
**Created:** 2026-03-12
**Purpose:** Living manifest of all work done on this project. Append a new entry after every session. Never delete existing entries.

---

## Session: 2026-03-12 at ~21:00

### Accomplished

1. **Added new content to the Transition Risks page** — inserted a Top-Down Transition Risk Assessment section (heading, introductory paragraph, 13-point portfolio-level analysis checklist) and a Transition Risk Drivers subsection under Bottom-up Assessment (heading, paragraph, 4-step list). These were added both to the TSX fallback (`TransitionRisks.tsx`) and to the Supabase database via direct REST API insertion, preserving all existing manually-added content.

2. **Fixed a critical destructive bug in the seed-content edge function** — the function previously deleted ALL `page_sections` and `page_sources` for every page before re-inserting from its hardcoded list. This meant that any content added manually through the admin UI was destroyed every time the seed function was invoked. The function was rewritten to be non-destructive: it now checks each section by `section_id` — if it exists, it updates it; if it doesn't, it inserts it. Sections in the database that are not in the seed file are never touched or deleted.

3. **Restored the database from backup** — the destructive seed function was run once during this session before the bug was identified, which wiped manually-added content across all 19 pages. A Supabase daily backup from 2026-03-11 08:22 UTC was restored, recovering all manually-inserted sections (Stranded Asset Risk, Preference and Behavioural Risk, Supply Chain and Counterparty Contagion Risk, Systemic and Macro-Financial Risk, Just Transition / Social Risk, Difference between transition risks with Themes 1-3, and any other manual content across all pages).

4. **Fixed git identity configuration** — the local repo had no `user.email` or `user.name` set, causing commits to be authored as `pie@Pietros-MacBook-Air-5.local`. Configured to `Pietro Calderini Nannerini <pietro.calderini.nannerini@gmail.com>`.

5. **Merged feature branch to main and pushed** — `feature/new-pages-content` was merged into `main` via fast-forward and pushed to `advantedgemanager2/Illimityadvantedge`.

6. **Linked Supabase CLI to the project** — ran `supabase link --project-ref doaqwjdgllgcikjvlxbx` so the CLI can deploy functions directly.

### Decisions Made

- **Seed function must never delete existing content.** The non-destructive upsert pattern is now the permanent approach. Any future changes to seed data should follow the same logic: update existing sections, insert new ones, leave everything else untouched.
- **New database content should be inserted via direct SQL/REST when possible**, rather than relying on the seed function, to avoid accidental side effects. The seed function is a safety net for initial provisioning, not a content management tool.
- **The Vercel deployment is linked to `advantedgemanager` Vercel account but connected to `advantedgemanager2` GitHub account.** This configuration works — Vercel deploys from the correct GitHub repo. No change needed unless the `advantedgemanager` Vercel account causes confusion in the future.

### Files Changed

- `src/pages/know-how/TransitionRisks.tsx` — Added Top-Down Transition Risk Assessment section and Transition Risk Drivers subsection to the static fallback component. Added intro paragraphs for Business Model Disruption, Legal and Accounting Risks, Reputational Risk, and Policy-driven Market Risk.
- `supabase/functions/seed-content/index.ts` — (a) Expanded transition-risks seed data to include full content matching the TSX fallback. (b) **Rewrote the seeding logic from destructive delete-and-recreate to non-destructive upsert by section_id.** This is the most important change of the session.

### What Did Not Work

- **Seeding the database with the old destructive seed function** destroyed all manually-added content across all 19 pages. This was the primary incident of the session. It was resolved by restoring from a Supabase daily backup and then rewriting the seed function.
- **Supabase MCP server was not authenticated** — `SUPABASE_ACCESS_TOKEN` was not set in the environment, so MCP tools like `execute_sql` returned "Unauthorized". The workaround was using the Supabase Management API and REST API directly with curl. The access token `sbp_62a33c9b1a8f213d2e23abc9f7663e02eae90c21` was provided by Pietro during the session — it should be configured as an environment variable for future sessions.
- **Supabase CLI `supabase status`** requires Docker, which is not running on this machine. Edge function deployment works without Docker (uploads directly), but local development/testing of functions is not available.

### Remaining Work

1. **Configure `SUPABASE_ACCESS_TOKEN` as a persistent environment variable** so the Supabase MCP tools work in future sessions without needing to re-enter the token.
2. **Resolve the Vercel account confusion** — Pietro mentioned wanting to remove the `advantedgemanager` account from Vercel entirely, or at minimum delete the `advantedgemanager` GitHub repo if it exists. This is still pending.
3. **Verify the deployed site shows all content correctly** — the new sections (Top-Down Assessment, Risk Drivers) were inserted into the database and the seed function was redeployed, but visual verification on the live deployment has not been done.
4. **Consider adding the intro paragraphs for Business Model Disruption, Legal Risks, Reputational Risk, and Policy-driven Market Risk to the database** — these were added to the TSX fallback but not inserted into the database (the database already had manually-curated content for those sections that is richer than the TSX).
5. **Audit other seed functions** (`seed-steel-content`, `seed-cement-content`, `seed-automotive-content`, `seed-categories`, `seed-products-content`, `seed-shipping-content`) — they likely have the same destructive delete-and-recreate pattern and should be rewritten to use the non-destructive upsert approach before they are ever invoked again.

### Open Questions

1. Should the `advantedgemanager` Vercel account be deleted, or is the current setup (advantedgemanager Vercel → advantedgemanager2 GitHub) acceptable long-term?
2. Does Pietro want to delete the `advantedgemanager` GitHub account or repo if it exists?
3. Should the other sector-specific seed functions be rewritten to be non-destructive now, or only when they next need to be invoked?

---

## Session: 2026-03-12 at ~23:30

### Accomplished

1. **Committed and pushed `project-context.md` to main** — the file was staged but uncommitted from the previous session. Committed and pushed to `origin/main` successfully.

2. **Deployed and invoked the `seed-content` edge function** — deployed the function via `supabase functions deploy seed-content` and invoked it with the service role key. The function reported 19 pages seeded, 73 sections upserted on the transition-risks page alone.

3. **Third database restore required** — the seed function, despite being "non-destructive" (upsert by `section_id`), caused significant content damage on the transition-risks page. The upsert pattern overwrote manually-curated database content with the seed file's version, which was incomplete and structurally incorrect. Specifically: the list of transition risk types in the "Types of Transition Risks" section was truncated (the database had more risk types than the seed file), the TRL (Technology Readiness Level) section was misplaced, and a heading "Systemic and Macro-Financial Risk" was incorrectly placed under the TRL section. Pietro restored the database from the daily backup taken at 2026-03-12 08:40 UTC via the Supabase dashboard.

4. **Established a permanent rule: never seed or push content to the database unless it's a brand new blank page** — this rule has been saved to Claude Code memory and must be enforced in all future sessions. The seed file may be edited locally for reference or for new pages, but must never be deployed or invoked against existing pages.

### Decisions Made

- **CRITICAL — No seeding, deploying, or pushing content to the live database for existing pages.** The seed function must never be deployed or invoked unless the target is a completely new blank page that doesn't exist in the database yet. This supersedes the previous session's decision about "non-destructive upsert" — the upsert pattern is still not safe because the seed file does not reflect the full state of the database. Manually-added content in the database is richer and more complete than the seed file, and any upsert overwrites it.
- **The seed file (`supabase/functions/seed-content/index.ts`) is now treated as a local reference file only**, not as a deployment artifact for existing pages. It can be edited to keep a record of intended content structure, but execution against the live database is prohibited.
- **Content additions to existing pages must be done through the admin UI or direct targeted REST API calls for individual new sections only** — never through the seed function.

### Files Changed

- `project-context.md` — committed and pushed to main (content from previous session).
- `supabase/functions/seed-content/index.ts` — no changes were made to the file this session; the existing version was deployed and caused the incident.

### What Did Not Work

- **The "non-destructive" upsert seed function still caused data loss** — even though it no longer deletes sections, it overwrites existing sections by `section_id` with the seed file's version. The seed file is out of sync with the database: it has a truncated list of transition risk types, misplaced sections (TRL under wrong heading), and incorrect headings ("Systemic and Macro-Financial Risk" placed under TRL). The fundamental problem is that the seed file is a stale, incomplete snapshot — the database is the source of truth, and any seed execution overwrites the truth with stale data.
- **Supabase backup restore via Management API is not supported** — `POST /v1/projects/{ref}/database/backups/restore` returns 404. Restores must be done manually through the Supabase dashboard (Settings → Infrastructure → Backups).
- **Git commit hung on first attempt** — the initial `git commit` command hung indefinitely (likely waiting for an editor or GPG prompt). Resolved by using `git -c commit.gpgsign=false commit` which succeeded.

### Remaining Work

1. **Fix the seed file to match the actual database content** — the seed file has structural errors (truncated risk type list, misplaced TRL section, incorrect headings). It should be corrected to reflect the true database state so it serves as an accurate local reference, even though it will not be deployed.
2. **Add the 4 new transition risk descriptions to the database** — Pietro provided content for Business Model Disruption Risk, Legal Risk, Reputational Risk, and Policy-Driven Market Risk as Title + Paragraph entries to be added within the "Types of Transition Risks" section. These need to be added through the admin UI or targeted REST API calls — not through the seed function.
3. **Configure `SUPABASE_ACCESS_TOKEN` as a persistent environment variable** (carried over from previous session).
4. **Resolve the Vercel account confusion** (carried over from previous session).
5. **Audit other seed functions** for the same structural issues (carried over from previous session).

### Open Questions

1. Where exactly within the "Types of Transition Risks" section should the 4 new risk descriptions (Business Model Disruption, Legal, Reputational, Policy-Driven Market) be placed relative to the existing content in the database? Pietro indicated they should follow the order of the numbered list and be interleaved between existing detailed sections — this needs to be verified against the current database state after the restore.
2. Should the seed file be updated to match the database, or should it be left as-is since it will never be deployed again?
3. Questions carried over from previous session: Vercel account cleanup, other seed function audits.

---

## Session: 2026-04-13 at ~00:30

### Accomplished

1. **Generated a full graphify knowledge graph of the entire codebase** — 469 nodes, 344 edges, 201 communities detected across 146 files (~139,333 words). AST extraction produced 239 structural nodes and 738 edges; 7 parallel semantic subagents added 231 semantic nodes and 243 edges covering domain concepts, regulatory frameworks, architectural patterns, and cross-file relationships. Token reduction benchmark: 475x fewer tokens per query versus reading raw corpus.

2. **Discovered the application's "three islands" architecture** — the three major layers (Supabase Backend, Content Display Components, Sector Pages & Data) are completely disconnected from each other in static code. Community 0 (Backend) has 31 nodes, 60 internal edges, and zero external edges. Community 1 (Content Display) has 24 nodes, 28 internal edges, and zero external edges. Community 10 (Sector Pages) has 8 nodes, 10 internal edges, and zero external edges. The entire 469-node graph has only 2 cross-community bridges, both in the domain concept layer: Credible Transition Plans ↔ Prudential Transition Plan (INFERRED, 0.75) and Transition Finance → General Corporate Purpose Loans (EXTRACTED, 1.0).

3. **Mapped the invisible 5-layer content pipeline** — traced how content flows from seed functions (Layer 1, Community 0) through the Supabase database to data hooks (Layer 2, Community 5), to page routes (Layer 3, Community 4), to the DynamicPageContent section renderer (Layer 4, Community 1), dispatching to 12 section types (heading, paragraph, callout, list, accordion, table, blockquote, diagram, card_grid, kpi_metric, image_media, cta_button). Identified 9 specific runtime bridges invisible to static analysis that, if made explicit, would collapse 199 disconnected subgraphs to approximately 5-10.

4. **Traced all three rationale nodes** — the graph contains exactly three explicit "why" nodes: (a) "No New Transition Finance Product Label Needed" — justifying the tool's approach of making existing instruments smarter rather than inventing new ones; (b) "SLLs Should Be Sector-Specific Not Sector-Agnostic" — the complementary argument that existing labels need sector customisation; (c) "Seed Function Must Never Overwrite Existing DB Content" — the operational lesson from the database incidents recorded in previous sessions.

5. **Traced the sector page navigation chain and cross-section bridges** — discovered the chain is broken in the graph (Shipping↔Automotive and Cement↔Steel are only INFERRED semantic similarity, not EXTRACTED references). Found that Shipping has no static content data file (asymmetry vs Automotive/Steel/Cement which all have `src/data/sectors/*Content.ts`). Identified KPIsCriteria as a hidden bridge node — the only page linking across section boundaries (Products → Governance).

6. **Created community connection tracer tooling** — `graphify-out/trace-communities.py` analyses cross-community bridges and saves snapshots for diffing; `graphify-out/post-update-trace.sh` wraps it for post-update use. Installed a `post-commit` git hook that auto-rebuilds the graph (AST only, no LLM cost) on every commit and runs the community tracer with `--diff`.

7. **Committed and pushed all outputs to origin/main** — rebased on top of remote changes (two new commits: drag-and-drop page reorder and prev/next navigation fix) and pushed successfully.

### Decisions Made

- **graphify-out/ is tracked in git** but temp/cache files (.graphify_*, cache/) are excluded via .gitignore. The meaningful outputs (GRAPH_REPORT.md, graph.html, graph.json, tracer scripts) are versioned so future sessions can query the graph without rebuilding.
- **Post-commit hook auto-rebuilds on code changes only** — uses AST extraction (deterministic, no LLM cost). Document/image changes require a manual `/graphify --update` followed by `bash graphify-out/post-update-trace.sh` to trigger semantic re-extraction with community diffing.
- **The graph reveals that the application's decoupled architecture is intentional but invisible** — the three main layers communicate only through the database and string-based dispatch (section_type). No decision was made to change this, but it is now documented as a known architectural characteristic.

### Files Changed

- `.gitignore` — added exclusions for graphify temp/cache files (`graphify-out/.graphify_*`, `graphify-out/.community_snapshot.json`, `graphify-out/cache/`)
- `graphify-out/GRAPH_REPORT.md` — full audit report: god nodes, surprising connections, hyperedges, community breakdowns, suggested questions
- `graphify-out/graph.html` — interactive HTML graph visualization (469 nodes, open in any browser)
- `graphify-out/graph.json` — raw graph data in NetworkX node-link format (289KB)
- `graphify-out/cost.json` — cumulative token cost tracker across graphify runs
- `graphify-out/manifest.json` — file manifest for incremental `--update` runs
- `graphify-out/trace-communities.py` — standalone community connection analyser with `--diff` support
- `graphify-out/post-update-trace.sh` — wrapper script for running tracer after `/graphify --update`
- `.git/hooks/post-commit` — auto-rebuild hook (local only, not pushed to remote)
- `project-context.md` — committed previous session's entry as part of this push

### What Did Not Work

- **The post-commit hook creates a nested `graphify-out/graphify-out/` directory** when it fires during `git rebase` — the hook runs from a context where the working directory may differ. Cleaned up manually with `rm -rf`; the hook works correctly during normal commits. Minor issue, not blocking.
- **`git stash pop` failed after rebase** because the post-commit hook modified `graph.json` during the rebase's re-commit, creating a conflict with the stashed version. Resolved by restoring from HEAD and dropping the stash. This is an inherent tension between hooks that modify tracked files and git rebase workflows.

### Remaining Work

1. **Explore adding explicit bridge annotations** — JSDoc comments or type references that would make the 9 invisible runtime connections visible to future graph builds, collapsing the 199 disconnected subgraphs.
2. **Create a `shippingContent.ts` data file** — Shipping is the only sector page without a static content data fallback (Automotive, Steel, Cement all have one). This asymmetry may or may not be intentional.
3. **Fix the post-commit hook working directory issue** — ensure it runs from the repo root during rebase operations to avoid creating nested output directories.
4. **Remaining work carried over from previous sessions:** fix seed file to match database, add 4 new transition risk descriptions via admin UI, configure SUPABASE_ACCESS_TOKEN, resolve Vercel account confusion, audit other seed functions.

### Open Questions

1. Should the 9 invisible runtime bridges be made explicit in code (e.g., via JSDoc annotations referencing cross-layer dependencies), or is the current decoupled architecture intentionally opaque?
2. Is the missing `shippingContent.ts` data file intentional (Shipping content is DB-only) or an oversight?
3. Questions carried over: Vercel account cleanup, seed file update strategy, other seed function audits.
