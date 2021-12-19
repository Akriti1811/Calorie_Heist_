import React from 'react'
import './Profile.css'
export default function profile() {
    return (        
        <div className=" profile row">
        <div class="col-md-6"></div>
        <div className="col-md-6 py-4" >
        <h2 className="text-center">MY PROFILE</h2>
        <div className="col-md-6 col-12 form-inner pb-5 mx-auto">
            <form action="" method="post">
                <div className="mb-2">
                    <label for="Name" className="form-label">Name</label>
                    <input required type="text" className="form-control" name="Name" />  
                </div>
                <div className="mb-2 ">
                    <label for="Email" className="form-label">E-mail Address</label>
                    <input required type="text" className="form-control"  name="Email"/>
                </div>
                
                <div className="mb-2">
                    <label for="About" className="form-label">About</label>
                    <input type="text" className="form-control"name="About"/>
                </div>

                <div className="mb-2">
                    <label for="Bio" className="form-label">Bio</label>
                    <input type="text" className="form-control"name="Bio"/>
                </div>

                <div className="mb-2">
                    <label for="DOB" className="form-label">DOB</label>
                    <input type="text" className="form-control"name="DOB"/>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-2">
                        <label for="Height" className="form-label">Height</label>
                        <input required type="text" className="form-control"  name="Height"/>
                    </div>

                    <div className="col-md-6 mb-2">
                        <label for="Weihgt" className="form-label">Weight</label>
                        <input required type="text" className="form-control"  name="Weight"/>
                    </div>
                </div>
                <div className="mb-2">
                    <label for="Goal" className="form-label">Goal</label>
                    <input type="text" className="form-control"name="Goal"/>
                </div>
        
                <div className="row">           
                    <div className="col-md-2">
                    <button type="reset" className=" btn btn-primary">Edit</button>
                    </div>
                    <div  className="col-md-6">
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                </div>
         
            </form>
        </div>
        </div>
        </div> 
    )
}
