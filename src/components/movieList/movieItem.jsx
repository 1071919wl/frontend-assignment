import React from 'react';
import './stylesheets/movieItem.css';

const MovieItem = ({movie}) => {


    return (
        <div className='movieContainer'>
            <div className='movieAvgContainer'>
                    <h4 className='movieAvg'>{movie.vote_average}</h4>
            </div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='img' className='movieImg'/>
            </div>
            <div className='movieTitleContainer'>
                <h2>{movie.title}</h2>
            </div>

        </div>
    )

}

export default MovieItem;
