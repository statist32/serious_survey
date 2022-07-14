<script lang="ts">
	/**
	 * This scene was inspired by Paul Henschel's codesandbox here: https://codesandbox.io/s/figma-noodles-iedfg?file=/src/Noodles.js:230-1026
	 */
	import { elasticOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { SphereBufferGeometry } from 'three';
	import { Canvas, PerspectiveCamera, Mesh } from 'threlte';
	import { atoms } from './_routeLib/stores';
	import Hydrogen from './_routeLib/Hydrogen.svelte';
	import Text from './_routeLib/Text.svelte';
	import { backgroundMaterial } from './_routeLib/materials';
	import { mapLinear } from 'three/src/math/MathUtils';
	import { quintOut } from 'svelte/easing';
	import questions from './questions.json';
	const GAME_FINISHED_TEXT = 'Hier ist dein Ergebnis:';
	const DEFAULT_TEXT_SCALE = 4;
	const cameraX = tweened(0, { duration: 500, easing: quintOut });
	const cameraY = tweened(0, { duration: 500, easing: quintOut });
	function handleMousemove(evt: any) {
		cameraX.set(mapLinear(evt.clientX / window.innerWidth, 0, 1, -5, 5));
		cameraY.set(mapLinear(evt.clientY / window.innerHeight, 0, 1, 5, -5));
	}

	let scale = tweened(DEFAULT_TEXT_SCALE, { easing: elasticOut, delay: 200 });

	let counters = { Lehrkräfte: {}, Wissenschaftler: {} };

	function* nextQuestion() {
		for (let question of questions) {
			if (question.type === 'information') {
				yield {
					itemName: question.text,
					itemDescriptions: question.descriptions,
					subcategoryName: 'subcategory?.name',
					categoryName: 'category?.name',
					jobName: 'question?.name',
					multiplier: 0,
					descriptionScale: question?.descriptionScale || 1
				};
			}
			for (let category of question.categories) {
				for (let subcategory of category.subcategories) {
					yield {
						itemName: subcategory?.characteristic,
						itemDescriptions: subcategory?.descriptions,
						subcategoryName: subcategory?.name,
						categoryName: category?.name,
						jobName: question?.name,
						multiplier: subcategory?.multiplier,
						descriptionScale: question?.descriptionScale || 1
					};
				}
			}
		}
	}

	const nxQ = nextQuestion();
	let currentQuestion = nxQ.next().value;

	function handleAnwerSelected(event: any) {
		if (!counters.hasOwnProperty(currentQuestion.jobName)) {
			counters[currentQuestion.jobName] = {};
		}
		if (!counters[currentQuestion.jobName].hasOwnProperty(currentQuestion.categoryName)) {
			counters[currentQuestion.jobName][currentQuestion.categoryName] = 0;
		}
		counters[currentQuestion.jobName][currentQuestion.categoryName] +=
			event.detail.value * currentQuestion.multiplier;

		const nextQuestion = nxQ.next();
		scale
			.set(0)
			.then(() => (currentQuestion = !nextQuestion.done ? nextQuestion.value : nextQuestion))
			.then(() => scale.set(DEFAULT_TEXT_SCALE));
	}

	function calcMax() {
		const MAX_ANSWER_VALUE = 5;
		let maxScore = { Lehrkräfte: {}, Wissenschaftler: {} };

		for (let question of questions) {
			for (let category of question.categories) {
				for (let subcategory of category.subcategories) {
					if (!maxScore.hasOwnProperty(question.name)) {
						maxScore[question.name] = {};
					}
					if (!maxScore[question.name].hasOwnProperty(category.name)) {
						maxScore[question.name][category.name] = 0;
					}
					maxScore[question.name][category.name] += MAX_ANSWER_VALUE * subcategory.multiplier;
				}
			}
		}
		return maxScore;
	}
	const maxScore = calcMax();
</script>

<!-- mousemove and click shift camera -->
<div class="canvas-wrapper" on:mousemove={handleMousemove} on:click={handleMousemove}>
	<Canvas>
		<PerspectiveCamera position={{ x: $cameraX, y: $cameraY, z: 20 }} fov={24} near={0.5} />
		<Mesh geometry={new SphereBufferGeometry()} material={backgroundMaterial} scale={100} />
		{#if !currentQuestion?.done}
			<Text
				text={currentQuestion.itemName}
				scale={{ x: $scale, y: $scale }}
				position={{ x: 0, y: 1, z: 1 }}
			/>
			{#each currentQuestion.itemDescriptions as description, index}
				<Text
					text={description}
					scale={{
						x: $scale * 0.5 * currentQuestion.descriptionScale,
						y: $scale * 0.5 * currentQuestion.descriptionScale
					}}
					position={{ x: 0, y: -0.8 * index * currentQuestion.descriptionScale, z: 1 }}
				/>
			{/each}
			<!-- ATOMS -->
			{#each $atoms as atom (atom.id)}
				<Hydrogen
					{...atom}
					on:answerSelected={handleAnwerSelected}
					scale={{ x: $scale, y: $scale }}
				/>
			{/each}
		{:else}
			<Text text={GAME_FINISHED_TEXT} scale={{ x: $scale, y: $scale }} position={{ y: 3, z: 1 }} />
			<Text
				text={'Wissenschaftler'}
				scale={{ x: $scale, y: $scale }}
				position={{ x: 3, y: 2, z: 1 }}
			/>
			<Text
				text={`Fachkompetenz: ${Number(
					(100 * counters['Wissenschaftler']['Fachkompetenz']) /
						maxScore['Wissenschaftler']['Fachkompetenz']
				).toFixed(1)}%`}
				scale={{ x: $scale, y: $scale }}
				position={{ x: 3, y: 1, z: 1 }}
			/>
			<Text
				text={`Humankompetenz: ${Number(
					(100 * counters['Wissenschaftler']['Humankompetenz']) /
						maxScore['Wissenschaftler']['Humankompetenz']
				).toFixed(1)}%`}
				scale={{ x: $scale, y: $scale }}
				position={{ x: 3, y: 0, z: 1 }}
			/>
			<Text
				text={`Sozialkompetenz: ${Number(
					(100 * counters['Wissenschaftler']['Sozialkompetenz']) /
						maxScore['Wissenschaftler']['Sozialkompetenz']
				).toFixed(1)}%`}
				scale={{ x: $scale, y: $scale }}
				position={{ x: 3, y: -1, z: 1 }}
			/>
			<Text text={'Lehrkräfte'} scale={{ x: $scale, y: $scale }} position={{ x: -3, y: 2, z: 1 }} />
			<Text
				text={`Fachkompetenz: ${Number(
					(100 * counters['Lehrkräfte']['Fachkompetenz']) / maxScore['Lehrkräfte']['Fachkompetenz']
				).toFixed(1)}%`}
				scale={{ x: $scale, y: $scale }}
				position={{ x: -3, y: 1, z: 1 }}
			/>
			<Text
				text={`Humankompetenz: ${Number(
					(100 * counters['Lehrkräfte']['Humankompetenz']) /
						maxScore['Lehrkräfte']['Humankompetenz']
				).toFixed(1)}%`}
				scale={{ x: $scale, y: $scale }}
				position={{ x: -3, y: 0, z: 1 }}
			/>
			<Text
				text={`Sozialkompetenz: ${Number(
					(100 * counters['Lehrkräfte']['Sozialkompetenz']) /
						maxScore['Lehrkräfte']['Sozialkompetenz']
				).toFixed(1)}%`}
				scale={{ x: $scale, y: $scale }}
				position={{ x: -3, y: -1, z: 1 }}
			/>
		{/if}
	</Canvas>
</div>

<style>
	.canvas-wrapper {
		width: 100%;
		height: 100%;
	}
</style>
