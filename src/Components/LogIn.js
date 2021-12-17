import React, { useState} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

import { auth } from '../firebase'
import { toast } from 'react-toastify'
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router';


const createOrUpdateBackend = async (authToken) =>{

  return await axios.post('http://localhost:3001/api/create-user',{},{
    headers:{
      authToken:authToken
    },
  })
} 

export default function LogIn() {
  const history = useHistory();

  let {user }= useSelector((state) => ({ ...state}));
  if(user)
  history.push("/");



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let dispatch = useDispatch();
  
 



    const handleLogIn = async (e) =>{
      e.preventDefault();
      console.log(email,password);
      try{
         const result=  await auth.signInWithEmailAndPassword(email,password);
         console.log("Result",result);
         const {user} = result;
         const idTokenResult = await user.getIdTokenResult();
         createOrUpdateBackend(idTokenResult.token).then((res) => console.log("Created")).catch((res) => console.log(res));
        
          dispatch({
          type:"LOGGED_IN_USER",
          payload:{
            email:user.email,
            token:idTokenResult.token,
          }
        })
        history.push("/");


      }catch(err)
      {
        console.log(err,'error');
        toast.error(err.message);
      }

    };
    return (
        <div class="mt-3 pt-3">
        <div class=" py-5" >
            <h2 class="text-center py-4">LOGIN</h2>
            <div class="col-md-4 col-12 form-inner pb-5 px-5 mx-auto">
            
            <div>
    
             
            
                <div class="mb-3">
                <input required type="text" class="form-control py-2" placeholder="E-mail Address" name="Email" onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div class="mb-3">
                <input required type="text" class="form-control py-2" placeholder="Password" name="Password" onChange ={(e) => setPassword(e.target.value)}/>
                </div>

                <div class="row">
                  <div>
                    <button type="submit"  onClick= {handleLogIn}class="btn btn-primary col-md-3">LogIn</button>
                  </div>
                </div>
            </div>
            <br/>
    
          </div>
        </div>
    </div>
    
    )
}
