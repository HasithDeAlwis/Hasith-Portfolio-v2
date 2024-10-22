<script lang='ts'>
  import { gsap } from 'gsap'
  import { onMount } from 'svelte'
  import type { AboutMeAssetType } from '@models/about-me'
  import LazyImage from '@shadcn/LazyImage/lazy-image.svelte'
  /**
   * This number represents the vertical order the pictures appear in
   * @type {number}
   */
  export let images: Array<AboutMeAssetType> = []

  function getCSSFromOrder(order: number) {
    switch (order) {
      case 1: return 'bottom-0 left-[12em] rotate-[25deg] w-[100px] transform scale-x-[-1]'
      case 2: return 'bottom-20 left-0 w-[150px]'
      case 3: return 'top-0 left-[8em] w-[150px] rotate-[35deg] opacity-100'
      case 4: return 'top-[-2em] left-[1em] w-[120px]'
    }
  }

  onMount(() => {
    images.forEach((_, index) => {
      const yOffset = Math.random() * 20 + 2
      const duration = Math.random() * 1 + 2
      gsap.to(`#about-me-images > div:nth-child(${index + 1}`, {
        repeat: -1,
        duration,
        yoyo: true,
        y: yOffset * (Math.floor(Math.random() * 2 === 0 ? -1 : 1)),
        stagger: {
          amount: 0.4,
          from: 'start',
        },
      })
    })

    gsap.from('#about-me-images > div', {
      scrollTrigger: {
        trigger: '#about-me-images',
        start: 'top 100%',
      },
      x: '200px', // Move from offscreen left to the original position
      opacity: 0,
      duration: 1,
      ease: 'bounce.out',
      stagger: 0.2,
    })
  })

</script>

<div id='about-me-images' class='w-[0px] h-[300px] xl:w-1/12 transform transfor scale-75 md:scale-[0.85] lg:scale-100'>
  {#each images as image}
    <div class={`absolute z-10 ${getCSSFromOrder(image.order)}`}>
      <LazyImage src={image.svgURL ?? ''} alt={image.svgAlt ?? ''} classStyles='transition-transform duration-300 hover:scale-110' />
    </div>
  {/each}

</div>
