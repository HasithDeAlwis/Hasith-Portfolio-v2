<script>
  import GitHub from '@assets/base/github.svg?url'
  import LinkedIn from '@assets/base/linkedin.svg?url'
  import Mail from '@assets/base/mail.svg?url'
  import Figma from '@assets/base/figma.svg?url'
  import LazyImage from '@shadcn/LazyImage/lazy-image.svelte'

  const socials = {
    github: {
      link: 'https://github.com/HasithDeAlwis',
      picSrc: GitHub,
    },
    linkedin: {
      link: 'https://www.linkedin.com/in/hasith-de-alwis/',
      picSrc: LinkedIn,
    },
    email: {
      link: 'mailto:hasithde24@gmail.com',
      picSrc: Mail,
    },
    figma: {
      link: 'https://www.figma.com/design/5mPcnmiJ9VuclwIzIPG8gp/Hasith-De-Alwis-Portfolio?node-id=103-1175&t=LMmUihIOsT3SFnPv-1',
      picSrc: Figma,
    },
  }
</script>

<footer class='flex flex-col items-center p-4 bg-slate-300'>
  <p class='text-primary-800'>
    Made with ❤️ by Hasith
  </p>
  <div class='flex justify-center mt-2 space-x-4'>
    {#each Object.entries(socials) as [key, { link, picSrc }]}
      <div class='w-10 transition-transform hover:scale-110'>
        <a href={link} target='_blank' rel='noopener noreferrer' class='text-gray-600 hover:text-primary-800'>
          <LazyImage src={picSrc} alt={`${key} logo`} />
        </a>
      </div>
    {/each}
  </div>
</footer>
