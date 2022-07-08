import { randInt, randFloat, generateUUID } from 'three/src/math/MathUtils';
import { writable } from "svelte/store";
import * as THREE from "three";

export type HydrogenIsotope = "PROTIUM" | "DEUTERIUM" | "TRITIUM";
export const isotopes: HydrogenIsotope[] = ["PROTIUM", "DEUTERIUM", "TRITIUM"] // 
export const getRandomIsotope = () => isotopes[randInt(0, 2)];

export function generateAtom(answer_text: string, position: any, value: number) {
	return {
		id: generateUUID(),
		position: position,
		answer_text: answer_text,
		value: value
	}
}
const answer_texts = [
	{ "value": 5, "name": "Stimme voll und ganz zu", "position": new THREE.Vector4(-4, 3, 1) },
	{ "value": 4, "name": "Stimme zu", "position": new THREE.Vector4(0, 4, 1) },
	{ "value": 3, "name": "Stimme eher zu", "position": new THREE.Vector4(4, 3, 1) },
	{ "value": 2, "name": "Stimme eher nicht zu", "position": new THREE.Vector4(4, -3, 1) },
	{ "value": 1, "name": "Stimme nicht zu", "position": new THREE.Vector4(0, -4, 1) },
	{ "value": 0, "name": "Stimme überhaupt nicht zu", "position": new THREE.Vector4(-4, -3, 1) },
]
const count = answer_texts.length;
const _atoms = answer_texts.map(({ name, position, value }) => generateAtom(name, position, value))

export const atoms = writable(_atoms);

export function removeAtomByID(id: string) {
	atoms.update(current => {
		return current.filter(a => a.id !== id);
	})
}
