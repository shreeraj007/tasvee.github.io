import React from 'react';
import "./Footer.css";
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom";
    import Aboutus from './Aboutus';

function Footer() {
    return (
        <div>
             <div className="footer"> 
        <section className="description"> 
            <div className="mainmod"> 
               <div className="comname"> <h2>TASVEE</h2></div> 
                <div className="one"> 
                    <h3 className="foot_head">Legal</h3> 
                    <ul className="foot_link"> 
                        <li><a href="">Pricing</a></li> 
                        <li><a href="">Features</a></li> 
                        <li><a href="">Documentation</a></li> 
                        <li><Link to="/privacy">Privacy Policy</Link></li> 
                    </ul> 
                </div> 
                <div className="two"> 
                    <h3 className="foot_head">Company</h3> 
                    <ul className="foot_link"> 
                        <li><Link to="">Mission</Link></li> 
                        <li><Link to="/aboutus">About Us</Link></li> 
                        <li><Link to="">Management</Link></li> 
                        <li><Link to="">Contact us</Link></li> 
                    </ul> 
                </div> 
                {/* <div className="three"> 
                    <h3 className="foot_head">Contact</h3> 
                    <ul className="foot_link"> 
                        <li className="mail"><a href="">officialtasvee@gmail.com</a></li> 
                        <li className="phone"><a href="">+91 9284924660</a></li> 
                        <li className="twitter"><a href="">@tasvee2</a></li> 
                        <li className="facebook"><a href="">tasvee</a></li> 
                    </ul> 
                </div>  */}
                <div className="four"> 
                    <h3 className="foot_head">What's TASVEE</h3> 
                    <p>TASVEE is a platform where anyone from individuals to firms can find a perfect photohraphers
                        for them according to the their requirements.</p> 
                    <ul  className="foot_link"> 
                        <li>Tasvee pvt ltd</li> 
                        <li>405, Moze Heights Lohegaon Tal. Haveli, Pune- 411047</li> 
                    </ul> 
                </div>  
            </div> 
        </section> 
        {/* <div id="signature" aria-hidden="true"></div>  */}
        {/* <footer id="legal"> 
            <p>&copy; 3000 by Company. All rights reserved. Please read the <a href="">Privacy Policy</a> and <a href="">Terms of Service</a>.</p> 
        </footer>  */}
    </div> 
        </div>
    )
}

export default Footer
