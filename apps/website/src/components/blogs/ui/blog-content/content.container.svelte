<script lang="ts">
  import BlogHeader from "./header.svelte";
  import Paragraph from "./paragraph.svelte";
  import type { Blog } from "$lib/models/generated-types";

  export let blogData: Blog;
  const tags = blogData ? blogData.tags.map((tag) => tag.tagText) : [];
  const author = "Hasith De Alwis"; // for now, hardcode this as me :)
</script>

<main class="pt-20 max-w-screen-xl px-12 lg:px-44">
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
    {#each blogData.blogContent as content}
      <Paragraph
        content={content.content}
        image={content.image}
        header={content.header ? content.header : undefined}
      />
    {/each}
  {/if}
</main>
