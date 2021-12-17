import React from 'react'
import {Link} from "react-router-dom";
import {auth} from '../firebase';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            
            <a className="navbar-brand" href="/"> Fit Express</a>
            
            <ul className="nav justify-content-end">
                {!user && (<Link to='/login'>
                    <li className="nav-item-1 nav-link btn-outline-warning">Login</li>
                </Link>)}
                {!user && (<Link to='/signup'>
                    <li className="nav-item-1 nav-link btn-outline-warning">SignUp</li>
                </Link>)}

                
               {user && (<button className="nav-item-1 nav-link btn-outline-warning" onClick={logOutHandler}>LogOut</button>)}
               
            </ul>
            </div>
        </nav>
        <ul className="nav nav-pills justify-content-center m-3">

            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">About</a>
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
