import React from 'react'

export default function BMIcal() {
    return (
        <div className="mt-3 pt-3">
        <div className=" py-5" >
            <h2 className="text-center py-4">BMI Calculator</h2>
            <div className="col-md-4 col-12 form-inner pb-5 px-5 mx-auto">
            
            <form action="" method="post">
    
                <div className="col-12 mb-3">
                    <label for="inputEmail4" className="form-label">Height</label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                </div>

                <div className="col-12 mb-3">
                    <label for="inputPassword4" className="form-label">Weight</label>
                    <input type="password" className="form-control" id="inputPassword4"/>
                </div>
              
                <div className="row">
                  <div>
                    <button type="submit" className="btn btn-primary col-md-3">Calculate</button>
                  </div>
                </div>
                
            </form>
            <br/>
    
          </div>
        </div>

      


    </div>
    
       
    )
}
