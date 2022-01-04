import React, { useState, useEffect } from "react";

import Movies from "../components/Movies";
const url = `
https://api.themoviedb.org/3/`;
const Home = () => {
	const [movies, setMovies] = useState([]);
	const [query, setQuery] = useState("");
	useEffect(() => {
		const weekTrend = `trending/movie/week?api_key=269092cda2d99dce0a9ea3056009516c`;

		fetch(url + weekTrend)
			.then((response) => response.json())
			.then((data) => setMovies(data.results));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const movieSearch = `search/movie?api_key=269092cda2d99dce0a9ea3056009516c&language=en-US&query=${query}&page=1&include_adult=false`;

		fetch(url + movieSearch)
			.then((response) => response.json())
			.then((data) => setMovies(data.results));
	};

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	return (
		<div className="bg-night">
			{/* <TextField
						className={classes.input}
						variant="outlined"
						required="true"
						type="text"
						name="query"
						label="E.g fast and furious"
						size="small"
						onChange={handleChange}
					/> */}

			<h2 className="font-bold text-3xl mb-2 text-orange">
				POPULAR MOVIES
			</h2>
			<Movies movies={movies} />
		</div>
	);
};

export default Home;
