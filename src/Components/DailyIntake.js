import React from 'react'
import DailyMealCard from './DailyMealCard'
import './Food.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

export default function DailyIntake() {


    const history = useHistory();
    console.log("Daily intake");

  const user = localStorage.getItem('user');
  if(!user)
  history.push("/");


    const drink=[1,2,3,4,5];
    return (
        <div className="row">
    

        {
                    drink && drink.map((element)=>(
                        <div className="food-item-card col-4">
                            <DailyMealCard />
                        </div>
                    ))
        }
      
        </div>
    )
}
