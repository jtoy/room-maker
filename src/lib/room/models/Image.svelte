<script lang="ts">
	import type { Props } from '@threlte/core';
	import { HTML } from '@threlte/extras';
	import type * as THREE from 'three';
	import { getImage } from '../images.svelte';

	let {
		ref = $bindable(),
		size = [270, 150],
		image,
		...props
	}: Props<THREE.Group> & {
		ref?: THREE.Group;
		size?: [number, number];
		image?: string;
	} = $props();

	let myImage = $derived.by(() => {
		if (!image) return;

		if (typeof image === 'string' && image.startsWith('local:')) {
			return getImage(image.replace('local:', ''));
		}
		return null;
	});
</script>

{#if image}
	<HTML transform bind:ref occlude="blending" scale={0.1} pointerEvents="none" {...props}>
		<div style="width: {size?.[0] ?? 270}px; height: {size?.[1] ?? 150}px;" class="bg-black">
			{#await myImage then myImage}
				<img
					src={myImage}
					alt=""
					class={['h-full w-full touch-none object-cover select-none', !myImage ? 'hidden' : '']}
				/>
			{/await}
		</div>
	</HTML>
{/if}
