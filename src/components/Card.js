import React from 'react';
import Billing from './Billing';
import './Card.scss';
import Pricing from './Pricing';
import Trial from './Trial';

const Card = () => {
    return(
        <div className="Card">
            <Pricing />
            <Billing />
            <Trial />
        </div>
    )
}
export default Card;