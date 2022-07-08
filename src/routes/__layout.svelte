<script>
	import GitHub from '$lib/svg/GitHub.svelte';
	import Twitter from '$lib/svg/Twitter.svelte';
</script>

<main>
	<slot />
</main>

<style>
	@import '../global.css';

	main {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
	}
</style>
