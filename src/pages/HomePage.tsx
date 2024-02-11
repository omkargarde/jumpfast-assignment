import { useQuery } from "@tanstack/react-query";
import { Cat } from "../types/catsType";

const HomePage = () => {
	const {
		isPending,
		isError,
		data: cats,
		error,
	} = useQuery({
		queryKey: ["todos"],
		queryFn: async () => {
			const response = await fetch(
				" https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_DJpFHfcmImrJPwPl11faZOBpopwDXU8Ojjpg85WX3g8jRdGxytWnrAHHckNYTgSr",
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		},
	});

	if (isPending) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}
	console.log(cats);
	return (
		<ul className="smol-aspect-ratio-gallery smol-flexbox-grid">
			{cats.map((cat: Cat) => (
				<li key={cat.id}>
					<img
						className="image-homepage"
						src={cat.url}
						alt={cat.breeds[0]}
						key={cat.id}
					/>
				</li>
			))}
		</ul>
	);
};

export default HomePage;
