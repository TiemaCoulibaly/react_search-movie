import React from "react";
import { Link } from "react-router-dom";

const imgUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";
const Movie = ({ id, title, poster_path }) => {
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
				</div>
			</Link>
		</>
	);
};

export default Movie;
