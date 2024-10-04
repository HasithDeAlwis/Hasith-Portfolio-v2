<script lang='ts' context='module'>
  import AboutMeText from '@components/about-me/about-me-text.svelte'
  import { Story, Template } from '@storybook/addon-svelte-csf'

  export const meta = {
    title: 'AboutMeText',
    component: AboutMeText,
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: 'text',
      },
      size: {
        control: 'text',
      },
    },
  }
  const loremIpsumDescript = `
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
  content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum 
  as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
  have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    `
</script>

<Template let:args>
  <AboutMeText {...args} />
</Template>

<Story name='Basic Text' args={{ subheader: 'We\'ll get to the cool tech stuff later...', description: loremIpsumDescript }} />
