import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const CatPage = () => {
	const { id } = useParams();
	const {
		isPending,
		isError,
		data: cat,
		error,
	} = useQuery({
		queryKey: ["todos", id],
		queryFn: async () => {
			const response = await fetch(
				` https://api.thecatapi.com/v1/images/${id}`,
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		},
	});

	if (isPending) {
		return <article aria-busy="true" />;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}
	console.log(cat);
	return (
		<>
			<h1 className="">Cat by Id</h1>

			<img className="image-homepage" src={cat.url} key={cat.id} />
		</>
	);
};

export default CatPage;
