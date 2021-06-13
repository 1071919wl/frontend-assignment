import React, {useState} from 'react';

export const SearchContext = React.createContext();

const SearchContextProvider = ({children}) => {
    
    const [searchInput, setSearchInput] = useState("");

    
    return(
        <SearchContext.Provider value={{searchInput, setSearchInput}}>
            {children}
        </SearchContext.Provider>
    )


}

export default SearchContextProvider