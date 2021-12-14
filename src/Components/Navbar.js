import React from 'react'
import {Link} from "react-router-dom";
export default function Navbar() {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            
            <a className="navbar-brand" href="/"> Fit Express</a>
            
            <ul className="nav justify-content-end">
                <Link to='/login'>
                    <li className="nav-item-1 nav-link btn-outline-warning">Login</li>
                </Link>
                <Link to='/login'>
                    <li className="nav-item-1 nav-link btn-outline-warning">SignUp</li>
                </Link>
            </ul>
            </div>
        </nav>
        <ul className="nav justify-content-center m-3">

            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <Link to='/food'>
            <li className="nav-item nav-link">Food
            {/* <a className="nav-link" href="/">Food</a> */}
            </li>
            </Link>
            

            <li className="nav-item">
            <a className="nav-link" href="/">BMI Calculator</a>
            </li>

            <li className="nav-item">
            <a className="nav-link" href="/">Blog</a>
            </li>       

        </ul>
    </div>
    )
}
