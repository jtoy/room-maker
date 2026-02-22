<script lang="ts">
	import '../app.css';

	import Head from '$lib/components/base/head/Head.svelte';
	import { base } from '$app/paths';
	import { Toaster } from '$lib/components/base/sonner';

	let { children } = $props();
</script>

{@render children()}

<Head
	emojiFavicon="🏠"
	title="my room"
	description="my tiny room"
	image={base + '/og-image.jpg'}
/>

<Toaster />
