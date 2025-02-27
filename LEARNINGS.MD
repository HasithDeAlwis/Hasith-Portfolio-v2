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


# LEARNING #3

Docker and all it's fun stuff!
Basically, I learned the importance of a monorepo with this project. This should never have been made into a polyrepo because I knew that I had a CMS AND a storybook to deal with. PayloadCMS itself is a very complicated app and it needs to have it's dependencies effectively managed. In the original payload-2 app I tried, it was just an express app. I endedup deploying it using AWS Lightsail and that was a painstaking process. 

## Learning Experience w/deploying Payload v2
- Building the app itself
    - Because of JavaScript's messed up ecosystem, building a node app was incredibly hard. I tried w/3 different bundlers (Webpack, Rollup, and ESBuild) each of which failed because neither were able to tree-shake effectively to resolve conflicts with ESM vs CommonJS modules. 
    - From this experience, I learned a lot more about bundlers. I learned what tree-shaking is, the difference between different bundlers. I learned how ESBuild manages to build every app so quickly and why Vite uses it for dev
- Dockerizing the app
    - I had no clue what Docker was before this or why it was even useful, I just thought it'd be a cool challenge to deploy this with docker
    - It was a cool challenge and I learned a lot from it. Docker is really quite simple, and I learned that it can even be used in my development workflow since you can still maintain HMR w/Docker. 
    - I might introduce it to cuHacking w/our dev containers so that we keep external contributors on the same env as everyone else so we don't need to deal w/crazy bugs. 
- Deploying through AWS Lightsail
    - This is the coolest thing ever. It never clicked for me that anytime I visit a site on the web, it's just a computer that's running a "start" command. 
    - I SSH'd into the VM and deployed it, and while there was still a lot that I didn't do hands-on, it got me thinking about different ways of deployment other than Netlify. Maybe using SST to for infrastructure-as-code for my next side-project

All in all, this was very cool to work with and deploy, however, I had to switch to PayloadV3 and Netlify for deployments for various reasons. 
- Netlify's availability is much higher than I could ever have w/just AWS and I need ppl from all around Canada to see my website w/out latency
- Dealing w/ESM vs CJS module conflicts is such a pain, any new package I introduce is just another point of failure for my project, so I had to bite the bullet and use PayloadV3, which is quite nice. 

# LEARNING 4
**RICH TEXT EDITING!!!!**
---
I didn't have an appreciation for rich-text and all its nuance until now. I wanted to do this on my own, instead of using the lexical plugin because I thought it would be a good learning opportunity for me.

### Lexical to HTML
This was very fun, it felt like doing a leet code, my Haskell class actually was useful for once haha. It honestly was not difficult at all, but it got me thinking about how I could create my own rich text editor and I can see how the complexity can sky-rockket. It would be cool for me to build a Svelte-js library that can handle all aspects of rich-text editing for Svelte, might be my next personal project :eyes:

### Sanitation
I didn't know what HTML sanitation was before taking on this task.

#### What is HTML sanitation?
HTML sanitation is the process of cleaning up HTML input to ensure it’s safe for rendering in a browser. It involves removing or neutralizing potentially harmful code while retaining the intended formatting and structure of the content. This is especially relevant when dealing with user-generated content or dynamic HTML.

#### Why is it important?
When raw HTML is rendered directly on a page, it has the potential to include malicious scripts or unsafe elements that can be executed by the browser. This opens your application to security vulnerabilities such as:

**Cross-Site Scripting (XSS)**: A type of attack where an attacker injects malicious scripts into your application. These scripts can steal user data, impersonate users, or take unauthorized actions.
Injection Attacks: Inserting dangerous code to exploit security holes, often targeting backend systems.
Browser Exploits: Using unsafe tags or attributes to compromise the end-user’s device or browser.
By sanitizing HTML, you ensure that only safe, pre-approved tags and attributes are rendered, protecting both your application and its users.

Why do I need it?
Rich-text editors often deal with user-generated content (mine in this case, but we never know if someone can get access to my CMS), which is inherently unpredictable and potentially unsafe. Without sanitation:

**EXAMPLE**
Malicious users can include harmful scripts like <script>alert('Hacked')</script>.
Unsafe tags like <iframe> or <object> could be used to embed unauthorized content.
Attributes like onerror or onclick could execute malicious JavaScript.
HTML sanitation ensures you:

Protect your users and data: Sanitized content prevents attackers from exploiting your application.
Control what gets rendered: You can define which tags, attributes, and styles are allowed, giving you full control over the output.
Maintain trust: A safe, sanitized application builds user confidence by safeguarding their data and experience.
How does it work?
Sanitation libraries (like DOMPurify or sanitize-html) parse the HTML, strip out unsafe or unapproved elements, and return clean, safe content. You can customize them to allow only the tags and attributes necessary for your application (e.g., <p>, <strong>, <em>).