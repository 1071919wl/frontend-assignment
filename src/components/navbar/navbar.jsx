import React, {useState} from 'react';
import Logo from '../../images/logo.svg';
import Union from './images/Union.png';
import './stylesheets/navbar.css'

const NavBar = () => {


    return(
        <nav className='NavbarContainer'>

            <div className='logoContainer'>
                <img src={Logo} alt="Timescale" className='Logo'/>
            </div>

            <div className='navRightContainer'>
                <label className='searchContainer'><img src={Union} alt="Union" className='Union'/> 
                    <input type='input' placeholder='Search for a movie'  className='searchInput'/>
                </label>

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
        </nav>
    )
}

export default NavBar;
