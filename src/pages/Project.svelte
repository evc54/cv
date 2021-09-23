<script type="ts">
  import work from '../data/work.json';
  import ProjectDesc from '../lib/ProjectDesc.svelte';
  import Gallery from '../lib/Gallery.svelte';
  import SimilarWork from '../lib/SimilarWork.svelte';

  import transition from './_transition';

  export let params: { id: string };

  $: project = work.find(project => project.id === params.id);
</script>

{#key params.id}
  <article
    in:transition
    class="project"
  >
    {#if project}
      <ProjectDesc
        id={project.id}
        name={project.name}
        year={project.year}
        summary={project.summary}
        detail={project.detail}
        tags={project.tags}
        live={project.live}
        git={project.git}
      />

      {#if project.achievements}
        <h2 class="heading">Achievements</h2>

        <ul class="achievements">
          {#each project.achievements as { part, text }}
            <li>
              {text}

              <span class="part">({part})</span>
            </li>
          {/each}
        </ul>
      {/if}

      {#if project.images}
        <h2 class="heading">Screenshots</h2>

        <Gallery
          id={project.id}
          images={project.images}
        />
      {/if}

      {#if project.similar}
        <h2 class="heading">Similar projects</h2>

        <SimilarWork similar={project.similar} />
      {/if}
    {:else}
      <div class="no-project">Project &laquo;{params.id}&raquo; not found.</div>
    {/if}
  </article>
{/key}

<style lang="stylus">
  .project
    .heading
      font-size 1.8rem
      font-weight 600
      margin 4rem 0 1rem

    .achievements
      margin 1rem 0
      padding 0 0 0 2rem

      .part
        color var(--color-muted)

    .no-project
      font-size 1.8rem
</style>
