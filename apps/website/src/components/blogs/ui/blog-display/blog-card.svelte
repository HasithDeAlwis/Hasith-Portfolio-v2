<script lang="ts">
  import Tag from "../shared/tag.svelte";
  import { formatUrl } from "../../utils/format-url";
  import type { TagType } from "$lib/models/blogs";

  export let title: string = "";
  export let byline: string = "";
  export let date: Date | null = null;
  export let thumbnail: string = "";
  export let tags: TagType[] = [];

  const url = formatUrl(title);
  const formattedDate = date?.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
</script>

<a href={`/blogs/${url}`} class="w-full h-full">
  <div
    class="bg-primary-800 w-full h-full flex flex-col items-stretch transition-transform hover:scale-[1.03] duration-300"
  >
    {#if thumbnail}
      <div class="">
        <img
          class="w-full h-[200px] sm:h-[333px] xl:h-[200px] object-cover"
          src={thumbnail}
          alt={title}
        />
      </div>
    {/if}
    <div class="p-4 flex flex-col gap-y-2 font-body text-slate-50 h-full">
      <div class="flex flex-col gap-y-2">
        <h1 class="font-bold font-body text-h5-mobile sm:text-h2-mobile">
          {title}
        </h1>
        <p
          class="font-body text-p2-mobile text-slate-300 font-normal sm:text-p1-mobile"
        >
          {byline}
        </p>
      </div>
      <div>
        <div
          class="flex flex-row gap-x-3 text-p2-mobile sm:text-p1-mobile flex-wrap gap-y-2"
        >
          {#each tags as tag}
            <Tag tag={tag.tagText} />
          {/each}
        </div>
      </div>
      <div class="text-p1-mobile sm:text-p2-desktop mt-auto">
        {formattedDate}
      </div>
    </div>
  </div>
</a>
