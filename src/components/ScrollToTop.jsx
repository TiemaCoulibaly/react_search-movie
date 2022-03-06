import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Top: 0 takes us all the way back to the top of the page
	// Behavior: smooth keeps it smooth!
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		// Button is displayed after scrolling for 500 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	//scroll-to-top classes: fixed, bottom:0, right:0
	return (
		<div className="fixed bg-orange bottom-3 right-3  cursor-pointer">
			{isVisible && (
				<div
					onClick={scrollToTop}
					className="fixed p-2 rounded-lg bg-orange bottom-3 right-3 lg:bottom-5 lg:right-5 cursor-pointer">
					<h3>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5 10l7-7m0 0l7 7m-7-7v18"
							/>
						</svg>
					</h3>
				</div>
			)}
		</div>
	);
};
export default ScrollToTop;
