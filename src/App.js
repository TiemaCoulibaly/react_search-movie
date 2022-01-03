import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer.jsx";
import MovieDetail from "./components/MovieDetail.jsx";

import Navbar from "./components/Navbar.jsx";
import NotFound from "./components/NotFound.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/movie/:movieId" element={<MovieDetail />} />
				<Route path="*" element={NotFound} />
			</Routes>

			<Footer />
		</BrowserRouter>
	);
};

export default App;
