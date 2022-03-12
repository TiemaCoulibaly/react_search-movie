import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import defaultImage from "../assets/moviedetail.jpg";

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
				{movieDetails ? (
					<div className="w-full flex flex-col justify-center md:flex-row">
						<div className="flex flex-col justify-center">
							<Link to="/">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-14 w-14 text-orange transform transition duration-300 hover:scale-125"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 19l-7-7 7-7"
									/>
								</svg>
							</Link>
						</div>
						<div className="p-4">
							<img
								src={
									movieDetails.poster_path
										? imgUrl + movieDetails.poster_path
										: defaultImage
								}
								className="h-auto w-full object-cover lg:h-full md:h-full lg:w-96 md:w-96 rounded-lg"
								title="Mountain"
								alt="lorem"
							/>
						</div>

						<div className="p-8 lg:w-1/4 md:w-3/4">
							<h3 className="font-bold mb-2 text-white text-2xl lg:text-3xl md:text-3xl">
								{movieDetails.title}
							</h3>
							<div className="flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8 text-moon"
									viewBox="0 0 20 20"
									fill="currentColor">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
								<p className="font-bold text-xl mb-2 text-orange mr-52">
									{movieDetails.vote_average}
								</p>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8 text-moon mr-2"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
								<p className="text-xl mb-2 text-white">
									{movieDetails.release_date}
								</p>
							</div>

							<p className="mt-2 text-lg">
								{movieDetails.overview}
							</p>

							<div className="flex justify-center p-1">
								{genres.map((genre, id) => (
									<p
										key={id}
										className="inline-block bg-orange rounded-lg p-2 font-semibold text-base lg:text-lg md:text-lg  text-night  mr-2 mb-2">
										{genre.name}
									</p>
								))}
							</div>
							{movieDetails.homepage && (
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
							)}
						</div>
					</div>
				) : (
					<>
						<div className="uppercase tracking-wide text-center h-96 text-indigo-500 font-semibold text-2xl lg:text-3xl md:text-3xl my-24">
							Sorry we couldn't retrieve any information about
							this movie
							<div className="flex flex-col items-center my-40">
								<Link
									to="/"
									className="flex justify-center p-3 text-xl font-medium rounded-md text-white bg-gradient-to-r from-night to-moon  hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
									Go home
								</Link>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default MovieDetail;
