<script lang='ts'>
  export let src: string = ''
  export let alt: string = ''
  const srcset: string = ''
  const sizes: string = ''
</script>

<img
  src={src}
  {srcset}
  {sizes}
  {alt}
  loading='lazy'
/>
