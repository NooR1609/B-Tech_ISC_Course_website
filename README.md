# ISC Course Hub — B.Tech CSE

A responsive, static website for ISC–S101 Programming & Computing (C & UNIX). It includes the PDFs supplied for the project, grouped into syllabus, lab assignments, class assignments, and lecture materials.

## Run locally

No backend, database, API keys, or build step is required.

1. Extract the project folder.
2. Open `index.html` in a browser. For best local preview, run a simple static server from this folder (for example `python3 -m http.server 8000`) and visit `http://localhost:8000`.

## Deploy (recommended: Vercel)

This is a static site, so you do **not** need a separate backend. That avoids the server/API connection issues common in a beginner deployment.

1. Upload the whole `isc_course_site` folder to a GitHub repository (keep the `materials/` folder and all PDFs).
2. In Vercel, choose **Add New → Project**, import that GitHub repository.
3. Framework preset: **Other**. Build command: leave blank. Output directory: `.` (the project root). Install command: leave blank.
4. Deploy. Vercel should serve `index.html` at the site root.

You can also use GitHub Pages or Netlify for this static project. If choosing GitHub Pages, publish the repository root.

## Add another PDF later

1. Put the PDF in the matching folder:
   - `materials/syllabus/`
   - `materials/lab-assignments/`
   - `materials/class-assignments/`
   - `materials/lecture-materials/`
2. Open `materials.js` and add an object to the `MATERIALS` array. Example:

```js
{
  title: 'Lecture 06 — Arrays',
  category: 'lecture-materials',
  file: 'lecture-06-arrays.pdf',
  path: 'lecture-materials/lecture-06-arrays.pdf',
  description: 'Lecture notes on arrays in C.',
  tag: 'Lecture notes',
  pages: 'PDF'
}
```

3. Save, commit and push to GitHub. Vercel automatically redeploys.

## Notes

- All materials are static files included in the repository. Anyone who can access the site can view/download them; do not put private documents here.
- This version intentionally has no admin upload login, database, or server-side features. It is the simplest and most reliable option for a public course-material library. If you later need a private admin dashboard, that requires a storage service and authenticated backend.
- Resource descriptions are navigation aids, not a replacement for the original documents. Follow your instructor's latest instructions if a document is updated.
