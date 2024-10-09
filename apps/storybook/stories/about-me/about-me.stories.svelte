<script context='module'>
  import AboutMe from '@components/about-me/about-me.svelte'
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import guitar from './../../assets/guitar.svg'
  import shoes from './../../assets/shoes.svg'
  import appa from './../../assets/appa.svg'
  import laptop from './../../assets/laptop.svg'

  export const meta = {
    title: 'About-Me/AboutMe',
    component: AboutMe,
    tags: ['autodocs'],
  }

  const images = [
    {
      svgURL: guitar,
      svgAlt: 'guitar',
      order: 1,
    },
    {
      svgURL: shoes,
      svgAlt: 'shoes',
      order: 3,
    },
    {
      svgURL: appa,
      svgAlt: 'appa',
      order: 4,
    },
    {
      svgURL: laptop,
      svgAlt: 'computer',
      order: 2,
    },
  ]
  const text = {
    aboutMeSubheader: 'Let\'s get to the tech stuff later...',
    aboutMeDescription: `
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
  content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum 
  as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
  have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    `,
  }
</script>

<Template let:args>
  <AboutMe {...args} />
</Template>

<Story name='Basic SVG' args={{ images, text }} />
