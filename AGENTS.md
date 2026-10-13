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

- App images must be real files imported from `src/assets/`, never Lovable CDN asset pointers: the site is deployed as a static build to GitHub Pages, where Lovable's `/__l5e/...` asset URLs are not served and would render broken.
