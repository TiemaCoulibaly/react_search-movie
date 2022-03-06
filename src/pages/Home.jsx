import React, { useState, useEffect } from "react";

import Movies from "../components/Movies";

import Navbar from "../components/Navbar";
import axios from "axios";
import ScrollToTop from "../components/ScrollToTop";
import MovieQuery from "../components/MovieQuery";
const URL = `https://api.themoviedb.org/3`;
const API_KEY = process.env.REACT_APP_KEY;

const endpoints = {
	originals: "/discover/tv",
	trending: "/trending/all/week",
	now_playing: "/movie/now_playing",
	popular: "/movie/popular",
	top_rated: "/movie/top_rated",
	upcoming: "/movie/upcoming",
	movie_search: "/search/movie?api_key=",
};
const Home = () => {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);
	const [originals, setOriginals] = useState([]);
	const [trending, setTrending] = useState([]);
	const [nowPlaying, setNowPlaying] = useState([]);
	const [popular, setPopular] = useState([]);
	const [topRated, setTopRated] = useState([]);
	const [upcoming, setUpcoming] = useState([]);

	useEffect(() => {
		//originals
		axios
			.get(`${URL}${endpoints.originals}`, {
				params: {
					api_key: API_KEY,
				},
			})
			.then((res) => {
				setOriginals(res.data.results);
			});
		// Load Trending
		axios
			.get(`${URL}${endpoints.trending}`, {
				params: {
					api_key: API_KEY,
				},
			})
			.then((res) => setTrending(res.data.results));

		// Load Now Playing
		axios
			.get(`${URL}${endpoints.now_playing}`, {
				params: {
					api_key: API_KEY,
				},
			})
			.then((res) => setNowPlaying(res.data.results));

		// Load Popular
		axios
			.get(`${URL}${endpoints.popular}`, {
				params: {
					api_key: API_KEY,
				},
			})
			.then((res) => setPopular(res.data.results));

		// Load Top Rated
		axios
			.get(`${URL}${endpoints.top_rated}`, {
				params: {
					api_key: API_KEY,
				},
			})
			.then((res) => setTopRated(res.data.results));

		// Load Upcoming
		axios
			.get(`${URL}${endpoints.upcoming}`, {
				params: {
					api_key: API_KEY,
				},
			})
			.then((res) => setUpcoming(res.data.results));

		//search query
		axios
			.get(
				`${URL}${endpoints.movie_search}${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
				{
					params: {
						api_key: API_KEY,
					},
				}
			)
			.then((response) => {
				setMovies(response.data.results);
			});
	}, [query]);

	return (
		<div className="bg-night">
			<Navbar query={query} setQuery={setQuery} />

			{query ? (
				<>
					<MovieQuery movies={movies} />
				</>
			) : (
				<>
					<h2 className="font-bold text-3xl mb-2 text-orange">
						Originals
					</h2>
					<Movies title="Netflix originals" movies={originals} />
					<h2 className="font-bold text-3xl mb-2 text-orange">
						Trending
					</h2>
					<Movies title="Trending" movies={trending} />
					<h2 className="font-bold text-3xl mb-2 text-orange">
						Now Playing
					</h2>
					<Movies title="Now Playing" movies={nowPlaying} />
					<h2 className="font-bold text-3xl mb-2 text-orange">
						Popular
					</h2>
					<Movies title="Popular" movies={popular} />
					<h2 className="font-bold text-3xl mb-2 text-orange">
						Top Rated
					</h2>
					<Movies title="Top Rated" movies={topRated} />
					<h2 className="font-bold text-3xl mb-2 text-orange">
						Upcoming
					</h2>
					<Movies title="Upcoming" movies={upcoming} />
				</>
			)}

			<ScrollToTop />
		</div>
	);
};

export default Home;
