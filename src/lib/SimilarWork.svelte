<script type="ts">
  import work from '../data/work.json';
  
  import Project, { convertWorkToProject } from './Project.svelte';

  export let similar: string[]; // similar project ids

  const projects = work
    .filter(({ id }) => similar.includes(id))
    .map(convertWorkToProject);
</script>

<ul class="similar-projects table">
  {#each projects as project (project.id)}
    <li>
      <Project {...project} />
    </li>
  {/each}
</ul>

<style lang="stylus">
  .similar-projects
    list-style none
    margin 0
    padding 0
</style>
