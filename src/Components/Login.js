import React from 'react'

export default function Login() {
    return (
    <div class="mt-3 pt-3">
        <div class=" py-5" >
            <h2 class="text-center py-4">LOGIN</h2>
            <div class="col-md-4 col-12 form-inner pb-5 px-5 mx-auto">
            
            <form action="" method="post">
    
                <div class="mb-3">
                  <input required type="text" class="form-control py-2" placeholder="E-mail Address" name="Email" value="Email"/>
                </div>
    
                <div class="mb-3">
                  <input required type="text" class="form-control py-2" placeholder="Password" name="Password" value="Password"/>
                </div>
              
                <div class="row">
                  <div>
                    <button type="submit" class="btn btn-primary col-md-2">Login</button>
                  </div>
                </div>
            </form>
            <br/>
    
          </div>
        </div>
    </div>
    
    )
}
