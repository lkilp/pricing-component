import React from 'react';
import './Billing.scss'

const Billing = () => {
    return(
        <div className="Billing">
            <div>Monthly Billing</div>
            <div className="toggle normal">
                <input id="normal" type="checkbox"  ></input>
                <label className="toggle-item" htmlFor="normal"></label>
            </div> 
            <div className="yearly">Yearly Billing</div>
            <div className="desktop-discount">25% discount</div>
            <div className="mobile-discount">-25%</div>
        </div>
    )
}
export default Billing;