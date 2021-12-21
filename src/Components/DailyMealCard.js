import React from 'react'
import './FooditemCard.css'
export default function DailyMealCard(props) {

   
    return(
        <section>
		<div className="container">
			<div className="card">
				<div className="content">
                <h4 className="card-title pb-2">25 DECEMBER, 2021</h4>
                    
                   
					<div className="contentBx">
						<h3>{props.name}</h3>
						<p>{props.cal}<span> Calories</span></p>
                        <p>{props.cal}<span> Calories</span></p>
                        <p>{props.cal}<span> Calories</span></p>
                        <p>{props.cal}<span> Calories</span></p>
					</div>
				</div>
			
			</div>
		</div>
        </section>
    )


}