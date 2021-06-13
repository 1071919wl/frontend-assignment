import React from 'react';
import NavBar from './navbar/navbar';
import MovieList from './movieList/movie';
import './reset.css';

const App = () => {


	return(
		<div className='AppContainer'>
			<NavBar />
			<MovieList />
		</div>
	)
}

export default App;
