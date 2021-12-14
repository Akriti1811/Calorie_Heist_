import React from 'react'

export default function FoodDetails(props) {
    return (
        <div class="col-md-7">
                <div class="card-body">
                    <h5 class="card-title px-3">{props.name}</h5>
                    <p class="card-text px-3">Quantiy</p>

                    <div class="detail-card px-2 py-2">
                        <div class="d-flex flex-wrap">                
                            <div class="col-md-4 col-12 px-2">
                               <h6>Calories</h6>
                               <p>{props.cal}</p>
                            </div>  

                            <div class="col-md-4 col-12 px-2">
                               <h6>Carbohydrates</h6>
                               <p>{props.carbs}</p>
                            </div>

                            <div class="col-md-4 col-12 px-2">
                               <h6>Cholesterol</h6>
                               <p>{props.colestrol}</p>
                            </div>

                            <div class="col-md-4 col-12 px-2">
                               <h6>Sugar</h6>
                               <p>{props.sugar}</p>
                            </div>

                            <div class="col-md-4 col-12 px-2">
                               <h6>Fat</h6>
                               <p>{props.fat}</p>
                            </div>
                  
                            <div class="col-md-4 col-12 px-2">
                               <h6>Protein</h6>
                               <p>{props.protein}</p>
                            </div>
                            
                        </div> 
                    </div>

                    
                </div>
            </div>
    )
}
