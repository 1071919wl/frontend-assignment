import React from 'react';

const MovieDetail = ({movie}) => {

    return (
        <div>
            <h1>LOOOOKIE!</h1>
            <div>
                <h1>{movie.title}</h1>
            </div>
            <div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='img' className='movieImg'/>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default MovieDetail