<script>
	import GitHub from '$lib/svg/GitHub.svelte';
	import Twitter from '$lib/svg/Twitter.svelte';
</script>

<nav />

<main>
	<slot />
</main>

<style>
	@import '../global.css';
	nav {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #fafbfc;
		z-index: 1;
	}

	main {
		width: 100%;
		height: 100%;
		overflow: hidden;
		padding-top: 67px;
		position: relative;
	}
</style>
