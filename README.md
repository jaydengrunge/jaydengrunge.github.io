# Personal Website

Jekyll site for GitHub Pages. GitHub builds it automatically — no local tools required.

## Structure
```
_config.yml            Site settings + navigation menu
index.html             About / home page
research.md            Research page
publications.md        Publications page
teaching.md            Teaching page
contact.md             Contact page
trips.html             Trip report index (auto-lists every trip)
_trips/                One Markdown file per trip
images/trips/<trip>/   Photos for each trip
_layouts/, _includes/  Templates (rarely need editing)
assets/css/style.css   Styles
files/cv.pdf           Your CV
```

## Adding a new trip report
1. Copy `_trips/2026-09-example-trip.md` to e.g. `_trips/2026-10-mt-elbert.md`.
2. Make a folder `images/trips/mt-elbert/` and drop your photos in it.
3. Edit the front matter: `title`, `date`, `location`, stats, `image_dir: /images/trips/mt-elbert`, `cover`, and the `gallery` list.
4. Write the story in Markdown below the `---`. Insert inline photos with
   `{% include figure.html src="photo.jpg" caption="..." %}`.
5. Commit and push. The trip appears on the Trip Reports page, sorted by date.

Tip: resize photos to ~2000px wide (and under 1 MB) before uploading. On macOS:
`sips -Z 2000 images/trips/mt-elbert/*.jpg`

## Adding a page to the menu
Create `newpage.md` with `layout: page` and `permalink: /newpage/`, then add it under `nav:` in `_config.yml`.

## Deploy
1. Create a repo named `yourusername.github.io`.
2. `git init && git add . && git commit -m "Initial site" && git branch -M main`
3. `git remote add origin https://github.com/yourusername/yourusername.github.io.git && git push -u origin main`
4. Settings → Pages → Deploy from branch `main`, folder `/ (root)`.

## Preview locally (optional)
```sh
gem install bundler jekyll
jekyll serve
```
Then open http://localhost:4000.
