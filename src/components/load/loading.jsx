import React, {useState, useEffect, useRef} from 'react';

const Loading = ({isLoading}) => {

    const [state, setState] = useState(false)
    const blue = useRef('')

    useEffect(() => {
        setState(isLoading)        
    },[isLoading])

    useEffect(() => {
        if(state){
            blue.current.style.color = "red";
        }
        else{
            blue.current.style.color = "blue";
        }
    },[state])

    return(
        <div>
            {isLoading ? 
                <h1 
                    ref={blue}
                    style={{color: 'blue'}}
                
                >
                    LOADING...
                </h1>
            :
                <h1 
                    ref={blue}
                    style={{color: 'blue'}}
                
                >
                    loaded...
                </h1>
            }
        </div>
    )
}

export default Loading;