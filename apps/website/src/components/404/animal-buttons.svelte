<script>
  import Penguin from '@assets/404/penguin.svg?url'
  import Lion from '@assets/404/lion.svg?url'
  import Cat from '@assets/404/cat.svg?url'
  import Rhino from '@assets/404/rhino.svg?url'
  import LazyImage from '@shadcn/LazyImage/lazy-image.svelte'
  import confetti from 'canvas-confetti'

  const animals = [
    { alt: 'A penguin icon', image: Penguin, isCorrect: false },
    { alt: 'A lion icon', image: Lion, isCorrect: false },
    { alt: 'Cat', image: Cat, isCorrect: true },
    { alt: 'Rhino', image: Rhino, isCorrect: false },
  ]

  let vibratingButton = null

  const vibrate = (isCorrect, button) => {
    if (!isCorrect) {
      vibratingButton = button
      setTimeout(() => {
        vibratingButton = null
      }, 500)
      return
    };

    confetti({
      particleCount: 300,
      spread: 100,
      origin: { y: 0.6 },
    })
    setTimeout(() => {
      window.location.href = '/'
    }, 1000) // Redirect after 1 second to enjoy confetti
  }
</script>

<div>
  {#each animals as animal}
    <button class={vibratingButton === animal.alt ? 'vibrate' : ''} on:click={() => vibrate(animal.isCorrect, animal.alt)} key={animal.alt}>
      <LazyImage src={animal.image} alt={animal.alt} classStyles='max-w-28 max-h-28 m-4 transition-transform hover:scale-110' />
    </button>
  {/each}
</div>

<style>
    @keyframes vibrate {
      0% { transform: translate(0); }
      25% { transform: translate(-2px, 2px); }
      50% { transform: translate(2px, -2px); }
      75% { transform: translate(-2px, -2px); }
      100% { transform: translate(0); }
    }

    .vibrate {
      animation: vibrate 0.5s ease forwards; /* Adjust duration and easing as necessary */
      filter: hue-rotate(-100deg) saturate(2) brightness(1.2); /* More prominent red */

    }

</style>
