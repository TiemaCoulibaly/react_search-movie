import React, { useState, useEffect } from "react";

import Movies from "../components/Movies";

import Navbar from "../components/Navbar";
import axios from "axios";
const url = `
https://api.themoviedb.org/3/`;
const Home = () => {
	const [movies, setMovies] = useState([]);
	const [query, setQuery] = useState("");

	useEffect(() => {
		const weekTrend = `trending/movie/week?api_key=${process.env.REACT_APP_KEY}`;

		axios.get(url + weekTrend).then((response) => {
			setMovies(response.data.results);
		});
	}, []);

	useEffect(() => {
		const movieSearch = `search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

		axios.get(url + movieSearch).then((response) => {
			setMovies(response.data.results);
		});
	}, [query]);

	return (
		<div className="bg-night">
			<Navbar query={query} setQuery={setQuery} />

			<h2 className="font-bold text-3xl mb-2 text-orange">
				POPULAR MOVIES
			</h2>

			<Movies movies={movies} />
		</div>
	);
};

export default Home;
