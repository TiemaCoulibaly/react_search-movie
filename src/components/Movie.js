import React from "react";
import { Grid, Card, CardContent, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Movie.css";

const imgUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";
const Movie = ({ title, poster_path, overview, vote_average }) => {
	const useStyles = makeStyles((theme) => ({
		cardContainer: {
			padding: "10px",
			backgroundColor: "#CCD6EB",
			width: "100%",
		},
		card: {
			width: "200px",
			backgroundColor: "#A3C3D9",
			position: "relative",
			overflow: "hidden",
		},
		image: {
			width: "100%",
		},
		avatar: {
			height: theme.spacing(4),
			width: theme.spacing(4.5),
			color: "white",
			backgroundColor: "#1C6E8C",
		},

		info: {
			display: "flex",
			alignItems: "center",
			padding: "3px",
			justifyContent: "space-between",
		},
		overview: {
			backgroundColor: "#CCD6EB",
			color: "black",
			position: "absolute",
			bottom: 0,
			left: 0,
			right: 0,
			padding: "5px",
			transform: "translateY(100%)",
		},
	}));
	const classes = useStyles();

	const vote = (vote) => {
		if (vote >= 8) {
			return "green";
		} else if (vote >= 5) {
			return "orange";
		} else {
			return "red";
		}
	};
	return (
		<>
			<Grid
				className={classes.cardContainer}
				container
				item
				spacing={0}
				justify="center"
				xs={6}
				md={3}
				lg={3}>
				<Card id="card" className={classes.card}>
					<img
						className={classes.image}
						src={
							poster_path
								? imgUrl + poster_path
								: "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
						}
						alt={title}
					/>
					<CardContent>
						<Typography className={classes.info}>
							<h4>{title}</h4>

							<Avatar variant="square" className={classes.avatar}>
								<span className={`tag ${vote(vote_average)}`}>
									{vote_average}
								</span>
							</Avatar>
						</Typography>
						<Typography id="overview" className={classes.overview}>
							<h3>Description</h3>
							<div>{overview}</div>
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</>
	);
};

export default Movie;
