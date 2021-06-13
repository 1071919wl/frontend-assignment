import React, {useState} from 'react';
import './stylesheets/movieItem.css';
import Modal from '../modal/modal';


const MovieItem = ({movie}) => {

    const [show, setShow] = useState(false)

    return (
        <div className='movieContainer' onClick={()=>setShow(true)}>
            <Modal show={show} setShow={setShow} movie={movie} modalAction='movieDetails'/>
            <div className='movieAvgContainer'>
                <h4 className='movieAvg'>{movie.vote_average}</h4>
            </div>
            <div className='posterContainer'>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='img' className='movieImg'/>
                </div>
                <div className='movieTitleContainer'>
                    <h2>{movie.title}</h2>
                </div>
            </div>

        </div>
    )

}

export default MovieItem;
