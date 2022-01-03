import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import Movie from "./components/Movie.jsx";
import Footer from "./components/Footer.jsx";

const url = `
https://api.themoviedb.org/3/`;
const App = () => {
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

	const useStyles = makeStyles((root) => ({
		searchBarContainer: {
			backgroundColor: "#A3C3D9",
			height: "30vh",
		},
		input: {
			width: "600px",
			[root.breakpoints.down("xs")]: {
				width: "190px",
			},
			[root.breakpoints.down("md")]: {
				width: "250px",
			},
		},
		icon: {
			height: "40px",
			width: "60px",
			backgroundColor: "#1C6E8C",
			color: "white",
		},
		root: {
			justifyContent: "center",
		},
	}));
	const classes = useStyles();
	return (
		<>
			<Grid
				container
				xs={12}
				direction="column"
				justify="center"
				alignItems="center"
				id="container"
				className={classes.searchBarContainer}>
				<h1>Search Movie App</h1>
				<form onSubmit={handleSubmit}>
					<br />
					<TextField
						className={classes.input}
						variant="outlined"
						required="true"
						type="text"
						name="query"
						label="E.g fast and furious"
						size="small"
						onChange={handleChange}
					/>
					<button className={classes.icon}>
						<SearchIcon />
					</button>
				</form>
			</Grid>
			<Box className={classes.root} display="flex" flexWrap="wrap">
				{movies.map((movie) => (
					<Movie key={movie.id} {...movie} />
				))}
			</Box>
			<Footer />
		</>
	);
};

export default App;
