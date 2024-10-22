<script lang='ts'>
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
  import SplitType from 'split-type'
  import { onMount } from 'svelte'

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
  gsap.registerPlugin(ScrollTrigger)

  function animateSubheader() {
    gsap.to('#about-subheader', {
      opacity: 1,
      x: 0,
      duration: 0.5,
      onComplete: () => {
        animateDescription()
      },
    })
  }

  function animateDescription() {
    gsap.to('#about-description', {
      opacity: 1,
      y: 0,
      duration: 0.5,
    })
  }

  onMount(() => {
    gsap.set('#about-subheader', {
      opacity: 0,
      x: -100,
    })

    gsap.set('#about-description', {
      opacity: 0,
      y: -100,
    })

    // -----ABOUT ME HEADER ANIMATIONS
    const splitHeader = new SplitType('#about-header', { types: 'chars' })

    // Animate each character
    gsap.from(splitHeader.chars, {
      scrollTrigger: {
        trigger: '#about-header', // Element to trigger the animation
        start: 'top 80%', // When the top of the element reaches 80% of the viewport
        end: 'top 70%', // When the top of the element reaches 50% of the viewport
      },
      opacity: 0, // Start with 0 opacity
      y: -100, // Start 50px above the final position
      stagger: 0.08, // Stagger the animation by 0.05 seconds for a more fluid effect
      duration: 0.3,
      ease: 'power1.out', // Easing function
      onComplete: () => {
        animateSubheader()
      },
    })
  })

</script>

<div id='about-me-description' class='text-neutral-100 about-me-description'>
  <h1 id='about-header' class='font-display text-display-3-mobile md:text-display-1-mobile xl:text-display-3-desktop font-normal'>About Me</h1>
  <p id='about-subheader' class='font-body text-poppins font-bold text-h4-mobile md:text-h3-mobile lg:text-h4-desktop'>
    {subheader}
  </p>
  <p id='about-description'class='font-body text-p1-mobile md:text-p3-desktop xl:text-p1-desktop font-normal'>
    {description}
  </p>
</div>
