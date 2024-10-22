<script lang='ts'>
  import type { AboutMeAssetType, AboutMeTextType } from '@models/about-me'
  import forestBackground from '@assets/hero/forest-background.svg'

  import AboutMeSvgs from './about-me-svgs.svelte'
  import AboutMeText from './about-me-text.svelte'

  // NOTE MAKE THIS ALL SMALLER ON IPAD SCREENS
  // ON LARGER AND SMALLER SCREENS, IT LOOKS GOOD :+1:
  export let text: AboutMeTextType
  export let images: Array<AboutMeAssetType>

</script>

<div class='z-10 relative overflow-x-hidden overflow-y-hidden min-h-[80vh]'>
  <div class='pt-32 md:pt-44 inline-flex md:flex-row flex-col justify-center items-center z-10 static'>
    <div class='w-10/12 md:w-3/5'>
      <AboutMeText subheader={text.aboutMeSubheader} description={text.aboutMeDescription} />
    </div>
    <div class='w-[240px] md:w-[272px] lg:w-[320px] '>
      <AboutMeSvgs images={images} />
    </div>
  </div>

  <div class='absolute top-0 left-0 right-0 opacity-20 transform scale-y-[-1] z-[-1]'>
    <img class='object-cover w-screen min-h-[50vh]' src={forestBackground.src} alt='Inverted forest background' loading='lazy'>
  </div>
</div>
