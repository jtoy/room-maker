<script>
	import { Button } from '$lib/components/base/button';
	import { Heading } from '$lib/components/base/heading';
	import Modal from '$lib/components/base/modal/Modal.svelte';
	import { modals } from '$lib/room/ui-state.svelte';
	import { editorState, tryLoadingRoomFromLocalStorage } from './editorState.svelte';
</script>

<div class="pointer-events-none fixed top-8 right-4 left-4 flex items-center justify-center gap-2">
	<Heading>my room</Heading>
</div>

<div class="pointer-events-none fixed right-4 bottom-4 left-4 flex justify-between">
	<Button
		size="lg"
		onclick={() => {
			modals.infoModalState = true;
		}}
		variant="secondary"
	>
		Info
	</Button>

	<Button
		size="lg"
		onclick={() => {
			tryLoadingRoomFromLocalStorage(true);
			editorState.isEditing = true;
			history.replaceState(null, '', location.pathname);
		}}
	>
		Edit room
	</Button>
</div>

<Modal bind:open={modals.infoModalState} class="text-base-900 dark:text-base-50">
	<div>
		This is an experimental web app for creating tiny 3d rooms built
		by
		<a
			href="https://flo-bit.dev"
			target="_blank"
			class="text-accent-700 dark:text-accent-400 hover:text-accent-600 dark:hover:text-accent-500 font-medium"
			>flo-bit</a
		>
	</div>
	<div>
		It's still a work in progress, but it's open source (<a
			href="https://github.com/flo-bit/room"
			target="_blank"
			class="text-accent-700 dark:text-accent-400 hover:text-accent-600 dark:hover:text-accent-500 font-medium"
			>source code available here</a
		>), so feel free to contribute or suggest features on github 😊
	</div>
</Modal>
