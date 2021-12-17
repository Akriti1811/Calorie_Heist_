import React from 'react'
import {Link} from "react-router-dom";
import {auth} from '../firebase';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './Navbar.css'
export default function Navbar() {
   

    let history = useHistory();
    let dispatch = useDispatch();
    const logOutHandler = () =>{
            auth.signOut();
            dispatch({
                type:"LOGOUT",
                payload:null
            })
            history.push("/login");

    }
    let {user }= useSelector((state) => ({ ...state}));
    console.log(user,'user');
    return (

        <div>
        <nav className="nav1 navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
            <Link to='/' className="navbar-brand " style={{color: "white"}}>
                    <i>Fit Express</i>
            </Link>
           
            
            <ul className="nav justify-content-end">
                {!user && <Link to='/login' className="anchors">
                    <li className="nav-item-1 nav-link btn-outline-warning" style={{color: "yellow"}}>Login</li>
                </Link>}

               {!user &&  <Link to='/signup'className="anchors">
                    <li className="nav-item-1 nav-link btn-outline-warning" style={{color: "yellow"}}>SignUp</li>
                </Link>}

                {user && (<button className="nav-item-1 nav-link btn-outline-warning" onClick={logOutHandler}>LogOut</button>)}
            </ul>
            </div>
        </nav>
        <ul className="nav justify-content-center m-1">

           
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


