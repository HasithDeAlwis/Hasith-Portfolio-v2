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
├── .husky/                         // CI tool for staged and commit linting
├── apps/
│   ├── payload/                    // Payload CMS: Headless CMS for building dynamic APIs and admin panels
│   │   ├── src/
│   │   │   ├── controllers/
│   │   ├── ├── migrations/          // Payload CMS migrations
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   └── collections/         // Payload CMS collections
│   │   ├── payload.config.ts
│   │   ├── server.ts
│   │   ├── dockerfile
│   ├── storybook/
│   │   ├── stories/                // Directory for stories
│   │   └── .storybook/
│   │       ├── main.js
│   │       └── preview.js
│   ├── website/                    // Main website for personal portfolio
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   └── ui/              //shadcn components
│   │   │   │   └── index/           // components used in index
│   │   │   ├── layouts/
│   │   │   │   └── MainLayout.astro
│   │   │   ├── pages/
│   │   │   │   └── index.astro
│   │   │   ├── helpers/
│   │   │   ├── styles/
│   │   │   └── tests/               // Tests directory for the website
│   │   │       ├── unit/            // Unit tests
│   │   ├── dockerfile
│   ├── website-e2e/                 // E2E tests for the main website
│   │   ├── tests/
│   │   │   ├── navigation/
│   │   │   │   └── header.spec.ts
│   │   │   └── components/          // Component tests
│   │   │       └── button.spec.ts
│   │   ├── playwright.config.ts
│   │   └── package.json
├── commitlint.config.ts             // commit linting rules
├── eslint.config.ts                 // linting rules
└── package.json
```

## 🎨 Figma

Link to this project's [Figma](https://www.figma.com/design/5mPcnmiJ9VuclwIzIPG8gp/Hasith-De-Alwis-Portfolio?node-id=107-337&t=USZvijke5NSvDKp9-1)
