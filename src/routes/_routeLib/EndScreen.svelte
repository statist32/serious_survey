<script lang="ts">
	import Text from './Text.svelte';

	const GAME_FINISHED_TEXT_1 = 'Ihr Ergebnis:';
	const GAME_FINISHED_TEXT_2 = 'Übereinstimmung zum Beruf';
	const GAME_FINISHED_TEXT_3 = 'Übereinstimmung in den einzelnen Kompetenzen';
	const GAME_FINISHED_TEXT_4 =
		'Bitte machen Sie nun einen Screenshot von dieser Seite und kehren Sie zur Umfrage zurück!';
	const COMPETENCES = ['Fachkompetenz', 'Humankompetenz', 'Sozialkompetenz'];
	const PROFESSIONS = ['Lehrkraft', 'WissenschaftlerIn'];

	export let scale;
	export let counters: any;
	export let questions: any;

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

<Text text={GAME_FINISHED_TEXT_1} scale={{ x: $scale, y: $scale }} position={{ y: 3, z: 1 }} />
<Text text={GAME_FINISHED_TEXT_2} scale={{ x: $scale, y: $scale }} position={{ y: 2, z: 1 }} />
<Text text={GAME_FINISHED_TEXT_3} scale={{ x: $scale, y: $scale }} position={{ y: 0, z: 1 }} />
<Text text={GAME_FINISHED_TEXT_4} scale={{ x: $scale, y: $scale }} position={{ y: -4, z: 1 }} />

{#each PROFESSIONS as profession, professionIndex}
	<Text
		text={`${profession}: ${calcProfessionPercentage(counters[profession], maxScore[profession])}%`}
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
