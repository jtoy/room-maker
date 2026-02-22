import { type RoomObjectKind } from './models';

export const currentVersion = 0;

export type RoomStateType = {
	wallColor: string;
	floorColor: string;
	objects: RoomObjectData[];

	size: { x: number; z: number };

	id: number;

	version: number;
};

export const roomState: RoomStateType = $state({
	wallColor: '#f1f1f1',
	floorColor: '#a1a1a1',

	objects: [],

	size: { x: 2, z: 3 },

	id: 0,

	version: currentVersion
});

export type RoomObjectData = {
	kind: RoomObjectKind;
	position: [number, number, number];
	rotation: number;
	colors: string[];
	placement: 'floor' | 'wallX' | 'wallZ' | 'wallX2' | 'wallZ2';
	link?: string;
	image?: string;
};
