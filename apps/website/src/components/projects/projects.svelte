<script lang='ts'>
  import type { ProjectType } from '@models/projects'
  import ProjectCard from '@components/projects/project-card.svelte'

  export let projects: ProjectType[] = []
</script>
<section id='projects' class='flex flex-col items-center bg-secondary-100 scroll-mt-8 lg:scroll-mt-16'>
  <h1 class='pt-10 mb-10 font-bold text-large-1-mobile md:text-large-2-desktop lg:text-large-1-desktop text-primary-800 font-body'>My Projects 🚀</h1>
  <div>
    {#each projects as project, index (index)}
      <div class='flex justify-center mb-10'>
        <ProjectCard project={project} isTextRight={index % 2 === 0} />
      </div>
    {/each}
  </div>
</section>
