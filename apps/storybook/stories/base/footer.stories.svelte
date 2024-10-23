<script context='module'>
  import Footer from '@components/base/footer.svelte'
  import { Story, Template } from '@storybook/addon-svelte-csf'

  export const meta = {
    title: 'Base/Footer',
    component: Footer,
    tags: ['autodocs'],
  }

</script>

<Template>
  <Footer />
</Template>

<Story name='Default Footer' />
