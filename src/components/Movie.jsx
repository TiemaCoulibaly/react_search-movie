import React from "react";

const imgUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";
const Movie = ({
	title,
	poster_path,
	overview,
	vote_average,
	release_date,
}) => {
	const vote = (vote) => {
		if (vote >= 8) {
			return "green";
		} else if (vote >= 5) {
			return "yellow";
		} else {
			return "red";
		}
	};
	return (
		<>
			<div className="w-52 mx-4 rounded overflow-hidden shadow-lg my-4">
				<img
					className="w-full object-fill"
					src={
						poster_path
							? imgUrl + poster_path
							: "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
					}
					alt={title}
				/>
				<div className="px-6 py-4">
					<h3 className="font-bold text-xl mb-2 text-white">
						{title}
					</h3>
					<span className="font-bold text-xl mb-2 text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-moon"
							viewBox="0 0 20 20"
							fill="currentColor">
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						{vote_average}
					</span>
					<p className="font-bold text-xl mb-2 text-white">
						{release_date}
					</p>
					{/* <p className="text-gray-700 text-base">{overview}</p> */}
				</div>
				{/* <div class="px-6 pt-4 pb-2">
					<span
						class={`bg-${vote(
							vote_average
						)}-300 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}>
						#{vote_average}
					</span>
				</div> */}
			</div>
		</>
	);
};

export default Movie;
