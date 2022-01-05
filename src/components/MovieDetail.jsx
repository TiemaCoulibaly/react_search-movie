import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const MovieDetail = () => {
	const [movieDetails, setMovieDetails] = useState("");
	const [genres, setGenres] = useState([]);

	const location = useLocation();
	const path = location.pathname.split("/")[2];

	const imgUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";
	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${path}?api_key=${process.env.REACT_APP_KEY}&language=en-US`
			)
			.then((response) => {
				setMovieDetails(response.data);
				setGenres(response.data.genres);
			});
	}, [path]);

	return (
		<>
			<Navbar />
			<div className="bg-night text-white shadow-lg overflow-hidden py-28">
				<div className="w-full flex flex-col justify-center md:flex-row">
					<div className="p-4">
						<img
							src={imgUrl + movieDetails.poster_path}
							className="h-auto w-full object-cover lg:h-full md:h-full lg:w-96 md:w-96 rounded-lg"
							title="Mountain"
							alt="lorem"
						/>
					</div>
					<div className="p-8 lg:w-1/4 md:w-3/4">
						<div className="uppercase tracking-wide text-indigo-500 font-semibold text-2xl lg:text-3xl md:text-3xl">
							{movieDetails.title}
						</div>

						<p className="mt-2 text-lg">{movieDetails.overview}</p>
						<div className="flex justify-center p-1">
							{genres.map((genre) => (
								<p className="inline-block bg-orange rounded-full p-1 font-semibold text-base lg:text-lg md:text-lg  text-night  mr-2 mb-2">
									{genre.name}
								</p>
							))}
						</div>
						<div className="flex justify-center">
							<a
								className="bg-red text-lg p-2 rounded-lg"
								href={movieDetails.homepage}
								alt="movie"
								target="_blank"
								rel="noreferrer">
								Watch on Netflix
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetail;
