import React from 'react';
import './stylesheets/movieDetail.css';

const MovieDetail = ({movie}) => {

    //formats json to readable date (ie: May 16, 1993)
    const formatDate = (releaseDate) => {
        let date = new Date(releaseDate)
        let readable = date.toDateString();
        let arr = readable.split(" ");
        arr.shift();
        return arr.join(" ")
    }

    return (
        <div className='MovieDetailContainer'>
            <div className='detailTitleContainer'>
                <h1>{movie.title}</h1>
            </div>
            <div className='imgDetailContainer'>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='img' className='detailImg'/>
                </div>
                <div className='dateVoteContainer'>
                    <div className='releaseDateContainer'>
                        <label className='dateLabel'>Release Date:</label>
                        <p>{formatDate(movie.release_date)}</p>
                    </div>
                    <div className='overviewContainer'>
                        <p>{movie.overview}</p>
                    </div >
                    <div className='voteAvgContainer'>
                        <p className='voteAvg'>{movie.vote_average}</p> 
                        <p>/ 10 ({movie.vote_count} total votes)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail