import React from 'react';
import './stylesheets/movieItem.css';

const MovieItem = ({movie}) => {

    console.log(movie)
    return (
        <div className='memberContainer'>
            {movie.original_title}

            <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='img' className='movieImg'/>
            </div>
            <div>
                <h2>{movie.original_title}</h2>
            </div>
            <div className='memTitleContainer'>
                    <h4>{movie.vote_average}</h4>
            </div>

        </div>
    )

}

export default MovieItem;