import React from 'react';


import './PersonalInfo.scss'

const PersonalInfo = ({user}) => {
    return (
        <div className="personal-info">
            <div className="personal-info__inner">
                <h3 className="personal-info__title">User Details</h3>
                <div className="personal-info__elem">
                    <p className="personal-info__name">{`User selected: ${user.firstName} ${user.lastName}`}</p>
                </div>
                {user.description && <div className="personal-info__description">
                    <div className="personal-info__elem">
                        <p className="personal-info__description-title">Description:</p>
                        <textarea className="personal-info__description-elem" value={user.description} readOnly/>
                    </div>
                    <div className="personal-info__elem">
                        <p className="personal-info__address">{`Address: ${user.address.streetAddress}`}</p>
                    </div>
                    <div className="personal-info__elem">
                        <p className="personal-info__city">{`City: ${user.address.city}`}</p>
                    </div>
                    <div className="personal-info__elem">
                        <p className="personal-info__state">{`Province/State: ${user.address.state}`}</p>
                    </div>
                    <div className="personal-info__elem">
                        <p className="personal-info__zip">{`ZIP Code: ${user.address.zip}`}</p>
                    </div>
                </div>}
            </div>
        </div>
    )
};


export default PersonalInfo;