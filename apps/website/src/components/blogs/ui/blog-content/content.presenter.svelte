<script lang="ts">
  import BlogHeader from "./header.svelte";
  import Paragraph from "./paragraph.svelte";
  import type { Blog } from "$lib/models/generated-types";

  export let blogData: Blog;
  const tags = blogData ? blogData.tags.map((tag) => tag.tagText) : [];
  const author = "Hasith De Alwis"; // for now, hardcode this as me :)
  const blogContents = blogData.blogContent.sort((a, b) => a.order - b.order);
</script>

<main class="pt-20 max-w-screen-xl mx-auto px-6 lg:px-16 xl:px-32">
  {#if blogData}
    <BlogHeader
      {tags}
      title={blogData.title}
      date={new Date(blogData.date)}
      subtext={blogData.byline}
      {author}
      thumbnail={blogData.thumbnail}
    />
  {/if}
  {#if blogData}
    {#each blogContents as content}
      <Paragraph
        content={content.paragraph}
        image={content.image}
        header={content.header ? content.header : undefined}
      />
    {/each}
  {/if}
</main>
