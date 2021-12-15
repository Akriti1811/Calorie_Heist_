import React from 'react'
import './signup.css'
export default function Login() {
  
    return (
      <div class="signup row">       
        <div className="col-md-6 py-5" >
            <h2 className="text-center py-4">LOGIN</h2>
            <div className="col-md-6 col-12 form-inner pb-5 mx-auto">
            
            <form action="" method="post">
    
                <div className="mb-3">
                  <input required type="text" className="form-control py-2" placeholder="E-mail Address" name="Email" value="Email"/>
                </div>
    
                <div className="mb-3">
                  <input required type="text" className="form-control py-2" placeholder="Password" name="Password" value="Password"/>
                </div>
              
                <div className="row">
                  <div>
                    <button type="submit" className="btn btn-primary col-md-2">Login</button>
                  </div>
                </div>
            </form>
            <br/>
    
          </div>
        </div>
    </div>
    
    )
}
