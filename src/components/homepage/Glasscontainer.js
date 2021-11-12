import React from 'react';
import "./Glasscontainer.css";
import Topthree from './Topthree';
import Trendingfour from './Trendingfour';

function Glasscontainer() {
    return (
        <div className="glasscntr">
        <h2 className="spothead">Categories In Spotlight</h2>
            <Topthree />
            <h2 className="demandhead">Shoots In Demand</h2>
            <Trendingfour />
        </div>
    )
}

export default Glasscontainer
