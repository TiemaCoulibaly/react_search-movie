import React from "react";
import Movie from "./Movie";

const Movies = ({ movies }) => {
	return (
		<div className="flex flex-wrap justify-center">
			{movies.map((movie) => (
				<Movie key={movie.id} {...movie} />
			))}
		</div>
	);
};

export default Movies;
