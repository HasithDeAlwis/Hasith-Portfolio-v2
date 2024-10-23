<script>
  import Logo from '@assets/hasith-logo.svg?url'
  import LazyImage from '@shadcn/LazyImage/lazy-image.svelte'
  import Drawer from '@components/base/drawer.svelte'
  import HamburgerIcon from '@assets/base/hamburger.svg?url'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
  import { onMount } from 'svelte'

  let isDrawerOpen = false

  gsap.registerPlugin(ScrollTrigger)

  // TODO: change colour of the navbar links when scrolling
  onMount(() => {
    gsap.from('#header', {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: '+=200',
        scrub: true,
      },
      backgroundColor: 'transparent',
    })
  })
  function toggleDrawer() {
    isDrawerOpen = !isDrawerOpen
  }

  function closeDrawer() {
    isDrawerOpen = false
  }

  const links = [
    { href: '#hero', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#my-skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
  ]
</script>

<header id='header' class='fixed top-0 left-0 right-0 z-40 bg-opacity-75 bg-primary-400 backdrop-blur-md'>
  <div class='flex items-center justify-between w-full px-6 py-4 mx-auto'>
    <div class='flex justify-start basis-1/2'>
      <a href='#hero' aria-label='Navigate to Home'>
        <div class='w-[40%] lg:w-[12%] text-lg font-bold text-gray-800 transition-transform hover:scale-110'>
          <LazyImage src={Logo} alt='Hasith De Alwis logo' classStyles='main-logo' />
        </div>
      </a>
    </div>

    <nav id='navbar' class='sm:basis-1/2 lg:basis-1/3'>
      <div class='items-center justify-around hidden space-x-4 md:flex'>
        {#each links as { href, text }}
          <a href={href} class='font-bold text-primary-800 hover:text-primary-900 focus:text-secondary-800 font-body text-p1-mobile md:text-p2-desktop'>
            {text}
          </a>
        {/each}
      </div>
      <button
        id='hamburger'
        class='flex items-center ml-auto md:hidden'
        on:click={toggleDrawer}
      >
        <LazyImage src={HamburgerIcon} alt='Hamburger icon' />
      </button>
    </nav>
  </div>
</header>

<Drawer isOpen={isDrawerOpen} closeDrawer={closeDrawer} links={links} />
