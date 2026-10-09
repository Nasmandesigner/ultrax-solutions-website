# Asset conventions

Keep the supplied `Assets/` and `Reference/` folders as the untouched source archive. The app uses selected copies from these folders so originals remain available.

## Runtime locations

- `public/brand/`: approved logo and brand marks. Use descriptive, lowercase filenames such as `ultrax-wordmark-light.svg` and `ultrax-wordmark-dark.svg`.
- `public/images/team/`: approved team portraits named by the subject, for example `muhammad-buhari.webp`.
- `public/images/projects/<project-slug>/`: approved case-study screenshots, event photography, campaign assets, or video posters. Keep each project in its own folder.
- `public/images/illustrations/`: supplied or commissioned supporting illustrations.
- `src/app/fonts/`: local font files loaded by `next/font/local`.

Use descriptive alt text for informative images and empty alt text for decorative artwork. Add image rights/credit notes to the corresponding content entry before publishing. Keep the original dimensions and licensing details in the asset handoff notes when known.

## Current selections

- The two SVG wordmarks are copied into `public/brand/` with normalized filenames.
- The supplied crumpled-paper lightbulb illustration is copied to `public/images/illustrations/idea-lightbulb.png` for decorative homepage use; it is not presented as project work.
- The three supplied Lufga weights are copied into `src/app/fonts/` and used by the site shell; confirm the web-use license before public launch.
- The Riosark file remains in `Assets/` until its font family, intended role, and web-use license are confirmed.
- Project and team image folders are reserved; no supplied images are assigned to a project yet.
