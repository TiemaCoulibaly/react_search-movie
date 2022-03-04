import React from "react";
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/outline";
import netflix from "../assets/netflix.png";

const Header = ({ image }) => {
	console.log("ddd", image);
	//poster_path / backdrop_path
	return (
		<div className="bg-red-400 header px-5 md:px-[100px] py-5 md:py-10 relative w-full h-[800px] h-96">
			{/* Navbar  */}
			<div className="flex items-center justify-between bg-transparent">
				<img
					src={netflix}
					alt="netflix"
					className="w-24 md:w-32 bg-transparent"
				/>
				<div className="flex gap-x-4 bg-transparent">
					<div className="border border-white py-2 px-2 bg-transparent w-fit flex">
						<GlobeAltIcon className="w-4 text-white mr-2" />
						<p className="text-white pr-4 md:pr-[72px] hover:cursor-pointer font-medium text-[13px] bg-transparent">
							English
						</p>
						<ChevronDownIcon className="w-4 text-white" />
					</div>
					<a
						className="text-white font-medium hover:cursor-pointer hover:bg-red-800 text-[13px] bg-[#E30813] py-2 px-4 w-fit"
						href="/login">
						Sign In
					</a>
				</div>
			</div>
			{/* Heading */}
			<div className="max-w-[700px] mx-auto pt-[120px] text-center bg-transparent">
				<h1 className="font-bold leading-[1.1] text-2xl md:text-5xl text-white">
					Unlimited movies, TV shows, and more.
				</h1>

				<h3 className="font-medium pt-2 leading-tight md:text-2xl text-white">
					Watch anywhere. Cancel anytime.
				</h3>
				<h3 className="font-normal pt-6 leading-tight text-sm md:text-md text-white">
					Ready to watch? Enter your email to create or restart your
					membership.
				</h3>
				{/* Search Input Fields and Button */}
				<div className="flex flex-col md:flex-row items-center mt-4 justify-center">
					<input
						type="email"
						name="email"
						id="email"
						className="w-full md:w-[500px] py-3 md:py-[15.5px] px-4"
						placeholder="Email address"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
