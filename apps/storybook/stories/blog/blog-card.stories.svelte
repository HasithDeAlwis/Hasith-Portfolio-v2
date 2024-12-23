<script lang="ts" context="module">
  import BlogCard from "@components/blogs/ui/blog-display/blog-card.svelte";
  import { Story, Template } from "@storybook/addon-svelte-csf";

  export const meta = {
    title: "Blog/Blog-Card",
    component: BlogCard,
    tags: ["autodocs"],
    argTypes: {
      title: {
        control: "text",
      },
      byline: {
        control: "text",
      },
      date: {
        control: "date",
      },
      thumbnail: {
        control: "text",
      },
      tags: {
        control: "array",
      },
      alt: {
        control: "text",
      },
    },
  };
  const byline =
    "I am a byline, you might be wondering, how did I get here? Well, for that we have to go back, way back to the beginning of time. The end.";
</script>

<Template let:args>
  <BlogCard {...args} />
</Template>
<Story
  name="Default"
  args={{
    title: "Sample Blog Post",
    byline,
    date: new Date(),
    thumbnail: "https://via.placeholder.com/300x200?text=Scenic+View",
    alt: "A scenic placeholder image",
    tags: [{ tagText: "svelte" }, { tagText: "javascript" }],
  }}
/>
<Story
  name="Without Thumbnail"
  args={{
    title: "Sample Blog Post",
    byline,
    date: new Date(),
    tags: [{ tagText: "svelte" }, { tagText: "javascript" }],
  }}
/>
<Story
  name="With Multiple Tags"
  args={{
    title: "Sample Blog Post",
    byline,
    date: new Date(),
    thumbnail: "https://via.placeholder.com/150",
    alt: "Placeholder",
    tags: [{ tagText: "svelte" }, { tagText: "javascript" }],
  }}
/>
