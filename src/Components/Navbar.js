import React from 'react'
import {Link} from "react-router-dom";
import './Navbar.css'
export default function Navbar() {
    return (
    <div>
        <nav className="nav1 navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
            <Link to='/' className="navbar-brand " style={{color: "white"}}>
                    <i>Fit Express</i>
            </Link>
           
            
            <ul className="nav justify-content-end">
                <Link to='/login' className="anchors">
                    <li className="nav-item-1 nav-link btn-outline-warning" style={{color: "yellow"}}>Login/SignUp</li>
                </Link>

                {/* <Link to='/login'className="anchors">
                    <li className="nav-item-1 nav-link btn-outline-warning" style={{color: "yellow"}}>SignUp</li>
                </Link> */}
            </ul>
            </div>
        </nav>
        <ul className="nav justify-content-center m-3">

           
            <Link to='/' className="nav-link active" aria-current="page">
            <li className="nav-item" style={{color: "brown"}}>Home</li>
            </Link>           

            <Link to='/food' className="anchors">
            <li className="nav-item nav-link" style={{color: "brown"}}>Food</li>
            </Link>
            
            <Link to='/bmical'>
            <li className="nav-item nav-link" style={{color: "brown"}} >BMI Calculator</li>
            </Link>

            <li className="nav-item nav-link" style={{color: "brown"}} >Blog</li>       

        </ul>
    </div>
    )
}
