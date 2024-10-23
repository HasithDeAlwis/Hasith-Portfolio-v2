<script lang='ts'>
  import type { CurrentlyLearningSkillType, LearnedSkillLogoType } from '@models/skills'
  import IndividualSkill from '@components/skills/individual-skill.svelte'

  /**
   * Array of logos for skills that have been learned.
   * @type {LearnedSkillLogoType[]}
   */
  export let logos: LearnedSkillLogoType[] = []

  /**
   * Array of skills that are currently being learned.
   * @type {CurrentlyLearningSkillType[]}
   */
  export let currentlyLearning: CurrentlyLearningSkillType[] = []
// TODO: fix bug with the image scaling
</script>
<div id='repeated-skills' class=' bg-primary-100 min-h-screen'>
  <div class='flex flex-col-reverse lg:flex-row justify-center pt-10'>
    <div class='ml-4 mt-10 lg:mt-0 basis-full lg:basis-2/5 xl:basis-1/4 flex justify-center flex-wrap lg:max-h-[200px]'>
      {#each logos as _, index (index)}
        <div class='w-1/3 p-2 flex justify-center transition-transform hover:scale-110'>
          <div class={`current-logo-${index}`}>

          </div>
        </div>
      {/each}
    </div>
    <div id='currently-learning-section' class='mt-3 lg:mt-0 lg:ml-3 basis-full lg:basis-1/2 xl:basis-2/3 p-2 flex justify-center'>
      <div class='w-11/12 px-6 lg:p-10 flex flex-col items-center bg-primary-800 shadow-primary hover:shadow-primary-hover transition-shadow duration-300'>
        <h2 class='text-large-1-mobile md:text-large-3-desktop xl:text-large-1-desktop font-bold text-center font-body text-neutral-100'>Currently Learning</h2>
        {#each currentlyLearning as skill, index (index)}
          <div>
            <IndividualSkill skill={skill} />
          </div>
        {/each}
      </div>
    </div>
  </div>

</div>
