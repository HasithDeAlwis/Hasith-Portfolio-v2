<script lang="ts">
  /* eslint svelte/no-at-html-tags: "error" */
  import { renderRichText } from "../../utils/render-richtext";
  import type { Media } from "$lib/models/generated-types";
  import type { ParagraphRichText } from "$lib/models/blogs";

  export let content: ParagraphRichText | undefined;
  export let image: Media | undefined;
  export let header: string | undefined;
  const renderedRichText = renderRichText(content);
</script>

<div class="py-6 flex flex-col gap-y-6">
  {#if header}
    <h2 class="text-h2-desktop text-primary-800 font-bold">
      {header}
    </h2>
  {/if}
  {@html renderedRichText}
  {#if image}
    <img
      class="object-contain w-full h-full md:h-[30vh] lg:h-[40vh]"
      src={image.url}
      alt={image.alt}
      aria-label="content image for the blog"
    />
  {/if}
</div>
