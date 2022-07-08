<script lang="ts">
	import { Text, Group } from 'threlte';
	import { HTML, useCursor } from 'threlte/extras';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	const { onPointerEnter, onPointerLeave } = useCursor();

	let showDetails: boolean = false;

	const positionX = tweened(0, { duration: 400, easing: cubicOut });
	const detailScale = tweened(0, { duration: 400, easing: cubicOut });
	$: if (showDetails) {
		positionX.set(-5).then(() => detailScale.set(3));
	} else {
		detailScale.set(0).then(() => positionX.set(0));
	}
	export let text: string;
	export let scale: any;
	export let position: any;
</script>

<Group position={{ x: $positionX }}>
	<Text
		{text}
		font="/assets/ChakraPetch-Medium.ttf"
		{scale}
		{position}
		anchorX="center"
		interactive
		overflowWrap="normal"
		maxWidth="3"
		textAlign="center"
	/>
</Group>
