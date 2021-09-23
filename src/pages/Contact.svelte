<script lang="ts">
  import Icon from '../lib/Icon.svelte';
  import personal from '../data/personal.json';

  import transition from './_transition';
</script>

<article
  in:transition
  class="contact"
>
  {#each personal as { icon, label, value, link }}
    <section class="personal">
      <span class="icon">
        <Icon name={icon} />
      </span>
      
      <span class="label">{label}</span>
      
      <span class="value">
        {#if link}
          <a
            href={link}
            target="_blank"
          >
            {value}
          </a>
        {:else}
          {value}
        {/if}
      </span>
    </section>
  {/each}
</article>

<style lang="stylus">
  .contact
    .personal
      display flex
      align-items center
      font-size 1.8rem
      padding 0.7rem 0 2rem 0

      .icon
        flex 0 0 3rem
        font-size 1.6rem
        margin-right 1rem

      .label
        flex 0 0 20rem
        font-weight 500

        @media (max-width: 576px)
          display none

      .value
        a
          display inline-block
          font-weight 100
          color var(--color-text)
          transition color 0.2s linear
          text-decoration none
          border-bottom 1px dashed

          &:hover
            color var(--color-hover)

    .personal + .personal
      padding 2rem 0
      border-top 1px dashed rgba(255, 255, 255, 0.1)
</style>
