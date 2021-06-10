import React, { useState } from 'react';
import './Pricing.scss';

const Pricing = () => {
    const min = 0;
    const max = 4;
    const [value, setValue] = useState(2);

    const pairs = [
        { 
            views: '10K',
            price: 8,
        },
        {
            views: '50K',
            price: 12,
        },
        {
            views: '100K',
            price: 16,    
        },
        {
            views: '500K',
            price: 24,
        },
        {
            views: '1M',
            price: 36,
        } 
    ]

    const percentage = (value-min)/(max-min)*100;
    const style = {
        background: `linear-gradient(to right, var(--soft-cyan-full-slider-bar) ${percentage}%, var(--light-grayish-blue-empty-slider-bar) ${percentage}%)`,
    };
    return(
        <div className="Pricing">
            <div className="pageviews">${pairs[value].views} PAGEVIEWS</div>
            <div className="rate">
                <div className="price">${pairs[value].price}</div>
                <div>/ month</div>
            </div>
            <div className="slidercontainer">
                <input id="myinput" type="range"
                    style={style}
                    min={min} max={max} value={value} onInput={(e) => setValue(e.target.value)} 
                    className="slider"></input>
            </div>
        </div>
    )
}
export default Pricing;
