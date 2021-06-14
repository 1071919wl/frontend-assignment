import React from 'react';
import Logo from '../../images/logo.svg';
import SearchBox from '../search/searchBox'
import './stylesheets/navbar.css';


const NavBar = () => {

    return(
        <nav className='NavbarContainer'>

            <div className='logoSearchContainer'>

                <div className='logoContainer'>
                    <img src={Logo} alt="Timescale" className='Logo'/>
                </div>

                <SearchBox />
                
            </div>

            <div>
                <div className='navBorder'></div>
            </div>     
        </nav>
    )
}

export default NavBar;
