<script lang='ts'>
  /**
   * A subheader that appears underneath the larger "About Me"
   * @type {string}
   */
  export let subheader: string = ''
  /**
   * A large piece of text that explains more about yourself to the client
   * @type {string}
   */
  export let description: string = ''
</script>

<div class='text-neutral-100'>
  <h1 class='font-display text-display-3-mobile text-display-1-mobile xl:text-display-3-desktop font-normal'>About Me</h1>
  <p class='font-body text-poppins font-bold text-heading-4-mobile md:text-heading-3-mobile xl:text-heading-4-desktop'>
    {subheader}
  </p>
  <p class='font-body text-p1-mobile md:text-p3-desktop xl:text-p1-desktop font-normal'>
    {description}
  </p>
</div>
