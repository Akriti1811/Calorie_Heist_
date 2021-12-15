import React, {useEffect,useState} from 'react';


export default function BMIcal() {
  const [Height,sethv] = useState()
  const [weight,sethw] = useState()
  const [bmi,setbmi] = useState();
  let Underweight="Underweight =<18.5 "; 
  let normal = "Normal weight = 18.5–24.9 ";
  let overweight = "Overweight = 25–29.9";
  let Obesity = "BMI of 30 or greater";

  const calculate=()=>{
    console.log(Height,weight)
    let val = null
    if(Height>0 && weight>0){
      // Height/=10;
      val=(weight*10000/(Height*Height)).toFixed(2);
    }
       
    setbmi(val);

  }
    return (
        <div className="mt-3 pt-3">
        <div className=" py-5" >
            <h2 className="text-center py-4">BMI Calculator</h2>
            <div className="col-md-4 col-12 form-inner pb-5 px-5 mx-auto">
            
            {/* <form action=""> */}
    
                <div className="col-12 mb-3">
                    <label for="inputEmail4" className="form-label">Height (cm)</label>
                    <input 
                    onChange={(e)=> sethv(e.target.value)}
                     className="form-control" id="inputEmail4"/>
                </div>

                <div className="col-12 mb-3">
                    <label for="inputPassword4" className="form-label">Weight (kg)</label>
                    <input 
                     onChange={(e)=> sethw(e.target.value)}
                     className="form-control" id="inputPassword4"/>
                </div>
              
                <div className="row">
                  <div>
                    <button type="submit" className="btn btn-primary col-md-3"
                    onClick={()=> calculate()}
                    >Calculate</button>
                  </div>
                  {bmi? <h1>{bmi}</h1> : null
                  }
                </div>
                
            {/* </form> */}
            <br/>
    
          </div>
          <div className="col-md-4 col-12 form-inner pb-5 px-5 mx-auto">
            <h4>BMI Catogories</h4>
            <h6>{Underweight}</h6>
            <h6>{normal}</h6>
            <h6>{overweight}</h6>
            <h6>{Obesity}</h6>

          </div>
        </div>
        


      


    </div>
    
       
    )
}
