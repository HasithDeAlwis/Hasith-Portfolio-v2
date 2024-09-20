<script lang="ts" context="module">
  import Button from "@shadcn/button/button.svelte";
  import { Story, Template } from "@storybook/addon-svelte-csf";

  export const meta = {
    title: "Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
      variant: {
        control: "select",
        options: ["default", "secondary", "desctructive", "ghost", "link"],
      },
      size: {
        control: "select",
        options: ["sm", "lg", "icon", "default"],
      },
    },
  };
</script>

<Template let:args>
  <Button {...args}>Hello World</Button>
</Template>

<Story name="No Args">
  <Button>Label</Button>
</Story>

<Story name="Default" args={{ variant: "default", size: "lg" }} />

<Story name="Secondary" args={{ variant: "secondary", size: "lg" }} />

<Story name="Desctructive" args={{ variant: "destructive", size: "lg" }} />
