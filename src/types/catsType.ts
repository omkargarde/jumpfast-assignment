export type Cat = {
	id: string;
	url: string;
	width: number;
	height: number;
	breeds: string[];
	favorite: Record<string, unknown>;
};
