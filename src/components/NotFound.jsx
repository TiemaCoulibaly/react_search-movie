import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="flex items-center justify-center w-full h-16 lg:h-auto md:h-auto bg-gradient-to-r from-night to-moon py-52">
			<div className="px-10 lg:px-40 md:px-40 py-5 lg:py-20 md:py-20 bg-white rounded-md shadow-xl">
				<div className="flex flex-col items-center">
					<h1 className="font-bold text-green-600 text-9xl">404</h1>

					<h6 className="mb-2 text-2xl font-bold text-center text-moon md:text-3xl">
						<span className="text-orange">Oops!</span> Page not
						found
					</h6>

					<p className="mb-8 text-center text-moon md:text-lg">
						The page you’re looking for doesn’t exist.
					</p>

					<Link
						to="/"
						className="group relative w-full flex justify-center p-3 text-xl font-medium rounded-md text-white bg-gradient-to-r from-night to-moon  hover:bg-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
						Go home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
