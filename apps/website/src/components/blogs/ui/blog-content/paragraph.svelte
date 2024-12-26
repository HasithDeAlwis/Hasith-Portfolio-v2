<script lang="ts">
  import type { Media } from "$lib/models/generated-types";

  export let content: string | undefined = "";
  export let image: Media | undefined;
  export let header: string | undefined;
</script>

<div class="py-6 flex flex-col gap-y-6">
  {#if header}
    <h2 class="text-h3-desktop text-primary-800 font-bold">
      {header}
    </h2>
  {/if}
  <p class="text-p1-desktop text-primary-700">{content}</p>
  {#if image}
    <img
      class="object-contain w-full h-full md:h-[30vh] lg:h-[40vh]"
      src={image.url}
      alt={image.alt}
      aria-label="content image for the blog"
    />
  {/if}
</div>
