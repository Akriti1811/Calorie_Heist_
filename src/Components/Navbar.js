import React from 'react'

export default function Navbar() {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            
            <a className="navbar-brand" href="/"> Fit Express</a>
            
            <ul className="nav justify-content-end">
                
                <li className="nav-item-1">
                <a className="nav-link btn-outline-warning" href="/">Login</a>
                </li>
                
                <li className="nav-item-1">
                <a className="nav-link btn-outline-warning" href="/">SignUp</a>
                </li>

            </ul>
            </div>
        </nav>
        <ul className="nav nav-pills justify-content-center m-3">

            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">About</a>
            </li>

            <li className="nav-item">
            <a className="nav-link" href="/">Food</a>
            </li>

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
