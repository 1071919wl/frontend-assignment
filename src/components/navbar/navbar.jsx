import React,{useState, useRef, useCallback, useMemo} from 'react';
import Logo from '../../images/logo.svg';
import SearchBox from '../search/searchBox'
import './stylesheets/navbar.css';


const NavBar = () => {

    const [count, setCount] = useState(100);
    const arr = useRef([1,2,3,999,2,4,11])


    //!leverage useCallback to prevent rerendering in child component
    function someFunc(){
        console.log('somefunc from navbar')
    }
    const memoSomeFunc = useCallback(()=>{
        someFunc()
    },[])

    //!leverage useMemo to prevent functions from recreating afte each render
    const findMaxInt = () => {
        console.log('findMaxInt called in navbar')
        return Math.max(...arr.current);
    }
    const memoFindMaxInt = useMemo(()=>{
        findMaxInt()
    },[])

    return(
        <nav className='NavbarContainer'>

            <div className='logoSearchContainer'>

                <div className='logoContainer'>
                    <img src={Logo} alt="Timescale" className='Logo'/>
                </div>
                {count}
                <button onClick={()=>setCount(count+1)}>count</button>
                {memoFindMaxInt}
                <SearchBox  someFunc={memoSomeFunc}/>
                
            </div>

            <div>
                <div className='navBorder'></div>
            </div>     
        </nav>
    )
}

export default NavBar;
