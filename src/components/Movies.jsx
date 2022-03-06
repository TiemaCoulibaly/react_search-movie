import React from "react";
import Movie from "./Movie";

const Movies = ({ movies }) => {
	return (
		<>
			<div
				id="movies"
				className="flex
      overflow-x-scroll
			hide-scroll-bar
      mt-4
      p-4">
				{movies.length > 0 &&
					movies.map((movie) => <Movie key={movie.id} {...movie} />)}
			</div>
		</>
	);
};

export default Movies;
