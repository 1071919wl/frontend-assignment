import React, {useState, useContext, memo} from 'react';
import '../navbar/stylesheets/navbar.css';
import Union from '../navbar/images/Union.png';
import {SearchContext} from '../context/search-context';

const SearchBox = ({someFunc}) => {

    const {setSearchInput} = useContext(SearchContext);
    const [showLinks, setShowLinks] = useState(false)
    console.log('RENDER FROM SEARCHBOX')
    return(
        <div className='navRightContainer'  >

            <label className='searchContainer' id={showLinks ? "hidden" : ""} onMouseLeave={()=>setShowLinks(false)}>
                <img src={Union} alt="Union" className='Union'/> 
                <input type='search' placeholder='Search for a movie'  className='searchInput' onChange={e=>setSearchInput(e.target.value)}/>
            </label>
            <div className='Hover' onClick={() => setShowLinks(!showLinks)} >
                <img src={Union} alt="Union" className='hoverSearch'/> 
            </div>
            <button onClick={someFunc}>someFunc</button>
        </div> 
    )
}

export default memo(SearchBox);
