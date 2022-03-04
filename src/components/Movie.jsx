import React from "react";
import { Link } from "react-router-dom";

const imgUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";
const Movie = ({ id, title, poster_path, vote_average, release_date }) => {
	return (
		<>
			<Link to={`/movie/${id}`}>
				<div className="w-56 mx-4 rounded overflow-hidden shadow-md my-4 border hover:shadow-2xl transform transition duration-300 hover:scale-110 ">
					<img
						className="w-full object-fill"
						src={
							poster_path
								? imgUrl + poster_path
								: "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
						}
						alt={title}
					/>
					{/* <div className="px-6 py-4">
						<h3 className="font-bold text-lg mb-2 text-white">
							{title}
						</h3>
						<div className="flex">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-moon"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
							<p className="font-bold text-base mb-2 text-orange">
								{vote_average}
							</p>
						</div>
						<div className="flex">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-moon mr-2"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							<p className="text-base mb-2 text-white">
								{release_date}
							</p>
						</div>
					</div> */}
				</div>
			</Link>
		</>
	);
};

export default Movie;
