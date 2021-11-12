import React from 'react';
import "./Trendingfour.css";

function Trendingfour() {
    return (
        <div>
             <div className="containertr">
        <div className="cardtr">
            <div className="contenttr">
            <img className="trending" src="/images/Baby.jpg" />
                <a href="">Baby Shoot</a>
            </div>
        </div>

        <div className="cardtr">
            <div className="contenttr">
            <img className="trending" src="/images/Prewedding.jpg" />
                <a href="">Prewedding</a>
            </div>
        </div>

        <div className="cardtr">
            <div className="contenttr">
            <img className="trending" src="/images/Bday.jpg" />
                <a href="">Birthday</a>
            </div>
        </div>

        <div className="cardtr">
            <div className="contenttr">
            <img className="trending" src="/images/Event.jpg" />
                <a href="">Event</a>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Trendingfour
