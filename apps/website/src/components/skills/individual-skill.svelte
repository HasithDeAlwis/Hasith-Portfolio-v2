<script lang='ts'>
  import type { CurrentlyLearningSkillType } from '@models/skills'
  import LazyImage from '@shadcn/LazyImage/lazy-image.svelte'

  /**
   * Skill object containing details about the currently learning skill.
   * @type {CurrentlyLearningSkillType}
   */
  export let skill: CurrentlyLearningSkillType = {
    picUrl: '',
    alt: '',
    description: '',
    link: '',
    name: '',
  }
</script>

<div class='py-4'>
  <div class='mb-[-1]'>
    <h1 class='font-bold text-neutral-100 text-h3-mobile md:text-h4-desktop lg:text-h3-desktop font-body'>{skill.name}</h1>
  </div>
  <div class='flex items-center justify-start'>
    <div class=''>
      <a href={skill.link} target='_blank' rel='noopener noreferrer'>
        <LazyImage src={skill.picUrl} alt={skill.alt} classStyles='h-[70px] 3xl:h-[100px] object-contain transition-transform hover:scale-110' />
      </a>
    </div>

    <div class='pl-6 basis-4/5 '>
      <p class='text-neutral-100 text-p1-mobile md:text-p2-desktop lg:text-p1-desktop'>{skill.description}</p>
    </div>
  </div>
</div>
