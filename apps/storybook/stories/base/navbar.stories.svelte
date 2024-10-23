<script context='module'>
  import Navbar from '@components/base/navbar.svelte'
  import { Story, Template } from '@storybook/addon-svelte-csf'

  export const meta = {
    title: 'Base/Navbar',
    component: Navbar,
    tags: ['autodocs'],
  }

</script>

<Template>
  <Navbar />
</Template>

<Story name='Basic Navbar' />
