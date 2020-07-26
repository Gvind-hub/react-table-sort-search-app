import React from 'react';


import loader from '../../assets/img/loader.svg'
import './Loader.scss'

const Loader = () => {
    return (
        <div className="loader">
            <img className="loader__img" src={loader} alt="Loading..."/>
        </div>
    )
};


export default Loader;