import React from 'react'
import "./Aboutus.css";
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom";
    import LinkedInIcon from '@material-ui/icons/LinkedIn';
    import TwitterIcon from '@material-ui/icons/Twitter';
    import InstagramIcon from '@material-ui/icons/Instagram';

function Aboutus() {
    return (
       <>
        <div className="aboutus-glass">
         <img className="culture" src="/images/culture.jpg" alt="image" />
         <h1>About Us</h1>
         <h3>Tasvee is all about photography and photography</h3>
        </div>

    





        <div className="row-container">
            <div className="card-glass">
            <div className="content-user">
            <img className="profile-img" src="/images/user5.jpg" alt="profile" />
            <h3>Shreeraj Mane</h3>
            <h4>App developer</h4>
            <LinkedInIcon className="iconBx" />
                <TwitterIcon className="iconBx"/>
                <InstagramIcon className="iconBx"/>
            </div>
            </div>



            <div className="card-glass">
            <div className="content-user">
            <img className="profile-img" src="/images/user4.png" alt="profile" />
            <h3>Rajat Singh</h3>
            <h4 className="role">UI UX design</h4>
            <LinkedInIcon className="iconBx" />
                <TwitterIcon className="iconBx"/>
                <InstagramIcon className="iconBx"/>
            </div>
            </div>

            <div className="card-glass">
            <div className="content-user">
            <img className="profile-img" src="/images/user1.png" alt="profile"  />
            <h3>Rutika Wadke</h3>
            <h4>App developer</h4>
            <LinkedInIcon className="iconBx" />
                <TwitterIcon className="iconBx"/>
              <Link to="/rutikainsta"> <InstagramIcon className="iconBx"/> </Link> 
            </div>
            </div>

            <div className="card-glass">
            <div className="content-user">
            <img className="profile-img" src="/images/user2.png" alt="profile" />
            <h3>Shweta kamat</h3>
            <h4>App developer</h4>
            <LinkedInIcon className="iconBx" />
                <TwitterIcon className="iconBx"/>
                <InstagramIcon className="iconBx"/>
            </div>
            </div>

            <div className="card-glass">
            <div className="content-user">
            <img className="profile-img" src="/images/user3.png" alt="profile"/>
            <h3>Shubham Kulkarni</h3>
            <h4>Web developer</h4>
            <LinkedInIcon className="iconBx" />
                <TwitterIcon className="iconBx"/>
                <InstagramIcon className="iconBx"/>
            </div>
            </div>
        </div>

        

       </>
    )
}

export default Aboutus;
