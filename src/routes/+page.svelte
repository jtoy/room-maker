<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/room/Scene.svelte';
	import { onMount } from 'svelte';

	import EditorUi from '$lib/editor/EditorUI.svelte';
	import PreviewUi from '$lib/editor/PreviewUI.svelte';
	import { editorState, tryLoadingRoomFromLocalStorage } from '$lib/editor/editorState.svelte';

	onMount(() => {
		tryLoadingRoomFromLocalStorage();
		editorState.isEditing = true;
	});
</script>

<div class="fixed inset-0 -z-20 h-[100dvh] w-screen">
	<Canvas>
		<Scene />
	</Canvas>
</div>

{#if editorState.isEditing}
	<EditorUi />
{:else}
	<PreviewUi />
{/if}
