import React from "react";

const MovieSearch = () => {
	return (
		<div>
			<h1>Search Movie App</h1>
		</div>
	);
};

export default MovieSearch;

// import React, { useState } from 'react';

// const SearchMovie = () => {

//    const [query, setQuery] = useState('');
//    const [movies, setMovies] = useState([]);

//    const searchMovies = async (e) => {
//      e.preventDefault()

//      const url=
//    `https://api.themoviedb.org/3/search/movie?api_key=269092cda2d99dce0a9ea3056009516c&language=en-US&query=${query}&page=1&include_adult=false`;

//    fetch(url)
//      .then(response => response.json())
//      .then(data => setMovies(data.results))

//     }
// const handleChange = (e) => {
//        setQuery(e.target.value);
//      }

//   return(
//     <>
//     <form onSubmit={searchMovies}>
//         <label>Movie name</label>
//             <input
//             type='text'
//             placeholder='enter a movie name'
//             name='query'
//             value={query}
//             onChange={handleChange}
//           />

//            <button>search</button>

//     </form>

//      {movies.map(movie =>
//      <div key={movie.id}>
//       <h1>{movie.title}</h1>
//       <p>{movie.release_date}</p>

//      </div>

//     )}
//       </>
//   )
// }

// export default SearchMovie;
