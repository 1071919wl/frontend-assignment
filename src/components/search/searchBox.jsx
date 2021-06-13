import React, {useContext} from 'react';
import '../navbar/stylesheets/navbar.css';
import Union from '../navbar/images/Union.png';
import {SearchContext} from '../context/search-context';

const SearchBox = () => {

    const {setSearchInput} = useContext(SearchContext);

    return(
        <div className='navRightContainer'>
            <label className='searchContainer'><img src={Union} alt="Union" className='Union'/> 
                <input type='search' placeholder='Search for a movie'  className='searchInput' onChange={e=>setSearchInput(e.target.value)}/>
            </label>
        </div> 
    )
}

export default SearchBox;
