import React from "react";
import Movie from "./Movie";

const MovieQuery = ({ movies }) => {
	return (
		<>
			<div className="flex flex-wrap justify-center">
				{movies.map((movie) => (
					<Movie key={movie.id} {...movie} />
				))}
			</div>
		</>
	);
};

export default MovieQuery;
