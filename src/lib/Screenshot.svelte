<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  import Icon from './Icon.svelte';
  import Preloader from './Preloader.svelte';

  export let idx: number;
  export let alt: string;
  export let src: string;
  export let thumb1x: string;
  export let thumb2x: string;
  export let loading: number;

  let preloading = true;

  $: pending = loading && loading === idx;
  $: disabled = loading && loading !== idx || preloading;

  const dispatch = createEventDispatcher();

  function preload() {
    const img = new Image();
    img.onload = () => {
      preloading = false;
    };
    img.src = thumb1x;
  }

  onMount(preload);
</script>

<a
  href={src}
  on:click|preventDefault={() => dispatch('zoom')}
  class="screenshot"
  class:pending
  class:disabled
>
  {#if preloading}
    <svg
      width="300"
      height="220"
      viewBox="0 0 300 220"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class="placeholder"
    >
      <path
        d="m24.324 169.39v-147.4c0-1.4196 1.4562-2.5805 3.2546-2.5805h244.84c1.7918-5e-3 3.2492 1.1505 3.2546 2.5805v89.484l-59.976-45.477-74.197 89.782-58.156-22.981zm-21.081-169.39c-1.7919 0-3.2432 1.1479-3.2432 2.5882v214.82c0 1.43 1.4384 2.5882 3.2432 2.5882h293.51c1.7919 0 3.2432-1.1479 3.2432-2.5882v-214.82c0-1.43-1.4384-2.5882-3.2432-2.5882zm74.294 93.176c15.06 0 27.267-11.877 27.267-26.529 0-14.652-12.208-26.529-27.267-26.529-15.06 0-27.267 11.877-27.267 26.529 0 14.652 12.208 26.529 27.267 26.529z"
      />
    </svg>
  {:else}
    <img
      in:fade
      src={thumb1x}
      srcset={`${thumb1x} 1x, ${thumb2x} 1.5x`}
      {alt}
      class="image"
    >
  {/if}

  <div class="overlay">
    <span class="text">{alt}</span>
    
    <span class="icon">
      {#if pending}
        <Preloader />
      {:else}
        <Icon name="zoom-in" />
      {/if}
    </span>
  </div>
</a>

<style lang="stylus">
  .screenshot
    display inline-flex
    position relative
    width 100%
    border 0.7rem solid var(--color-bg)
    border-radius 0.7rem
    box-sizing border-box
    transition border-color 0.2s linear
    cursor default

    .placeholder
    .image
      width 100%
      height auto
      fill rgba(0, 0, 0, 0.2)

    .overlay
      opacity 0
      position absolute
      top -0.7rem
      right -0.7rem
      bottom -0.7rem
      left -0.7rem
      font-size 3rem
      border-radius 0.7rem
      background rgba(0, 0, 0, 0.8)
      transition opacity 0.2s linear
      overflow hidden

      .text
        position relative
        top -1rem
        padding 1.5rem 1.5rem 0
        display block
        font-size 1.4rem
        transition top 0.2s linear

      .icon
        position absolute
        right 0
        bottom 1rem
        width 4rem
        height 4rem
        transition right 0.2s linear

    &:not(.disabled):hover
    &.pending
    &.pending:hover
      color var(--color-text)

      .overlay
        opacity 1

        .text
          top 0

        .icon
          right 1rem

    &:not(.disabled):hover
      cursor zoom-in

    &.pending
    &.pending:hover
      cursor wait
</style>
