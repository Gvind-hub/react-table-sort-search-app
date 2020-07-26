import React, {useState} from 'react';


import './Search.scss'

const Search = ({filterData}) => {
    const [searchText, setSearchText] = useState("");
    return (
        <div className="search">
            <ion-icon name="search-circle-outline"/>
            <input type="text" className="search__input" placeholder="Search" value={searchText}
                   onChange={e => setSearchText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && filterData(searchText.toLowerCase())}/>
        </div>
    )
};


export default Search;