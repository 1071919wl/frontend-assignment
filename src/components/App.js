import React from 'react';
import NavBar from './navbar/navbar';
import Movie from './movieList/movie';
import './reset.css';
import SearchContextProvider from './context/search-context';

const App = () => {

	return(
		<div className='AppContainer'>
			<SearchContextProvider>
				<NavBar />
				<Movie />
			</SearchContextProvider>
		</div>
	)
}

export default App;
