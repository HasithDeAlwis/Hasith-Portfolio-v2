# 👋 Welcome to my Portfolio

Hi! Welcome to my portfolio, now that I've amassed roughly a year of development experience I have decided to revamp my portfolio! This marks my first project where I commit seriously to executing best practices and following industry standards. I'll document all my learnings here in [LEARNINGS.md](/LEARNINGS.MD) and issue #2.

## 🏃‍♀️ Getting Started

1. Install pnpm
   `npm install -g pnpm`
   Use this to install pnpm globally on your system. Verify the installation using `pnpm --version`.

2. Install dependencies
   `pnpm i`

3. Run the app
   `pnpm dev`
   The portfolio will now be running on port 4321!

## 🚀 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── api/
│   ├── components/
│   │   └── page-1-components
│   │   └── page-2-components
│   ├── helpers/
│   ├── layouts/
│   └── pages/
│       └── index.astro
│   ├── services/
│   ├── tests
│       └── unit/
│       └── e2e/
└── package.json
```

- `src/api`: where the the API layer exists
- `src/components`: where any reusable components of the app exist
- `src/helpers`: where functions that are reused throughout the app exist
- `src/layout`: where HOC exists will be used to enforce generic page layouts
- `src/pages/`: where each page exists. Astro looks for `.astro` or `.md` files in the directory. Each page is exposed as a route based on its file name.
- `src/services`: where larger functions or scripts will exist
- `src/test`: where all tests reside, unit and e2e
  Any static assets, like images, can be placed in the `public/` directory.

## 🎨 Figma

Link to this project's [Figma](https://www.figma.com/design/5mPcnmiJ9VuclwIzIPG8gp/Hasith-De-Alwis-Portfolio?node-id=107-337&t=USZvijke5NSvDKp9-1)
