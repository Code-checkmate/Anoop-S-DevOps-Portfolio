# Anoop S. — DevOps Portfolio

Portfolio content lives in `src/data/portfolio.ts`. Edit the typed records there; page layout and interactions are in `src/App.tsx`, with the design system in `src/index.css`.

## Adding real assets

- **Resume:** place the confirmed PDF at `public/resume/anoop-s-resume.pdf`. Then update the resume action on the Hire Me page to link to that file. Until then it is intentionally unavailable.
- **Project screenshots:** place images in `public/images/projects/` (suggested predictable filename: `<project-slug>.png`) and set `image` on that record in `projects`.
- **Architecture diagrams:** place diagrams in `public/images/architecture/` (suggested filename: `<project-slug>.png`) and set `diagram` on the relevant record.
- **Certificates:** place confirmed certificate images/PDFs in `public/images/certifications/`, then replace the empty typed `certifications` list and render only confirmed issuer, date, credential ID, and verification details.
- **Repository links:** add only confirmed URLs to `repository` and optional `readme` on a project record. External links are opened with safe `noreferrer` attributes.
- **Project descriptions and tags:** edit each `Project` in `projects`; keep `verified` false until the content is checked.
- **Experience and training:** edit `experience` and `trainings` arrays. Keep role dates and learning-status wording accurate.
- **Contact details:** edit the shared `profile.contact` record. All page contact links reference this single source.

Missing asset files do not affect the current layout: project and credential areas show deliberate placeholders. Contact form submission is an email-client draft fallback, not a server delivery service.
