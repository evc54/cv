<script lang="ts">
  import Expertise from '../lib/Expertise.svelte';
  import Icon from '../lib/Icon.svelte';
  import skill from '../data/skill.json';
  import software from '../data/software.json';

  import transition from './_transition';
</script>

<article
  in:transition
  class="about"
>
  <p>
    Hello!
  </p>

  <p>
    My name's Eugene and I'm web developer with 15+ years of experience.
  </p>

  <p>
    I
    <small aria-label="love">
      <Icon name="heart" />
    </small>
    to make high quality web sites, focusing on usability and performance.
    I have all the skills to develop or improve both backend and frontend parts
    of web application using the latest techniques and trends.
  </p>

  <div class="columns">
    <div class="column skills">
      <h2>Major <span>Skills</span></h2>

      {#each skill as { section, items }}
        <section>
          <h3>{section}</h3>

          {#each items as item}
            <div class="expertise">
              <Expertise
                color="green"
                {...item}
              />
            </div>
          {/each}
        </section>
      {/each}
    </div>

    <div class="separator" />

    <div class="column software">
      <h2>Major <span>Technologies</span></h2>

      {#each software as { section, items }}
        <section>
          <h3>{section}</h3>

          {#each items as item}
            <div class="expertise">
              <Expertise
                color="blue"
                {...item}
              />
            </div>
          {/each}
        </section>
      {/each}
    </div>
  </div>
</article>

<style lang="stylus">
  .about
    p
      font-size 2.2rem
      font-weight 100
      margin 1.5rem 0

      &:first-child
        margin-top 0

      small
        color #ef4176

    .columns
      display flex
      align-items flex-start

      @media (max-width: 576px)
        display block

      .separator
        flex 0 0 3rem

      .column
        flex 1 1 50%
        display flex
        flex-direction column

        h2
          margin 2rem 0 0 0
          font-size 1.8rem
          font-weight 800

        &.skills
          h2
            span
              color #39a063

        &.software
          h2
            span
              color #4b8dc7

        section
          margin 3rem 0 0 0
          padding 1.5rem
          border 1px solid rgba(255, 255, 255, 0.1)
          position relative
          border-radius 1rem

          h3
            position absolute
            top -0.9rem
            left 1rem
            background var(--color-content-bg)
            font-size 1.6rem
            font-weight 800
            line-height 1.6rem
            margin 0
            padding 0 0.5rem

          .expertise + .expertise
            margin-top 1.5rem

      // a hack to equal column's height
      .skills
        section:last-child
          position relative
          top 2px
</style>
