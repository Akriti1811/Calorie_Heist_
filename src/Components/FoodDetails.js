import React from 'react'

export default function FoodDetails() {
    return (
        <div class="col-md-7">
                <div class="card-body">
                    <h5 class="card-title px-3">FoodName</h5>
                    <p class="card-text px-3">Quantiy</p>

                    <div class="detail-card px-2 py-2">
                        <div class="d-flex flex-wrap">                
                            <div class="col-md-4 col-12 px-2">
                               <h6>Calories</h6>
                               <p>100</p>
                            </div>  

                            <div class="col-md-4 col-12 px-2">
                               <h6>Carbohydrates</h6>
                               <p>100</p>
                            </div>

                            <div class="col-md-4 col-12 px-2">
                               <h6>Cholesterol</h6>
                               <p>100</p>
                            </div>

                            <div class="col-md-4 col-12 px-2">
                               <h6>Sugar</h6>
                               <p>100</p>
                            </div>

                            <div class="col-md-4 col-12 px-2">
                               <h6>Fat</h6>
                               <p>100</p>
                            </div>
                  
                            <div class="col-md-4 col-12 px-2">
                               <h6>Protein</h6>
                               <p>100</p>
                            </div>
                            
                        </div> 
                    </div>

                    
                </div>
            </div>
    )
}
