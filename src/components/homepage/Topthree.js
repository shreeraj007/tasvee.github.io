import React from 'react';
import "./Topthree.css";
import { BrowserRouter as Router,
Switch,
Route,
Link} from "react-router-dom";

function Topthree() {
    return (
        <div>
             <div className="containertwo">
        <div className="card">
            <div className="content">
            <Link to="/wedding">
            <img className="mainthree" src="/images/wedding.jpg" alt="wedding"/>
                Wedding </Link>
            </div>
        </div>

        <div className="card">
            <div className="content">
            <Link to="/portrait">
            <img className="mainthree" src="/images/Portrait.jpg" alt="portrait"/>
                Portrait </Link>
            </div>
        </div>

             <div className="card">
            <div className="content">
            <Link to="/product">
            <img className="mainthree" src="/images/Product.png" alt="product"/>
                Product </Link>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Topthree
