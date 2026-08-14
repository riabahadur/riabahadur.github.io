RIA BAHADUR — SEARCH-PRESERVING ARCHIVE UPDATE
================================================

Adds/replaces:
- archive/index.html
- archive/debate/index.html
- archive/music/index.html
- archive/kathak/index.html
- archive/poetry/index.html
- archive/community/index.html

WHY THE DEEP PAGES EXIST
The legacy riabahadur.com site currently has Google-visible/indexed pages for
Debate, Hindustani Music, Kathak, Poetry, and IACS. These subjects therefore
receive dedicated successor URLs rather than being collapsed into one generic
Archive page.

PLANNED LEGACY URL MAP AT DOMAIN CUTOVER
- /home/debate           -> /archive/debate/
- /home/music-hindustani -> /archive/music/
- /home/dance-kathak     -> /archive/kathak/
- /home/poetry           -> /archive/poetry/
- /home/iacs             -> /archive/community/
- /home/research         -> /research/
- /home/governmentpolicy -> /policy/
- /home                  -> /
- /home/fun              -> /about/  [review before cutover]

IMPORTANT:
Do not rely on client-side/meta-refresh redirects as the final migration plan if
a true HTTP 301/308 redirect layer can be configured. At final cutover, choose
a redirect mechanism compatible with GitHub Pages/custom-domain hosting and test
every legacy path individually.

SEO CONTENT PRESERVATION
- Deep-page titles/descriptions retain the legacy subject vocabulary.
- Material is updated for accuracy rather than copied blindly from the older site.
- Public historical substance is retained where useful.
- Unpublished poetry/manuscripts are not exposed merely to preserve old page length.
- Early neuroscience remains under /research/ rather than being duplicated in Archive.

Suggested commit:
Build search-preserving legacy archive
