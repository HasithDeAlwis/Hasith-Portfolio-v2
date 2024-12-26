<script lang="ts" context="module">
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import BlogHero from "@components/blogs/ui/blog-content/header.svelte";

  export const meta = {
    title: "Blog/Blog-Hero",
    component: BlogHero,
    tags: ["autodocs"],
    argTypes: {
      title: { control: "text" },
      subtext: { control: "text" },
      author: { control: "text" },
      date: { control: "date" },
      tags: { control: "array" },
      thumbnail: {
        control: "object",
        description: "An object containing `url` and `alt` for the image",
      },
    },
  };

  const exampleTags = ["svelte", "frontend", "UI/UX"];
  const thumbnail = {
    url: "https://via.placeholder.com/600x400?text=Blog+Hero",
    alt: "Placeholder image for blog hero",
  };
</script>

<Template let:args>
  <BlogHero {...args} />
</Template>

<Story
  name="Default"
  args={{
    title: "Mastering Svelte Components",
    subtext: "A comprehensive guide to creating reusable Svelte components.",
    author: "Jane Doe",
    date: new Date(),
    tags: exampleTags,
    thumbnail,
  }}
/>

<Story
  name="Without Thumbnail"
  args={{
    title: "The Journey of Svelte",
    subtext: "How Svelte is changing the game for frontend development.",
    author: "John Smith",
    date: new Date(),
    tags: exampleTags,
  }}
/>

<Story
  name="With Many Tags"
  args={{
    title: "Building Accessible Web Apps",
    subtext:
      "Understanding the importance of accessibility in modern web development.",
    author: "Alex Johnson",
    date: new Date(),
    tags: [
      ...exampleTags,
      "accessibility",
      "web development",
      "best practices",
    ],
    thumbnail,
  }}
/>
