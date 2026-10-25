# ISC Course Hub — B.Tech CSE

A clean, responsive course-resource website for B.Tech Computer Science and Engineering (CSE) students. ISC Course Hub brings course documents together in one place so students can quickly find and open the resources they need.

## About the Course

This website is intended to support students studying the ISC course in the B.Tech CSE programme. It provides a convenient place to access course-related documents for learning, assignments, laboratory work, and syllabus reference.

> **Note:** Use the syllabus and course instructions provided by your college or department as the official source for course requirements, deadlines, and assessment rules.

## Website Features

- **Syllabus:** Access the course syllabus.
- **Lab Assignments:** Find programming and laboratory assignment PDFs.
- **Class Assignments:** Access class-assignment resources.
- **Lecture Materials:** Browse study materials, lecture notes, and related documents.
- **Search and category filters:** Find resources by title or category.
- **PDF preview and download:** Open available resources in the browser or download them.
- **Responsive interface:** Designed to work on desktop and mobile screens.

## Resource Categories

The website stores documents in separate folders to keep resources organised:

```text
materials/
├── syllabus/
├── lab-assignments/
├── class-assignments/
└── lecture-materials/
```

Keep each PDF in the appropriate folder. The resource paths in `materials.js` must match the real filenames and folder paths exactly, including capitalisation, spaces, and punctuation.

## Project Structure

```text
ISC_Course_Hub/
├── index.html       # Main website page
├── styles.css       # Layout, styling, and responsive design
├── app.js           # Search, filters, and page interactions
├── materials.js     # Resource list and PDF paths
├── vercel.json      # Vercel configuration
├── README.md        # Project documentation
└── materials/       # Course PDF resources
```

## Run Locally

1. Download or clone this repository.
2. Make sure `index.html` and the `materials` folder are in the correct project root.
3. Open `index.html` in a browser to preview the static page.

For the most reliable local testing, use a simple local web server or the Live Server extension in Visual Studio Code.

## Add or Update Materials

1. Place the PDF in the correct subfolder inside `materials/`.
2. Add or update its entry in `materials.js`.
3. Check that the path in the entry exactly matches the file location. For example:

   ```js
   {
     title: "Example Lab Assignment",
     category: "Lab Assignments",
     path: "materials/lab-assignments/example-assignment.pdf"
   }
   ```

   Use the actual object format and field names already present in your `materials.js` file.
4. Test the PDF link locally.
5. Commit and push the changes to GitHub. If Vercel is connected to the repository, it should deploy the update automatically.

## Deploy on Vercel

This is a static HTML, CSS, and JavaScript website and does not require a backend or database for displaying and downloading the included public PDFs.

1. Push the project files and `materials/` folder to your GitHub repository.
2. Import that repository into Vercel, or open the existing Vercel project connected to it.
3. For a project with `index.html` at the repository root, use the appropriate root directory and configure the project as a static site. In a typical Vercel configuration, choose **Other**, leave the build command empty, and set the output directory to `.`.
4. Deploy and test the live website, including several PDF preview and download links.

If you change the Vercel root directory, ensure it points to the folder containing `index.html` and `materials/`.

## Important Notes

- All files referenced by the website must be committed to the GitHub repository and included in the Vercel deployment.
- The paths in `materials.js` must match the real file paths. A `404 NOT_FOUND` error often means a file is missing from the deployment or the configured path does not match its location.
- Files placed in the public `materials/` directory are publicly accessible. Do not store private, personal, or restricted documents there.
- This version does not include an administrator login or a browser-based upload dashboard. To add or delete materials, update the repository files and `materials.js`, then redeploy.
- Check copyright and college policies before sharing course materials publicly.

## Technology

- HTML
- CSS
- Vanilla JavaScript
- Vercel for static hosting (optional)

## Contributing

If you improve the site or add resources, keep the folder structure organised, update `materials.js`, and test the links before deploying.

---

Made for easier access to ISC course resources for B.Tech CSE students.
