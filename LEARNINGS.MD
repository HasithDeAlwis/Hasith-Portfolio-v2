# 👋 Welcome Learnings

LEARNINGS.md is the primary source for where I'll be putting down all the notes of what I learned while developing this project. Currently, Issue #2 also contains information on what I've learned, but going forward, LEARNINGS.md is where I will put down all the official notes of what I learned. Issue #2 will document concepts I WANT to learn about.

# LEARNING #1

## ASTRO FINDINGS

## What is Astro

Astro is a performant tool to build MPA and SPA. It relies on **island** architecture (which it pioneered 😮), and builds on something called partial and selective hydration (will research more into this later). Islands are any interactive part of a website, they can be run in isolation, and everything else is static HTML. This is highly performant since JS is the slowest asset you can load per byte.

## My Thoughts

Islands are a great way to code and it allows you, as a developer, to not get distracted by bloat and weird state management. I also had problems with the performance of Gatsby, especially on the animation side.

Pros:

- No more React 🥳 (when you don't need it 😉)
- Bare HTML and CSS
- Integrates with TailwindCSS and DaisyUI
- Has good documentation on Vitest
- Minimal bloat
- File-based page routing

Cons:

- Longer development time (potentially) because of pure HTML (though I don't suspect this)
- Lacks an exhaustive ecosystem of developers and plugins (probably means long trips to node_modules to debug)

## Concepts to Research

These are concepts I want to look back on and learn more about throughout this project:

- Prefetch for links
- Selective and Partial hydration
- Internationalization (i18n) --> This site should be possible to read in French and English
- Connecting to a CMS
- Look into hydration strategies

# LEARNING #2

## Design System Findings

---

To increase my value as a dev, I want to explore Figma and understand UI/UX to a higher degree. I'll be starting with learning what a design system is.

## **Atomic Design Framework**

**Atom**

- Colour, spacing, essentially the smallest elements

**Molecule**

- combinations of atoms (checkbox)

**Organism**

- a combination of molecules (sidebar or a header)

**Template**

- Many organisms to make a template (final product)

## Colour Styles

- Have more colours of grays than other colours
- 5-10 shades of other colours (primary, secondary, success, error,
- use numbers to name the colour (ie. primary/primary-100)
- We can then reuse these colour styles across our app (much like TailwindCSS styles)

## Text Styles

- Have a Display Type for headers that are bigger than the H1
- Headings, from h1 to h5
- Subheadings from subheading1-subheading2
- Paragraphs from p1-p5

## Design Components

- We need a primary version, secondary versions, etc. for these components
- We need large, medium, and small buttons
- We can use our defined styles (ie. colour styles, text styles, and spacing styles)
- The important part of this is to plan this thoroughly and preemptively to make your components

## Notes

- With an understanding of the atomic design framework, we can use this as the building block for making a design system on Figma.
- Important that we decide on the atoms as a first step so that we can build a strong foundation for our design.
- Design with master components
