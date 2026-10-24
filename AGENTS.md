<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Rules

- All user-visible copy lives in `src/lib/content.ts` as one dictionary per language, with `nb` (Norwegian) as the default; pages read their text from `useLang()` instead of hardcoding strings, and every new page adds its keys to all three languages so the content test keeps the dictionaries in sync.
- Gallery and home service tiles share a browser-safe MotionSurface with pointer-driven CSS variables and reduced-motion support; this keeps interactive effects consistent without an animation dependency.
