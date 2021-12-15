import React from 'react'
import {Link} from "react-router-dom";
import './Navbar.css'
export default function Navbar() {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <Link to='/' className="navbar-brand ">
                    Fit Express
            </Link>
            {/* <a className="navbar-brand" href="/"> </a> */}
            
            <ul className="nav justify-content-end">
                <Link to='/login' className="anchors">
                    <li className="nav-item-1 nav-link btn-outline-warning">Login</li>
                </Link>
                <Link to='/login'className="anchors">
                    <li className="nav-item-1 nav-link btn-outline-warning">SignUp</li>
                </Link>
            </ul>
            </div>
        </nav>
        <ul className="nav justify-content-center m-3">

            <li className="nav-item">
            <Link to='/' className="nav-link active" aria-current="page">
                Home
            </Link>
            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
            </li>
            <Link to='/food' className="anchors">
            <li className="nav-item nav-link">Food
            {/* <a className="nav-link" href="/">Food</a> */}
            </li>
            </Link>
            
            <Link to='/bmical'>
            <li className="nav-item">
            <a className="nav-link" href="/">BMI Calculator</a>
            </li>
            </Link>

            <li className="nav-item">
            <a className="nav-link" href="/">Blog</a>
            </li>       

        </ul>
    </div>
    )
}
