import React,{useState, useEffect} from 'react';
import {fetchMovies} from '../../util/movies_api_util';
import MovieItem from './movieItem';
import './stylesheets/movie.css'

const Movie = () => {

    const [movies, setMovies] = useState([]);
    const [load, setLoad] = useState(false);
    const [errors, setErrors] = useState(null);

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

    return (
        <div>
            {console.log(movies)}
            <div className='LeadershipTitleContainer'>
                <h1>Most Recent Movies</h1>
            </div>
            {errors ?
                <h1 className='leadershipContainer' >{errors}</h1>
                :
                null
            }
            {!load ?
                <div className='leadershipContainer'>
                    {movies.map((movie) =>(
                        <div key={movie.id} className='leadershipList'>
                            <MovieItem movie = {movie}/>
                        </div>   
                    ))}
                </div>
            :
                <h1>Loading...</h1> 
            }  
        </div>
    )

}

export default Movie;