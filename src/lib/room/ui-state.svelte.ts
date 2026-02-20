export const modals = $state({
	selectCategoryModalOpen: false,
	roomSettingsModalState: false,
	linkModalState: false,
	infoModalState: false,
	successModalState: false,
	signInSuccessModalState: false
});

export const wallVisibility = $state({
	N: true,
	S: true,
	E: true,
	W: true
});

const placementToWall: Record<string, keyof typeof wallVisibility> = {
	wallZ: 'N',
	wallZ2: 'S',
	wallX: 'W',
	wallX2: 'E'
};

export function isObjectVisible(placement: string): boolean {
	const wall = placementToWall[placement];
	return !wall || wallVisibility[wall];
}
