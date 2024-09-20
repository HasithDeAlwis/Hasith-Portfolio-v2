<script lang="ts" context="module">
  import Card from "@components/index/card.svelte";

  export const meta = {
    title: "Card",
    component: Card,
    tags: ["autodocs"],
    argTypes: {
      title: {
        control: { type: "text" },
      },
      body: {
        control: { type: "text" },
      },
      href: {
        control: { type: "text" },
      },
    },
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <Card {...args} />
</Template>

<!-- Dynamic snippet should be disabled for this story -->
<Story name="Button No Args">
  <Card
    title="Lorem Ipsum"
    body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    href="https://www.google.com"
  />
</Story>
