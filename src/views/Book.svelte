<script>
  import { location, querystring } from 'svelte-spa-router'
  let book = 'book页面'
  import Toasts from '../components/Toast/toasts.svelte';
  import { addToast } from '../components/Toast/toastStore.js';
  let handleToast = () => {
    addToast('hello word')
  }
</script>

<div>
  {book}
</div>
<p>The current page is: {$location}</p>
<p>The querystring is: {$querystring}</p>
<div class="p-4 bg-gray-600 text-white rounded w-1/2 mx-auto active:opacity-70" on:click={handleToast}>消息提示</div>
<Toasts />