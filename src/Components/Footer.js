import React from "react";
import {Link} from "react-router-dom";
import './Footer.css'

const Footer = () =>{
    return(
        <div className="div-background row">
            
            <div className="col-3">
                     <h1 className="h1-class">Company</h1>
                     <ul>
                     <Link to='/'><li style={{color: "yellow"}}>Home</li></Link>
                     <Link to='/blog'><li style={{color: "yellow"}}>Blog</li></Link>
                     <Link to='/contact'><li style={{color: "yellow"}}>Contact Us</li></Link>
                     </ul>
            </div>
            <div className="col-5">
            <h1 className="h1-class">Tool</h1>
                     <ul>
                     <Link to='/bmical'><li style={{color: "yellow"}}>BMI Calculator</li> </Link>                      
                     </ul>
            </div>
            <div className="col-3">
            <h1 className="h1-class">Become A Member</h1>
                     <ul>
                     <Link to='/login' className="anchors"><li style={{color: "yellow"}}>Login</li></Link>
                     <Link to='/signup'className="anchors"> <li style={{color: "yellow"}}>Signup</li></Link>                     
                     </ul>
            </div>
            <h3 style={{textAlign:'center' ,color: "white"}}>Made with ❤️ by Akriti, Manish and Piyush</h3>
        </div>
    )
}
export default Footer;