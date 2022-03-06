import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
	return (
		<>
			<nav className="w-full flex flex-row items-center p-3 justify-around bg-night shadow-xs border-b-2 border-moon ">
				<div className="ml-8 text-lg text-white flex flex-row lg:flex">
					<Link to="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
							/>
						</svg>{" "}
						<span>React Movie</span>
					</Link>
				</div>
				<span className="w-2/3 lg:w-3/12 md:w-3/12 h-10 bg-gray-200 cursor-pointer text-sm rounded-full flex">
					<input
						type="search"
						name="search"
						value={props.query}
						onChange={(e) => props.setQuery(e.target.value)}
						placeholder="eg: Fast and Furious..."
						className="flex-grow px-4 bg-moon text-white rounded-l-full rounded-r-full text-sm focus:outline-none"
					/>
				</span>
			</nav>
		</>
	);
};

export default Navbar;
