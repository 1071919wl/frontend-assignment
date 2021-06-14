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

                {/* <ul className='navDropdownContainer' id={showLinks ? "hidden" : ""} onMouseLeave={()=>setShowLinks(!showLinks)}>
                    <div>
                        <ul className='navSelectionContainer'>
                            <li className='dentistButton'>Find a dentist</li>
                            <li className='loginButton'>Login</li>
                        </ul>
                    </div>
                </ul>
                <div className='Hover' onMouseEnter={() => setShowLinks(!showLinks)} >
                    <div className='hamburger'></div>
                    <div className='hamburger'></div>
                    <div className='hamburger'></div>
                </div> */}
            </div>
            <div>
                <div className='navBorder'></div>
            </div>     
        </nav>
    )
}

export default NavBar;
