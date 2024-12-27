<script lang="ts">
  import Tag from "../shared/tag.svelte";
  import type { Media } from "$lib/models/generated-types";

  export let title = "";
  export let subtext = "";
  export let author = "";
  export let date = new Date();
  export let tags: string[] = [];
  export let thumbnail: Media;
</script>

<main class="py-6 gap-y-4 flex lg:flex-row min-h-[calc(100vh-5rem)] flex-col">
  <div class="pr-12 flex flex-col gap-y-1 basis-1/2 font-bod m-auto">
    <h1 class="font-bold text-h1-desktop text-primary-800">
      {title}
    </h1>
    <p class="text-zinc-400 text-p2-desktop">
      {date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </p>
    <p class="text-primary-600 text-p1-desktop">{subtext}</p>
    <p class="text-primary-700 text-subheading-2-desktop font-bold">
      {author}
    </p>
    <div class="flex gap-x-3">
      {#each tags as tag}
        <Tag {tag} />
      {/each}
    </div>
  </div>
  <div class="basis-1/2">
    <img
      class="object-cover w-full h-full"
      src={thumbnail.url}
      alt={thumbnail.alt}
      aria-label="hero image for the blog"
    />
  </div>
</main>
