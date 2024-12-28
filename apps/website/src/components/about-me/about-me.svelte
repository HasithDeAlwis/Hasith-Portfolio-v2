<script lang="ts">
  import type { AboutMeAssetType, AboutMeTextType } from "@models/about-me";
  import forestBackground from "@assets/hero/forest-background.svg";

  import AboutMeSvgs from "./about-me-svgs.svelte";
  import AboutMeText from "./about-me-text.svelte";

  // NOTE MAKE THIS ALL SMALLER ON IPAD SCREENS
  // ON LARGER AND SMALLER SCREENS, IT LOOKS GOOD :+1:
  export let text: AboutMeTextType;
  export let images: Array<AboutMeAssetType>;
</script>

<section
  id="about"
  class="z-10 flex flex-row justify-center relative overflow-x-hidden overflow-y-hidden min-h-[80vh] scroll-mt-16"
>
  <div
    class="static max-w-screen-xl pb-10 px-6 lg:px-16 pt-32 md:pt-44 xl:px-32 z-10 inline-flex flex-col items-center justify-between md:flex-row"
  >
    <div class="md:w-3/5">
      <AboutMeText
        subheader={text.aboutMeSubheader}
        description={text.aboutMeDescription}
      />
    </div>
    <div class="w-[240px] md:w-[272px] lg:w-[320px]">
      <AboutMeSvgs {images} />
    </div>
  </div>

  <div
    class="absolute top-0 left-0 right-0 opacity-20 transform scale-y-[-1] z-[-1]"
  >
    <img
      class="object-cover w-screen min-h-[50vh]"
      src={forestBackground.src}
      alt="Inverted forest background"
      loading="lazy"
    />
  </div>
</section>
