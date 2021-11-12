import React from 'react';
import "./Weddcat.css";
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

function Weddcat() {
    return (
        <div>
            <div className="row">
            
            <div className="cardw">
         <Link to="/wprone">
            <div className="contentw">
            <img className="categoryw" src="/images/wed1.jfif" />
           <div className="text-de">
           <h4 >white knight studios</h4>
            <h5>Starting from Rs5000</h5>
            </div> 
            </div>
            </Link>
            </div>

            <div className="cardw">
            <div className="contentw">
            <img className="categoryw" src="/images/wed2.jfif" />
                <a href="">white knight studios </a>
            </div>
            </div>

            <div className="cardw">
            <div className="contentw">
            <img className="categoryw" src="/images/wed3.png" />
                <a href="">white knight studios </a>
            </div>
            </div>

            <div className="cardw">
            <div className="contentw">
            <img className="categoryw" src="/images/wed4.jfif" />
                <a href="">white knight studios </a>
            </div>
            </div>

            <div className="cardw">
            <div className="contentw">
            <img className="categoryw" src="/images/wed5.jfif" />
                <a href="">white knight studios </a>
            </div>
            </div>

            <div className="cardw">
            <div className="contentw">
            <img className="categoryw" src="/images/wed6.jfif" />
                <a href="">white knight studios </a>
            </div>
            </div>

            <div className="cardw">
            <div className="contentw">
            <img className="categoryw" src="/images/vijay.jfif" />
                <a href="">white knight studios </a>
            </div>
            </div>

            <div className="cardw">
            <div className="contentw">
            <img className="categoryw" src="/images/wed8.jfif" />
                <a href="">white knight studios </a>
            </div>
            </div>

            <div className="cardw">
            <div className="contentw">
            <img className="categoryw" src="/images/niv.jfif" />
                <a href="">white knight studios </a>
            </div>
            </div>

            <div className="cardw">
            <div className="contentw">
            <img className="categoryw" src="/images/wed10.jfif" />
                <a href="">white knight studios </a>
            </div>
            </div>

            <div className="cardw">
            <div className="contentw">
            <img className="categoryw" src="/images/wed11.jfif" />
                <a href="">white knight studios </a>
            </div>
            </div>

            <div className="cardw">
            <div className="contentw">
            <img className="categoryw" src="/images/wed12.jfif" />
                <a href="">white knight studios </a>
            </div>
            </div>

            <div className="cardw">
            <div className="contentw">
            <img className="categoryw" src="/images/wed20.jfif" />
                <a href="">white knight studios </a>
            </div>
            </div>

            <div className="cardw">
            <div className="contentw">
            <img className="categoryw" src="/images/wed15.png" />
                <a href="">white knight studios </a>
            </div>
            </div>

            <div className="cardw">
            <div className="contentw">
            <img className="categoryw" src="/images/wed16.jfif" />
                <a href="">white knight studios </a>
            </div>
            </div>

            <div className="cardw">
            <div className="contentw">
            <img className="categoryw" src="/images/wed18.jfif" />
                <a href="">white knight studios </a>
            </div>
            </div>

            <div className="cardw">
            <div className="contentw">
            <img className="categoryw" src="/images/wed19.jfif" />
                <a href="">white knight studios </a>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Weddcat;
