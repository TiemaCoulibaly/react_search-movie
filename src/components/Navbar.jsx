import React from "react";

const Navbar = () => {
	return (
		<>
			<nav class="w-full flex flex-row items-center p-3 justify-around bg-night shadow-xs">
				<div class="ml-8 text-lg text-white hidden md:flex">
					React Search Movie
				</div>
				<span class="w-full md:w-3/12 h-10 bg-gray-200 cursor-pointer text-sm rounded-full flex">
					<input
						type="search"
						name="search"
						placeholder="Search"
						class="flex-grow px-4 bg-moon text-white rounded-l-full rounded-r-full text-sm focus:outline-none"
					/>
				</span>
			</nav>
		</>
	);
};

export default Navbar;
