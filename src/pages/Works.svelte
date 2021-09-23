<script context="module" lang="ts">
  import work from '../data/work.json';

  const tags = work
    .reduce((carry, { tags }) => carry.concat(tags), ['all'])  // extract tag strings, 'all' on the first place
    .filter((tag, index, tags) => index === tags.indexOf(tag)) // filter non-unique tag strings
    .sort((a, b) => a.localeCompare(b));                       // alphabetically sort tags
</script>

<script lang="ts">
  import { flip } from 'svelte/animate';
  import { fly } from 'svelte/transition';

  import Tag from '../lib/Tag.svelte';
  import Project, { convertWorkToProject } from '../lib/Project.svelte';
  import selectedTag from '../stores/selectedTag';

  import transition from './_transition';

  $: projects = work
    .filter(({ tags }) => $selectedTag === 'all' ? true : tags.includes($selectedTag)) // filter by selected tag
    .sort((a, b) => b.produced - a.produced)                                           // sort by production time
    .map(convertWorkToProject);                                                        // reduce to required props
</script>

<article
  in:transition
  class="work"
>
  <ul class="tags">
    {#each tags as tag (tag)}
      <Tag {tag} />
    {/each}
  </ul>

  <ul class="projects table">
    {#each projects as project (project.id)}
      <li
        animate:flip|local={{ duration: 400 }}
        in:fly|local={{ duration: 400, x: 30 }}
        out:fly|local={{ duration: 400, y: -20 }}
      >
        <Project {...project} />
      </li>
    {/each}
  </ul>
</article>

<style lang="stylus">
  .work
    .tags
      list-style none
      display flex
      flex-wrap wrap
      margin 0 -0.5rem
      padding 0

      @media (max-width: 767px)
        display none

    .projects
      list-style none
      margin 2rem 0 0 0
      padding 0
</style>
