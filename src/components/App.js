import React, {useState} from 'react';
import NavBar from './navbar/navbar';
import Movie from './movieList/movie';
import './reset.css';
import SearchContextProvider from './context/search-context';

const App = () => {

	// const [searchInput, setSearchInput] = useState("");

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
