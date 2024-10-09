<script lang='ts'>
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

</script>

<div class='w-[50px] h-[300px] xl:w-1/12 transform transfor scale-75 md:scale-[0.85] lg:scale-100'>
  {#each images as image}
    <div class={`absolute z-10 ${getCSSFromOrder(image.order)}`}>
      <LazyImage src={image.svgURL ?? ''} alt={image.svgAlt ?? ''} />
    </div>
  {/each}

</div>
