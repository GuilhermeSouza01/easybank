import React from 'react';
import './main-title.css';

const MainTitle = ({title}) => {
    return (
        <div className="main-title">
            <h2 className="title">
            {title}
            </h2>
        </div>
    )
}

export default MainTitle
