import React from "react";

const Footer = () => {
	return (
		<footer className="flex justify-center p-2 bg-night  text-white">
			&copy;{" "}
			<span>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://tiema-resume.web.app/">
					Tiema Coulibaly{" "}
				</a>
			</span>
			. All rights reserved
		</footer>
	);
};

export default Footer;
