# Naveen Kumar G — Data Analyst Portfolio

A modern, responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Designed for data analyst job seekers with a clean, professional aesthetic.

## 🚀 Quick Start

1. Clone or download this repository
2. Open `index.html` in your browser — that's it!

No build tools, no npm, no dependencies. Pure static files.

## 📁 Project Structure

```
portfolio/
├── index.html    # Main HTML structure
├── style.css     # All styles (dark/light mode)
├── data.js       # ⭐ ALL content — edit this file!
├── app.js        # Application logic (don't need to edit)
└── README.md     # This file
```

## ✏️ Customizing Your Content

**All content is in `data.js`** — you never need to touch `index.html`, `style.css`, or `app.js` to update your portfolio.

### Adding/Editing Projects

Open `data.js` and find the `projects` array. Each project is an object:

```javascript
projects: [
  {
    title: "My Awesome Project",
    description: "A brief 2-3 line description of what this project does.",
    tags: ["Python", "Pandas", "Power BI"],
    githubLink: "https://github.com/yourusername/project-repo",
    demoLink: "https://your-live-demo.com",  // Leave empty "" if no demo
    image: "path/to/screenshot.png"           // Leave empty "" for default placeholder
  },
  // Add more projects by duplicating the object above
]
```

### Updating Personal Info

Edit the `personal` object in `data.js`:

```javascript
personal: {
  name: "Your Name",
  title: "Your Job Title",
  email: "your@email.com",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/yourusername",
  resumeLink: "path/to/your-resume.pdf",
  // ... other fields
}
```

### Adding Skills, Experience, Education

All sections follow the same pattern — find the relevant array in `data.js` and add/edit objects.

## 🌐 Deployment

### GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Under "Source", select **Deploy from a branch**
4. Choose `main` branch and `/ (root)` folder
5. Click **Save** — your site will be live at `https://yourusername.github.io/repo-name`

### Netlify

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **"Add new site" → "Import an existing project"**
3. Connect your GitHub repository
4. Build settings: Leave blank (no build command needed)
5. Publish directory: `.` or `/`
6. Click **Deploy site**

### Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"** and import your repository
3. Framework Preset: **Other**
4. Build settings: Leave all blank
5. Click **Deploy**

### Manual Upload (Any Static Host)

Just upload all files (`index.html`, `style.css`, `data.js`, `app.js`) to your hosting provider's public directory.

## 🎨 Features

- **Dark/Light Mode** — Toggle with the button in the navbar
- **Fully Responsive** — Works on mobile, tablet, and desktop
- **Smooth Animations** — Scroll-triggered fade-ins and skill bar animations
- **Zero Dependencies** — No npm, no build tools, no frameworks
- **SEO Optimized** — Proper meta tags, semantic HTML, accessible markup
- **Fast Loading** — No external libraries, minimal footprint
- **Easy Customization** — All content in one data file

## 📝 Contact Form

The contact form uses `mailto:` to open the user's email client. For a more advanced solution, you can:

1. **Formspree**: Replace the form's `onsubmit` in `app.js` with a Formspree endpoint
2. **Netlify Forms**: Add `netlify` attribute to the form tag
3. **EmailJS**: Integrate EmailJS for client-side email sending

## 📄 License

Feel free to use this template for your own portfolio. Attribution appreciated but not required.
