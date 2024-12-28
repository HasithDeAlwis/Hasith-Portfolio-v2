<script lang="ts">
  import type {
    CurrentlyLearningSkillType,
    LearnedSkillLogoType,
  } from "@models/skills";
  import IndividualSkill from "@components/skills/individual-skill.svelte";

  /**
   * Array of logos for skills that have been learned.
   * @type {LearnedSkillLogoType[]}
   */
  export let logos: LearnedSkillLogoType[] = [];

  /**
   * Array of skills that are currently being learned.
   * @type {CurrentlyLearningSkillType[]}
   */
  export let currentlyLearning: CurrentlyLearningSkillType[] = [];
</script>

<div id="repeated-skills" class="pb-10 min-h-screen bg-primary-100">
  <div class="px-6 lg:px-16 xl:px-32 max-w-screen-xl mx-auto">
    <div
      class="flex flex-col-reverse pt-10 justify-between lg:flex-row gap-x-3"
    >
      <div
        class="mt-10 lg:mt-0 basis-full lg:basis-2/5 xl:basis-1/3 flex justify-center flex-wrap lg:max-h-[200px]"
      >
        {#each logos as _, index (index)}
          <div class="flex w-1/3 transition-transform hover:scale-110">
            <div class={`current-logo-${index}`}></div>
          </div>
        {/each}
      </div>
      <div
        id="currently-learning-section"
        class="mt-3 lg:mt-0 basis-full lg:basis-3/5 xl:basis-2/3"
      >
        <div
          class="flex flex-col items-start w-full px-6 transition-shadow duration-300 lg:p-10 bg-primary-800 shadow-primary-mobile-600 hover:shadow-primary-mobile-600-hover lg:shadow-primary-600 lg:hover:shadow-primary-600-hover"
        >
          <h2
            class="font-bold text-left text-large-1-mobile md:text-large-3-desktop xl:text-large-1-desktop font-body text-neutral-100"
          >
            Currently Learning
          </h2>
          {#each currentlyLearning as skill, index (index)}
            <div>
              <IndividualSkill {skill} />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
