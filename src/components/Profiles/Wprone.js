import React from 'react';
import Photogallery from '../Profiles/Photogallery';
import "./Wprone.css";
import { Link } from "react-router-dom";

import LocationOnIcon from '@material-ui/icons/LocationOn';
import CameraAltIcon from '@material-ui/icons/CameraAlt';




function Wprone() {
    return (
        <div>
           <div className="photographerprofile-glass">
               <img className="photographer-profile" src="/images/profile9.jpg" alt=""></img>
               <h2 className="photographer-name">Vijay Desai </h2>
               <div className= "photographer-profilebtn">
                <Link to="/login"><button class="contact-btn" type="button">Contact Us</button></Link>
                <Link to="/login"><button class="contact-btn" type="button">Book Now</button></Link>
            </div>

            <div className="about-photographer">
                <h2>White Knight Studios</h2>
                <h4>welcome to my world of photography,I have been shooting since last 6 years <br/>
                and I have worked with some of the top brands in the Industry.  </h4>
                <LocationOnIcon /> <h4>Shop No:7,3rd floor,Nucleus Tower, Senapati Bapat Road- Pune Maharashtra</h4>
                <CameraAltIcon /> <h4>Canon EOS 6D, Sony a7III</h4>
            </div>
           </div>

           <Photogallery />
        </div>
    )
}

export default Wprone;
