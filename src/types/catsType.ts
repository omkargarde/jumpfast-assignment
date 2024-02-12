export type Cat = {
	id: string;
	url: string;
	width: number;
	height: number;
	breeds: string[];
	favorite: Record<string, unknown>;
};

export type CatById = {
	id: string;
	width: number;
	height: number;
	url: string;
	breeds: [
		{
			weight: {
				imperial: string;
				metric: string;
			};
			id: string;
			name: string;
			temperament: string;
			origin: string;
			country_codes: string;
			country_code: string;
			life_span: string;
			wikipedia_url: string;
		},
	];
};
