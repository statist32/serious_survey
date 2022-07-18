<script lang="ts">
	import { elasticOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { SphereBufferGeometry } from 'three';
	import { Canvas, PerspectiveCamera, Mesh } from 'threlte';
	import Hydrogen from './_routeLib/Hydrogen.svelte';
	import Text from './_routeLib/Text.svelte';
	import { backgroundMaterial } from './_routeLib/materials';
	import { mapLinear } from 'three/src/math/MathUtils';
	import { quintOut } from 'svelte/easing';
	import questions from './questions.json';
	import * as THREE from 'three';

	const GAME_FINISHED_TEXT_1 = 'Ihr Ergebnis:';
	const GAME_FINISHED_TEXT_2 = 'Übereinstimmung zum Beruf';
	const GAME_FINISHED_TEXT_3 = 'Übereinstimmung in den einzelnen Kompetenzen';
	const GAME_FINISHED_TEXT_4 =
		'Bitte machen Sie nun einen Screenshot von dieser Seite und kehren Sie zur Umfrage zurück!';
	const COMPETENCES = ['Fachkompetenz', 'Humankompetenz', 'Sozialkompetenz'];
	const PROFESSIONS = ['Lehrkraft', 'WissenschaftlerIn'];

	const ANSWER_TEXTS = [
		{ value: 5, answer_text: 'Stimme voll und ganz zu', position: new THREE.Vector4(-4, 3, 1) },
		{ value: 4, answer_text: 'Stimme zu', position: new THREE.Vector4(0, 4, 1) },
		{ value: 3, answer_text: 'Stimme eher zu', position: new THREE.Vector4(4, 3, 1) },
		{ value: 2, answer_text: 'Stimme eher nicht zu', position: new THREE.Vector4(4, -3, 1) },
		{ value: 1, answer_text: 'Stimme nicht zu', position: new THREE.Vector4(0, -4, 1) },
		{ value: 0, answer_text: 'Stimme überhaupt nicht zu', position: new THREE.Vector4(-4, -3, 1) }
	];

	const DEFAULT_TEXT_SCALE = 4;
	const cameraX = tweened(0, { duration: 500, easing: quintOut });
	const cameraY = tweened(0, { duration: 500, easing: quintOut });
	function handleMousemove(evt: any) {
		cameraX.set(mapLinear(evt.clientX / window.innerWidth, 0, 1, -5, 5));
		cameraY.set(mapLinear(evt.clientY / window.innerHeight, 0, 1, 5, -5));
	}

	let scale = tweened(DEFAULT_TEXT_SCALE, { easing: elasticOut, delay: 200 });

	let counters = { Lehrkraft: {}, WissenschaftlerIn: {} };

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
					descriptionScale: question?.descriptionScale || 1,
					answers: ANSWER_TEXTS.map((answer) => ({ ...answer, answer_text: 'Fortfahren' }))
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
						descriptionScale: question?.descriptionScale || 1,
						answers: ANSWER_TEXTS
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
		let maxScore = { Lehrkraft: {}, WissenschaftlerIn: {} };

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

	function calcProfessionPercentage(professionCounters, professionMax) {
		const sumProfession = Object.entries(professionCounters).reduce(
			(prev, current) => (prev += current[1]),
			0
		);
		const maxSumProfession = Object.entries(professionMax).reduce(
			(prev, current) => (prev += current[1]),
			0
		);

		return ((100 * sumProfession) / maxSumProfession).toFixed(1);
	}
</script>

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

			{#each currentQuestion.answers as answer}
				<Hydrogen
					{...answer}
					on:answerSelected={handleAnwerSelected}
					scale={{ x: $scale, y: $scale }}
				/>
			{/each}
		{:else}
			<Text
				text={GAME_FINISHED_TEXT_1}
				scale={{ x: $scale, y: $scale }}
				position={{ y: 3, z: 1 }}
			/>
			<Text
				text={GAME_FINISHED_TEXT_2}
				scale={{ x: $scale, y: $scale }}
				position={{ y: 2, z: 1 }}
			/>
			<Text
				text={GAME_FINISHED_TEXT_3}
				scale={{ x: $scale, y: $scale }}
				position={{ y: 0, z: 1 }}
			/>
			<Text
				text={GAME_FINISHED_TEXT_4}
				scale={{ x: $scale, y: $scale }}
				position={{ y: -4, z: 1 }}
			/>

			{#each PROFESSIONS as profession, professionIndex}
				<Text
					text={`${profession}: ${calcProfessionPercentage(
						counters[profession],
						maxScore[profession]
					)}%`}
					scale={{ x: $scale, y: $scale }}
					position={{ x: 3 * Math.pow(-1, professionIndex), y: 1, z: 1 }}
				/>
				{#each COMPETENCES as competence, competenceIndex}
					<Text
						text={`${competence}: ${Number(
							(100 * counters[profession][competence]) / maxScore[profession][competence]
						).toFixed(1)}%`}
						scale={{ x: $scale, y: $scale }}
						position={{ x: 3 * Math.pow(-1, professionIndex), y: -1 * competenceIndex - 1, z: 1 }}
					/>
				{/each}
			{/each}
		{/if}
	</Canvas>
</div>

<style>
	.canvas-wrapper {
		width: 100%;
		height: 100%;
	}
</style>
