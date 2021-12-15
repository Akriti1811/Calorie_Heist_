import React from 'react'
import './signup.css'
export default function SignUp() {
    return (
      <div class="signup row">
       
        <div className="col-md-6 py-5" >
            <h2 className="text-center py-4">SIGNUP</h2>
            <div className="col-md-6 col-12 form-inner pb-5 mx-auto">
            
            <form action="" method="post">
    
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
                  </div>
                </div>
            </form>
            <br/>
    
          </div>
        </div>
      </div>
    
    )
}
