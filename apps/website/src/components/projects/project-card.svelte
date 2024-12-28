<script lang="ts">
  import type { ProjectType } from "@models/projects";
  import Button from "@shadcn/button/button.svelte";
  import LazyImage from "../ui/LazyImage/lazy-image.svelte";

  export let project: ProjectType = {
    picture: "",
    title: "",
    description: "",
    demoLink: "",
    sourceLink: "",
    readMoreLink: "",
    video: "",
    alt: "",
  };
  export let isTextRight: boolean = false;

  const reverseTailwindClass = isTextRight
    ? "lg:flex-row"
    : "lg:flex-row-reverse";
</script>

<div
  class={`flex flex-col lg:flex-row justify-center gap-x-6 ${reverseTailwindClass} lg:w-full shadow-primary-mobile-600 hover:shadow-primary-mobile-hover lg:shadow-none hover:shadow-none`}
>
  <div class="h-auto duration-300 lg:basis-1/2 flex-1">
    <a href={project.demoLink ?? project.sourceLink}>
      {#if project.video}
        <iframe
          class="w-full h-full"
          src={project.video}
          title={project.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      {:else if project.picture && project.alt}
        <LazyImage src={project.picture} alt={project.alt} />
      {/if}
    </a>
  </div>
  <div
    class="h-auto transition-shadow duration-300 basis-1/2 md:shadow-primary-200 md:hover:shadow-primary-200-hover flex-1"
  >
    <div class="relative flex flex-col w-full h-full px-3 pb-4 bg-primary-800">
      <div class="flex-grow">
        <h3
          class="mb-2 font-bold text-slate-50 text-large-4-mobile md:text-large-4-desktop lg:text-large-3-desktop"
        >
          {project.title}
        </h3>
        <p
          class="font-normal text-slate-50 text-p1-mobile md:text-p2-desktop lg:text-p3-desktop"
        >
          {project.description}
        </p>
      </div>

      <div class="flex justify-start gap-4 mt-5">
        {#if project.demoLink}
          <Button
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="default">Demo</Button
          >
        {/if}
        {#if project.readMoreLink}
          <Button
            href={project.readMoreLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="default">Read More</Button
          >
        {/if}
        {#if project.sourceLink}
          <Button
            href={project.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="default">GitHub</Button
          >
        {/if}
      </div>
    </div>
  </div>
</div>
