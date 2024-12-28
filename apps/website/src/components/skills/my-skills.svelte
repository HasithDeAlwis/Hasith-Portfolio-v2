<script lang="ts">
  import CrystalBall from "@assets/skills/crystal-ball.svg?url";
  import LazyImage from "@shadcn/LazyImage/lazy-image.svelte";
  import type { LearnedSkillLogoType } from "@models/skills";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { Flip } from "gsap/dist/Flip";
  import { onMount } from "svelte";

  /**
   * An array of skill logos that will be displayed in a circular layout.
   * Each logo is represented as an object of type `LearnedSkillLogoType`.
   *
   * @type {Array<LearnedSkillLogoType>}
   */
  export let logos: Array<LearnedSkillLogoType> = [];

  // TODO: Refactor this component to move animations to a seperate folder then export them to the main component
  // TODO: Refactor MySkills component to use the LESS DOM manipulation and rely on Svelte and Tailwind so this can be server side rendered reactivity
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Flip);
  function setWindowWidth() {
    // sizes in pixels
    const paddingXL = 128;
    const paddingLG = 64;
    const padding = 16;
    const screenXL = 1280;
    const screenLG = 1024;

    if (window.innerWidth > screenXL) {
      return screenXL - paddingXL * 2;
    }
    if (window.innerWidth > screenLG) {
      return screenLG - paddingLG * 2;
    }
    return window.innerWidth - padding * 2;
  }
  const windowWidth = setWindowWidth();
  const windowHeight = window.innerHeight;

  const radius = updateRadius(windowWidth);
  const logoSize = updateLogoSize(windowWidth);

  const horizontalRadius = radius.horizontalRadius;
  const verticalRadius = radius.verticalRadius;

  /**
   * Applies a floating animation effect to the logos.
   * This animation will create a subtle vertical movement of each logo.
   *
   * @param {number} index - The index of the logo to animate.
   */
  function floatingAnimation(index: number) {
    const yOffset = Math.random() * 3 + 2;
    const duration = Math.random() * 2 + 1;

    gsap.to(`.logo-${index}`, {
      repeat: -1,
      duration,
      yoyo: true,
      y: yOffset * (Math.random() < 0.5 ? -1 : 1),
    });
  }
  /**
   * Moves the logos to the bottom section when the user scrolls past a certain point.
   * This function leverages the GSAP Flip plugin to smoothly animate the movement.
   *
   * @param {number} index - The index of the logo to move.
   */
  function moveLogosBottom(index: number) {
    const currentlyLearningParent = document.getElementsByClassName(
      `current-logo-${index}`
    )[0];
    const movingLogo = document.getElementsByClassName(
      `moving-logo-container-${index}`
    )[0];

    const state = Flip.getState(`.moving-logo-container-${index}`);

    currentlyLearningParent.append(movingLogo);

    Flip.from(state, {
      duration: 1.5,
      ease: "power1.inOut",
    });
  }

  /**
   * Moves the logos back to the top section when the user scrolls up.
   * This function uses the GSAP Flip plugin for smooth re-positioning animations.
   *
   * @param {number} index - The index of the logo to move.
   */
  function moveLogosTop(index: number) {
    const mySkillParent = document.getElementsByClassName(`logo-${index}`)[0];
    const movingLogo = document.getElementsByClassName(
      `moving-logo-container-${index}`
    )[0];

    const state = Flip.getState(`.moving-logo-container-${index}`);

    mySkillParent.append(movingLogo);
    Flip.from(state, {
      duration: 1.5,
      ease: "power1.inOut",
    });
  }

  /**
   * Function to initialize the animations after the component is mounted.
   * It applies GSAP animations to each logo and manages their floating and scrolling behavior.
   */
  onMount(() => {
    const crystalBall = document.getElementById("crystal-ball");
    const crystalBallRect = crystalBall?.getBoundingClientRect();
    // Apply GSAP animation to each logo
    logos.forEach((_, index) => {
      const curLogo = document.getElementsByClassName(`logo-${index}`)[0];
      const curLogoRect = curLogo?.getBoundingClientRect();

      if (!crystalBallRect || !curLogoRect) return;
      gsap.from(`.logo-${index}`, {
        scrollTrigger: {
          trigger: "#my-skills",
          start: "top 10%",
        },
        scale: 0,
        x: crystalBallRect.x - curLogoRect.x, // Center horizontally
        y: crystalBallRect.y - curLogoRect.y, // Center vertically
        duration: 1,
        onComplete: () => {
          floatingAnimation(index);
        },
        ease: "power.inOut",
      });
      gsap.from(`.logo-${index}`, {
        scrollTrigger: {
          trigger: "#my-skills",
          start: "bottom 60%",
          onEnter: () => {
            moveLogosBottom(index);
          },
          onLeaveBack: () => {
            moveLogosTop(index);
          },
        },
      });
    });
    gsap.from("#crystal-ball", {
      scrollTrigger: {
        trigger: "#my-skills-header",
        start: "top 60%",
        end: "top 10%",
        scrub: true,
        once: true,
      },
      opacity: 0,
      y: "-90vh",
      ease: "power.inOut",
    });
  });

  /**
   * Calculates the size of each logo based on the current window width.
   * This ensures that the logos are responsive and adjust appropriately to different screen sizes.
   *
   * @param {number} windowWidth - The current width of the window or screen.
   * @returns {140 | 120 | 100 | 85} - The size of the logo (width and height).
   */
  function updateLogoSize(windowWidth: number) {
    if (windowWidth >= 1410) return 140;
    if (windowWidth >= 1024) return 120;
    if (windowWidth >= 768) return 100;
    return 85;
  }

  /**
   * Update the raidus of the cirlces of the logos based on the window width.
   *
   * @param {number} windowWidth - The current width of the window or screen.
   * @returns {{ horizontalRadius: number, verticalRadius: number }} - An object containing the horizontal and vertical radius of the oval.
   */
  function updateRadius(windowWidth: number): {
    horizontalRadius: number;
    verticalRadius: number;
  } {
    let shrink = 50; // How much should the raidus shrink
    let ovalHeight = 200; // Since the logos appear in an oval shape, we need to adjust the height

    if (windowWidth >= 1680) {
      shrink = 600;
      ovalHeight = 500;
    }
    // Adjust heights based on screen sizes
    else if (windowWidth >= 1410) {
      shrink = 300;
      ovalHeight = 400;
    } else if (windowWidth >= 1024) {
      shrink = 200;
      ovalHeight = 350;
    } else if (windowWidth >= 768) {
      shrink = 150;
      ovalHeight = 300;
    }
    return {
      horizontalRadius: windowWidth / 2 - shrink,
      verticalRadius: ovalHeight / 2,
    };
  }

  /**
   * Calculates the position of a logo within a circular layout, based on its index, window width, and height.
   * Logos are arranged in either the top or bottom circle based on their index.
   *
   * @param {number} index - The index of the logo in the list of logos.
   * @param {number} windowWidth - The current width of the window or screen.
   * @param {number} windowHeight - The current height of the window or screen.
   * @returns {string} - A string representing the logo's CSS position (top, left) and width.
   *
   * The function determines if the logo belongs to the "top" or "bottom" circle by checking if the index is odd or even.
   * It then calls `calculateLogoPosition` to compute the exact position based on the window dimensions and whether it's a top or bottom circle logo.
   */
  function getLogoPosition(
    index: number,
    windowWidth: number,
    windowHeight: number
  ) {
    if (windowWidth <= 768) {
      const circlePosition = calculateLogoPositionThreeRow(
        Math.floor(index / 3),
        windowWidth,
        windowHeight,
        index % 3
      );
      return `${circlePosition}; width: ${logoSize}px;`;
    }
    const isTopCircle = index % 2 === 1;
    const circlePosition = calculateLogoPositionTwoRow(
      Math.floor(index / 2),
      windowWidth,
      windowHeight,
      isTopCircle
    );
    return `${circlePosition}; width: ${logoSize}px;`;
  }

  /**
   * Calculates the exact position of a logo within a circular layout, based on its index, window width, height and whether or not it's the top circle.
   * This function is ONLY used when there are three rows needed for smaller screens
   *
   * @param {number} index - The index of the logo in the list of logos.
   * @param {number} windowWidth - The current width of the window or screen.
   * @param {number} windowHeight - The current height of the window or screen.
   * @param {number} rowNum - The row number that the logo will go on, row 1 two or three
   * @returns {string} - A string representing the logo's CSS position (top, left) and width.
   *
   */
  function calculateLogoPositionThreeRow(
    index: number,
    windowWidth: number,
    windowHeight: number,
    rowNum: number
  ) {
    const totalLogos = logos.length;

    // Angle from 0 to Math.PI (0 to 180 degrees)
    const startAngle = 0; // Start angle at 0 degrees
    const endAngle = Math.PI; // End angle at 180 degrees

    // Calculate the angle step based on the number of logos
    const angleStep = (endAngle - startAngle) / (totalLogos / 3 - 1);
    // Calculate the angle for the current logo
    const angle = startAngle + index * angleStep;

    // Define offsets and positioning adjustments for top and bottom circles
    const horizontalOffset = 0; // How much should the top
    const verticalOffset = rowNum === 0 ? 0 : rowNum === 1 ? -40 : -50;
    const heightOffset = rowNum === 0 ? 1.5 : rowNum === 1 ? 2.3 : 4.6;

    // Calculate x and y positions based on oval radii
    const x =
      Math.cos(angle) * (horizontalRadius + horizontalOffset) +
      windowWidth / 2 -
      logoSize / 2;
    const y =
      Math.sin(angle) * -(verticalRadius + verticalOffset) +
      windowHeight / heightOffset;

    return `top: ${y}px; left: ${x}px;`;
  }

  /**
   * Calculates the exact position of a logo within a circular layout, based on its index, window width, height and whether or not it's the top circle.
   * This function is ONLY used when there are two rows needed
   *
   * @param {number} index - The index of the logo in the list of logos.
   * @param {number} windowWidth - The current width of the window or screen.
   * @param {number} windowHeight - The current height of the window or screen.
   * @param {boolean} isTopCircle - A boolean indicating whether the logo belongs to the top circle.
   * @returns {string} - A string representing the logo's CSS position (top, left) and width.
   *
   */
  function calculateLogoPositionTwoRow(
    index: number,
    windowWidth: number,
    windowHeight: number,
    isTopCircle: boolean
  ) {
    const totalLogos = logos.length;

    // Angle from 0 to Math.PI (0 to 180 degrees)
    const startAngle = 0; // Start angle at 0 degrees
    const endAngle = Math.PI; // End angle at 180 degrees

    // Calculate the angle step based on the number of logos
    const angleStep = (endAngle - startAngle) / (totalLogos / 2 - 1);

    // Calculate the angle for the current logo
    const angle = startAngle + index * angleStep;

    // Define offsets and positioning adjustments for top and bottom circles
    let verticalOffset = 0;
    let heightOffset = 2.6;
    const horizontalOffset = isTopCircle ? 70 : 100;

    if (windowWidth >= 1410) {
      verticalOffset = isTopCircle ? -30 : 0;
      heightOffset = isTopCircle ? 2.9 : 1.5;
    } else if (windowWidth >= 1024) {
      verticalOffset = isTopCircle ? -40 : 0;
      heightOffset = isTopCircle ? 2.6 : 1.5;
    } else if (windowWidth >= 768) {
      verticalOffset = isTopCircle ? 0 : 0;
      heightOffset = isTopCircle ? 2.6 : 1.5;
    }

    // Calculate x and y positions based on oval radii
    const x =
      Math.cos(angle) * (horizontalRadius + horizontalOffset) +
      windowWidth / 2 -
      logoSize / 1.6;
    const y =
      Math.sin(angle) * -(verticalRadius + verticalOffset) +
      windowHeight / heightOffset;

    return `top: ${y}px; left: ${x}px;`;
  }
</script>

<section
  id="my-skills"
  class="flex justify-center w-full h-screen md:h-[95vh] scroll-mt-16 relative bg-zinc-900"
>
  <div class="absolute" id="my-skills-header">
    <h3 class="pt-10 font-bold text-large-2-desktop text-slate-100 font-body">
      My Skills 🛠️
    </h3>
  </div>
  <div
    class="relative w-full px-4 lg:px-16 xl:px-32 max-w-screen-xl mx-auto h-full"
  >
    <div class="absolute" id="logos">
      {#each logos as logo, index (logo.alt + index)}
        <div
          class={`min-w-[${logoSize}px] absolute logo-${index}`}
          style={getLogoPosition(index, windowWidth, windowHeight)}
        >
          <div class={`moving-logo-container-${index}`}>
            <a href={logo.link}>
              <LazyImage
                src={logo.url}
                alt={logo.alt}
                style={`height: ${logoSize}px`}
                classStyles="transition-transform hover:scale-110 "
              />
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div
    class="absolute bottom-20 w-[150px] h-[150px] sm:w-[160px] sm:h-[160px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px]"
    id="crystal-ball"
  >
    <LazyImage src={CrystalBall} classStyles="" />
  </div>
</section>
