import React,{useState, useEffect, useContext} from 'react';
import {fetchMovies} from '../../util/movies_api_util';
import MovieItem from './movieItem';
import './stylesheets/movie.css';
import {SearchContext} from '../context/search-context';
import Loading from '../load/loading';

const Movie = () => {

    const [movies, setMovies] = useState([]);
    const [load, setLoad] = useState(false);
    const [errors, setErrors] = useState(null);
    const {searchInput} = useContext(SearchContext);

    //fetches movie api. If any error occurs, it will display message.
    useEffect(()=>{
        setLoad(true)
        fetchMovies().then((res) => {
            setLoad(false)
            if(res.status !== 200){
                throw Error('Unable to fetch movie list')
            }else{
                setMovies(res.data.results)
            }
        }).catch((err)=>{
            setErrors(err.message)
        });
        
    },[])

    //filters api to render search text
    const handleSearch = () => {
        if(searchInput === ""){
            return movies;
        }else{
            const filteredMovies = movies.filter(movie => (
                movie.title.toLowerCase().includes(searchInput.toLowerCase())
            ))
            return filteredMovies;
        }
    }

    return (
        <div>
            <div className='recentMovieContainer'>
                <h1>Most Recent Movies</h1>
            </div>
            {errors ?
                <h1 className='movieError' >{errors}</h1>
                :
                null
            }
            <Loading isLoading={load}/>
            {!load ?
                <div className='moviesContainer' >
                    {handleSearch().map((movie) =>(
                        <div key={movie.id} className='moviesList'>
                            <MovieItem movie={movie} />
                        </div>   
                    ))}
                </div>
            :
                <h1 className='loading'>Loading...</h1> 
            }  
        </div>
    )

}

export default Movie;