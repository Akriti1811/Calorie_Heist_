import React from "react";
import './Footer.css'



const Footer = () =>{


    return(
        <div className="div-background row">
            
                <div className="col-3">
                     <h1 className="h1-class">Company</h1>
                     <ul>
                         <li>About</li>
                         <li>Blog</li>
                         <li>Contact Us</li>
                     </ul>
            </div>
            <div className="col-4">
            <h1 className="h1-class">Tool</h1>
                     <ul>
                         <li>BMI Calculator</li>
                         
                     </ul>
            </div>
            <div className="col-3">
            <h1 className="h1-class">Become A Member</h1>
                     <ul>
                         <li>Login</li>
                         <li>Signup</li>
                        
                     </ul>
            </div>
            <h3 style={{textAlign:'center'}}>Made with ❤️ by Akriti, Manish and Piyush</h3>
        </div>
    )
}
export default Footer;