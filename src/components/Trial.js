import React from 'react';
import './Trial.scss';

const Trial = () => {
    return(
        <div className="Trial">
            <div className="trial-content">
                <div className="left">
                    <ul>
                        <li>Unlimited websites</li>
                        <li>100% data ownership</li>
                        <li>Email reports</li>
                    </ul>
                </div>
                <div className="right">
                    <button className="start-button" >Start my trial</button>
                </div>
            </div>
        </div>
    )
}
export default Trial;