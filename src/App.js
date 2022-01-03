import React from "react";

import Footer from "./components/Footer.jsx";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
	return (
		<>
			<Navbar />

			<Home />
			<Footer />
		</>
	);
};

export default App;
