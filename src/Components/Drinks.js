import React, {useEffect,useState} from 'react';
import axios from 'axios';
import FoodDetails from './FoodDetails';
import FooditemCard from './FooditemCard';
import './Food.css';
export default  function Food(){
   
    const [drink, setDrink] = useState([]);
     axios.get("http://localhost:3001/api/drinks").then((res) => {console.log(res.data[0])});
    

   
 // console.log(drink);

    return( 
    <div>

    </div>
    )

}