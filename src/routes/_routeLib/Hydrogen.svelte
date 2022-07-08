<script lang="ts">
	import { Color } from 'three';
	import { Group, Text } from 'threlte';
	import { Float } from 'threlte/extras';
	import { createEventDispatcher } from 'svelte';

	export let position = { x: 0, y: 0, z: 0 };
	export let answer_text: string;
	let color = new Color('white');
	const dispatch = createEventDispatcher();

	export let scale: any;
	export let value: any;

	function handleClick(event: any) {
		// scale.set(0).then(() => removeAtomByID(id));
		// color = new Color('red');
		dispatch('answerSelected', {
			text: answer_text,
			value: value
		});
	}
	function onPointerEnter(event: any) {
		// TODO: higlight current answer which will be selected
		console.log(event);
	}
	function onPointerLeave(event: any) {
		console.log(event);
	}
</script>

<Float speed={2} rotationIntensity={0.1} floatIntensity={5} floatingRange={[-0.05, 0.05]}>
	<Group position={{ x: position.x, y: position.y, z: Math.min(position.z, -1) }} {scale}>
		<Text
			text={answer_text}
			font="/assets/ChakraPetch-Medium.ttf"
			position={{ y: 0, z: 1 }}
			anchorX="center"
			{color}
			on:click={handleClick}
			on:pointerenter{onPointerEnter}
			on:pointerleave{onPointerLeave}
			interactive
			scale={0.5}
		/>
	</Group>
</Float>
