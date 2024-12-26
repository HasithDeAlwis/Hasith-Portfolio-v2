<script lang="ts" context="module">
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import ContentSection from "@components/blogs/ui/blog-content/paragraph.svelte";

  export const meta = {
    title: "Blog/Paragraph",
    component: ContentSection,
    tags: ["autodocs"],
    argTypes: {
      content: { control: "text" },
      image: {
        control: "object",
        description: "An object containing `url` and `alt` for the image",
      },
      header: { control: "text" },
    },
  };

  const exampleImage = {
    url: "https://via.placeholder.com/600x400?text=Content+Image",
    alt: "Placeholder image for the content section",
  };

  const content = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Praesent vehicula eros vitae sem volutpat, non fringilla justo vestibulum. 
    Curabitur ut libero nec ligula facilisis elementum.
  `;
</script>

<Template let:args>
  <ContentSection {...args} />
</Template>

<Story
  name="Default"
  args={{
    content: "This is a short content example to display the layout.",
    image: exampleImage,
    header: "Welcome to the Blog Section",
  }}
/>

<Story
  name="Without Header"
  args={{
    content,
    image: exampleImage,
  }}
/>

<Story
  name="Without Image"
  args={{
    content: "This is an example with no accompanying image.",
    header: "No Image Story",
  }}
/>
