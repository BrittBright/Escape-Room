# Bio-Reset: Lab Lockdown

A self-contained, point-and-click biology escape room about the scientific method. The room art is inline SVG, and the interaction uses plain HTML, CSS, and JavaScript. There are no build tools or external game-engine packages.

## Run it

Open index.html in a modern browser. For the most reliable local preview, serve the folder with any static web server.

## Publish with GitHub Pages

1. Create a new GitHub repository for this project.
2. Upload index.html, styles.css, game.js, and README.md to the repository root.
3. In the repository settings, enable Pages and publish from the main branch and root folder.
4. Open the published Pages URL to test the whole activity.

The site is static, so it can be opened directly from its public URL. Students do not need GitHub accounts.

## Add to Canvas

Add the published URL to a Canvas module as an External URL. Canvas can display an external URL in an iframe or open it in a new tab. Test the embedded version in Student View; if the embed is blocked by the institution's content security settings, use the new-tab option or ask an administrator to allow the site's domain.

This standalone app does not send scores or answers to Canvas. If completion needs to appear in the Gradebook, add a Canvas quiz or assignment after the game. The override code is checked in browser-side JavaScript, so this should be treated as a learning activity, not a secure exam.

## Included interactions

- Six clickable room hotspots: five science puzzles and the exit keypad
- Optional hints and explanatory retry feedback
- A notebook that records recovered digits
- A five-digit final override
- Progress saved in browser storage when available; the game still runs if storage is blocked
- Keyboard-accessible hotspots, native dialog behavior, labelled form controls, a text data table, and reduced-motion support
- Responsive layout for desktop and narrow screens

## Answer key

The master code is 32431. The code is stored in the client-side game script so it can be checked without a server. Do not use this version to secure graded answers.
