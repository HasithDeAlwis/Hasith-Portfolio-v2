<script lang='ts'>
  export let src: string = ''
  export let alt: string = ''
  const srcset: string = ''
  const sizes: string = ''
  export let classStyles = ''
  export let style = ''
</script>

<img
  class={classStyles}
  src={src}
  {srcset}
  {sizes}
  {alt}
  loading='lazy'
  style={style}
/>
