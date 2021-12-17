<<<<<<< HEAD
import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

import { auth } from '../firebase'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router';





=======
import React from 'react'
import './signup.css'
>>>>>>> f619488c5449af0a09bc4af18cdc6a7d98968a12
export default function SignUp() {
  
 const history = useHistory();

  let {user }= useSelector((state) => ({ ...state}));
  if(user)
  history.push("/");

  const [email,setEmail] = useState("");


   const  onSubmitUser = async (event) =>{
    event.preventDefault();
    console.log(email);
  

    const config = {
      url:'http://localhost:3000/register/complete',
      handleCodeInApp:true
    }

    await auth.sendSignInLinkToEmail(email,config);
    toast(`Email send to ${email}`);
    window.localStorage.setItem('emailForReg',email);
    setEmail("");  
  }

    return (
<<<<<<< HEAD
    <div class="mt-3 pt-3">
      
        <div class=" py-5" >
            <h2 class="text-center py-4">SignUp</h2>
            <div class="col-md-4 col-12 form-inner pb-5 px-5 mx-auto">
=======
      <div class="signup row">
       
        <div className="col-md-6 py-5" >
            <h2 className="text-center py-4">SIGNUP</h2>
            <div className="col-md-6 col-12 form-inner pb-5 mx-auto">
>>>>>>> f619488c5449af0a09bc4af18cdc6a7d98968a12
            
            <form action="" method="post" onSubmit={onSubmitUser}>
    
<<<<<<< HEAD
                <div class="mb-3">
                  <input required type="text" class="form-control py-2" placeholder="E-mail Address" name="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
    
             
                <div class="row">
                  <div>
                    <button type="submit" class="btn btn-primary col-md-2">Login</button>
=======
                <div className="mb-3">
                <input required type="text" className="form-control py-2" placeholder="Name" name="Name" value="Name"/>
                </div>
            
                <div className="mb-3">
                <input required type="text" className="form-control py-2" placeholder="E-mail Address" name="Email" value="Email"/>
                </div>

                <div className="mb-3">
                <input required type="text" className="form-control py-2" placeholder="Password" name="Password" value="Password"/>
                </div>

                <div className="row">
                  <div>
                    <button type="submit" className="btn btn-primary col-md-3">Signup</button>
>>>>>>> f619488c5449af0a09bc4af18cdc6a7d98968a12
                  </div>
                </div>
            </form>
            <br/>
    
          </div>
        </div>
      </div>
    
    )
}
