<script context='module'>
  import AboutMeSvgs from '@components/about-me/about-me-svgs.svelte'
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import guitar from './../../assets/guitar.svg'
  import shoes from './../../assets/shoes.svg'
  import appa from './../../assets/appa.svg'
  import laptop from './../../assets/laptop.svg'

  export const meta = {
    title: 'About-Me/AboutMeSVGs',
    component: AboutMeSvgs,
    tags: ['autodocs'],
    argTypes: {
      order: {
        control: 'number',
      },
      description: {
        control: 'text',
      },
    },
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
</script>

<Template let:args>
  <AboutMeSvgs {...args} />
</Template>

<Story name='Basic SVG' args={{ images }} />
