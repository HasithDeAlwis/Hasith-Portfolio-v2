<script lang="ts">
  import Logo from "@assets/hasith-logo.svg?url";
  import LazyImage from "@shadcn/LazyImage/lazy-image.svelte";
  import Drawer from "@components/base/drawer.svelte";
  import HamburgerIcon from "@assets/base/hamburger.svg?url";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";

  let isDrawerOpen = false;

  gsap.registerPlugin(ScrollTrigger);

  // TODO: change colour of the navbar links when scrolling
  onMount(() => {
    if (window.location.pathname === "/") {
      gsap.from("#header", {
        scrollTrigger: {
          trigger: "#navbar",
          start: "top top",
          end: "+=200",
          scrub: true,
        },
        backgroundColor: "transparent",
      });
    }
  });

  function toggleDrawer() {
    isDrawerOpen = !isDrawerOpen;
  }

  function closeDrawer() {
    isDrawerOpen = false;
  }

  // TODO: THESE SHOULD BE PROPS WE PASS INTO THE NAVBAR BUTTONS COMPONENT
  const links = [
    { href: "#hero", text: "Home", isHome: true },
    { href: "#about", text: "About", isHome: true },
    { href: "#my-skills", text: "Skills", isHome: true },
    { href: "#projects", text: "Projects", isHome: true },
    { href: "/blogs", text: "Blogs", isHome: false },
  ];

  /* TODO REFACTOR SO THAT THE NAVBAR BUTTONS ARE COMPONENTS */
</script>

<header
  id="header"
  class={`fixed top-0 left-0 right-0 z-40 bg-opacity-75  backdrop-blur-md ${window.location.pathname === "/" ? "bg-primary-400" : "bg-primary-100"}`}
>
  <div
    class="max-w-screen-xl mx-auto px-6 lg:px-16 xl:px-32 flex items-center justify-between w-full py-4"
  >
    <div class="flex justify-start basis-1/2">
      <div
        class="w-[40%] md:w-1/5 lg:w-[12%] text-lg font-bold text-gray-800 transition-transform hover:scale-110"
      >
        <a
          href={window.location.pathname === "/" ? "#hero" : "/"}
          aria-label="Navigate to Home"
        >
          <LazyImage
            src={Logo}
            alt="Hasith De Alwis logo"
            classStyles="main-logo"
          />
        </a>
      </div>
    </div>

    <nav id="navbar" class="sm:basis-1/2">
      <div class="items-center justify-between hidden md:flex">
        {#each links as { href, text, isHome }}
          <a
            aria-label={`navigate to ${text} section`}
            href={window.location.pathname !== "/" && isHome
              ? `/${href}`
              : href}
            class="font-bold text-primary-800 hover:text-primary-900 focus:text-secondary-800 font-body text-p1-mobile md:text-p2-desktop"
          >
            {text}
          </a>
        {/each}
      </div>
      <button
        id="hamburger"
        class="flex items-center ml-auto md:hidden"
        on:click={toggleDrawer}
      >
        <LazyImage src={HamburgerIcon} alt="Hamburger icon" />
      </button>
    </nav>
  </div>
</header>

<Drawer isOpen={isDrawerOpen} {closeDrawer} {links} />
