import React from 'react';


import './InitApp.scss'

const InitApp = ({fetchData, smallDataURL, bigDataURL}) => {
    return (
        <div className="init-app">
                <div className="init-app__buttons">
                    <button className="init-app__buttons--white" onClick={() => fetchData(smallDataURL)}>32 elements</button>
                    <button className="init-app__buttons--black" onClick={() => fetchData(bigDataURL)}>1000 elements</button>
                </div>
        </div>
    )
};


export default InitApp;