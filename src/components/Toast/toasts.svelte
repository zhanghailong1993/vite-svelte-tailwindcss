<script>
import { toasts } from './toastStore.js'
import { flip } from 'svelte/animate';
</script>

{#if $toasts.length}
  <div class="fixed top-0 z-50">
    <ul>
      {#each $toasts as toast (toast.id)}
        <li animate:flip class="totast text-white px-5 py-2 mb-2 rounded-2xl">
          {@html toast.msg}
        </li>
      {/each}
    </ul>
  </div>
{/if}
<style>
  ul {
    list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: fixed;
    top: 30%;
		right: 50%;
		transform: translate(50%, 0%);
    margin: 0;
    padding: 0;
  }
  .totast {
    background: rgba(0, 0, 0, .7)
  }
</style>