import React from 'react'

export default function SignUp() {
    return (
        <div class="mt-3 pt-3">
        <div class=" py-5" >
            <h2 class="text-center py-4">SIGNUP</h2>
            <div class="col-md-4 col-12 form-inner pb-5 px-5 mx-auto">
            
            <form action="" method="post">
    
                <div class="mb-3">
                <input required type="text" class="form-control py-2" placeholder="Name" name="Name" value="Name"/>
                </div>
            
                <div class="mb-3">
                <input required type="text" class="form-control py-2" placeholder="E-mail Address" name="Email" value="Email"/>
                </div>

                <div class="mb-3">
                <input required type="text" class="form-control py-2" placeholder="Password" name="Password" value="Password"/>
                </div>

                <div class="row">
                  <div>
                    <button type="submit" class="btn btn-primary col-md-3">Signup</button>
                  </div>
                </div>
            </form>
            <br/>
    
          </div>
        </div>
    </div>
    
    )
}
