import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav className="w-full flex flex-row items-center p-3 justify-around bg-night shadow-xs border-b-2 border-moon ">
				<div className="ml-8 text-lg text-white hidden md:flex">
					<Link to="/"> React Search Movie</Link>
				</div>
				<span className="w-full md:w-3/12 h-10 bg-gray-200 cursor-pointer text-sm rounded-full flex">
					<input
						type="search"
						name="search"
						placeholder="Search"
						className="flex-grow px-4 bg-moon text-white rounded-l-full rounded-r-full text-sm focus:outline-none"
					/>
				</span>
			</nav>
		</>
	);
};

export default Navbar;
