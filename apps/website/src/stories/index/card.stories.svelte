<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";
  import { Story, Template } from "@storybook/addon-svelte-csf";

  import Card from "@components/index/card.svelte";

  export const meta = {
    title: "index/Card",
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
  } satisfies Meta<Card>;
</script>

<Template let:args>
  <Card {...args} />
</Template>

<Story
  name="Test"
  args={{
    title: "Test",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    href: "",
  }}
/>
