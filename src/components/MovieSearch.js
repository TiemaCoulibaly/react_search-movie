import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Grid,
	Card,
	Box,
	CardHeader,
	CardMedia,
	CardContent,
	Typography,
	TextField,
	Avatar,
	Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const MovieSearch = () => {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);

	const searchMovies = (e) => {
		e.preventDefault();
		const url = `https://api.themoviedb.org/3/search/movie?api_key=269092cda2d99dce0a9ea3056009516c&language=en-US&query=${query}&page=1&include_adult=false`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => setMovies(data.results));
	};

	const handleChange = (e) => {
		setQuery(e.target.value);
	};
	const useStyles = makeStyles({
		root: {
			width: "100%",
		},
		searchBarContainer: {
			backgroundColor: "#FCFDAF",
			height: "30vh",
		},
		input: {
			width: "500px",
		},
		icon: {
			height: "55px",
			width: "60px",
		},
		movieContainer: {
			width: "100%",
			marginTop: "15px",
		},
		avatar: {
			backgroundColor: "green",
		},
		media: {
			paddingTop: "56.25%",
		},
	});
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
				className={classes.searchBarContainer}>
				<h1>Search Movie App</h1>
				<form onSubmit={searchMovies}>
					<br />
					<TextField
						className={classes.input}
						variant="outlined"
						type="text"
						name="query"
						label="E.g fast and furious"
						onChange={handleChange}
						value={query}
					/>
					<button className={classes.icon}>
						<SearchIcon />
					</button>
				</form>
			</Grid>
			<Box mx={7}>
				<Grid
					className={classes.movieContainer}
					container
					spacing={3}
					direction="row"
					justify="center"
					alignItems="flex-start">
					{movies.map((movie) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							lg={3}
							xl={3}
							key={movie.id}>
							<Card>
								<CardHeader
									avatar={
										<Avatar
											aria-label="vote"
											className={classes.avatar}>
											{movie.vote_average}
										</Avatar>
									}
									title={movie.title}
								/>
								<CardMedia
									className={classes.media}
									image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
								/>
								<CardContent>
									<Typography
										variant="body2"
										color="textSecondary">
										{movie.overview}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
	);
};

export default MovieSearch;

// url = `https://api.themoviedb.org/3/search/movie?api_key=269092cda2d99dce0a9ea3056009516c&language=en-US&query=${query}&page=1&include_adult=false`;
