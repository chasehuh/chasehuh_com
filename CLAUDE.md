# Daily Logs Workflow

When the user writes daily log content in Korean:
1. Translate the content to natural English
2. Write both versions to the markdown file using the `<!-- LANG:KO -->` separator (same pattern as blog posts)
3. The Korean version goes below the separator, English above
4. Keep the tone casual and concise — these are personal daily logs, not formal writing
5. Commit and push when asked

Example format for `content/logs/YYYY_MM_DD.md`:
```markdown
---
date: "YYYY-MM-DD"
---

- English translated content here.

<!-- LANG:KO -->

- 한국어 원본 내용.
```
