import React, {useState, useContext} from 'react';
import '../navbar/stylesheets/navbar.css';
import Union from '../navbar/images/Union.png';
import {SearchContext} from '../context/search-context';

const SearchBox = () => {

    const {setSearchInput} = useContext(SearchContext);
    const [showLinks, setShowLinks] = useState(false)

    return(
        <div className='navRightContainer'  >

            <label className='searchContainer' id={showLinks ? "hidden" : ""} onMouseLeave={()=>setShowLinks(false)}>
                <img src={Union} alt="Union" className='Union'/> 
                <input type='search' placeholder='Search for a movie'  className='searchInput' onChange={e=>setSearchInput(e.target.value)}/>
            </label>

            <div className='Hover' onClick={() => setShowLinks(!showLinks)} >
                <img src={Union} alt="Union" className='hoverSearch'/> 
            </div>
            
        </div> 
    )
}

export default SearchBox;
