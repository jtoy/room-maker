<script lang="ts">
	import Discord from './Discord.svelte';
	import Github from './Github.svelte';
	import Twitter from './Twitter.svelte';
	import Youtube from './Youtube.svelte';
	import Facebook from './Facebook.svelte';

	const {
		discord,
		github,
		twitter,
		youtube,
		facebook,
		svgClasses
	}: {
		discord?: string;
		github?: string;
		twitter?: string;
		youtube?: string;
		facebook?: string;
		svgClasses?: string;
	} = $props();
</script>

<div class="flex flex-wrap items-center gap-4">
	{#if discord}
		<Discord href={discord} {svgClasses} />
	{/if}
	{#if github}
		<Github href={github} {svgClasses} />
	{/if}
	{#if twitter}
		<Twitter href={twitter} {svgClasses} />
	{/if}
	{#if youtube}
		<Youtube href={youtube} {svgClasses} />
	{/if}
	{#if facebook}
		<Facebook href={facebook} {svgClasses} />
	{/if}
</div>
