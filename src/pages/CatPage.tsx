import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

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
			const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
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
			<Link to={"/"}>back</Link>
			<h1 className="">
				Cat by Id (note: api is not returning data like in example)
			</h1>
			<img className="image-homepage" src={cat.url} key={cat.id} alt="" />
		</>
	);
};

export default CatPage;
