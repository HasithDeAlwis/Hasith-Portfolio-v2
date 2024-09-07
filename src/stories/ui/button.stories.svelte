<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";
  import { Story, Template } from "@storybook/addon-svelte-csf";

  import { Button } from "@shadcn/button";

  export const meta = {
    title: "UI/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
      variant: {
        control: { type: "select" },
        options: [
          "default",
          "destructive",
          "outline",
          "secondary",
          "ghost",
          "link",
          undefined,
        ],
      },
      size: {
        control: { type: "select" },
        options: ["default", "sm", "lg", "icon"],
      },
    },
    parameters: {
      actions: { disable: true },
      controls: { disable: false },
    },
  } satisfies Meta<Button>;
</script>

<Template let:args>
  <Button {...args}>{args.label || "Hello World"}</Button>
</Template>

<Story name="No args">
  <Button>Hello</Button>
</Story>

<Story
  name="Primary"
  args={{ variant: "default", size: "lg", label: "Button" }}
/>

<Story name="Destructive" args={{ variant: "destructive", size: "sm" }} />

<Story name="Secondary" args={{ variant: "secondary", size: "lg" }} />
