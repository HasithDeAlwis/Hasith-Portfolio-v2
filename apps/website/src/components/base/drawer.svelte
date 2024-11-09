<script lang="ts">
  import CloseIcon from "@assets/base/close.svg?url";
  import LazyImage from "@shadcn/LazyImage/lazy-image.svelte";
  import { onDestroy } from "svelte";

  export let isOpen = false;
  export let closeDrawer;
  export let links: { href: string; text: string; isHome: boolean }[] = [];

  // Prevent scrolling when the drawer is open
  $: if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  // Cleanup on component destroy
  onDestroy(() => {
    document.body.style.overflow = "auto"; // Reset overflow style
  });
</script>

<button
  class={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
  on:click={closeDrawer}
></button>

<nav
  class={`fixed right-0 top-0 h-full w-64 bg-neutral-100 transform transition-transform duration-300 ease-in-out z-50 ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
  id="drawer"
>
  <div class="w-16">
    <button
      class={`p-4 transform transition-transform duration-400 ${isOpen ? "rotate-180" : ""}`}
      on:click={closeDrawer}
    >
      <LazyImage src={CloseIcon} alt="close icon" />
    </button>
  </div>
  <ul class="flex flex-col p-4">
    {#each links as { href, text, isHome }}
      <li class="py-2">
        <a
          href={window.location.pathname !== "/" && isHome ? `/${href}` : href}
          class="text-primary-600 hover:text-primary-800">{text}</a
        >
      </li>
    {/each}
  </ul>
</nav>

<style>
  /* This class will rotate the icon by 180 degrees */
  .is-rotated {
    rotate: 180deg; /* Rotates the icon */
  }
</style>
