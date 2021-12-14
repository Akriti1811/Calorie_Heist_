import React, {useEffect,useState} from 'react';
import axios from 'axios';
import FoodDetails from './FoodDetails';
export default function Food(){
    const [data,setdata]=useState();
    let query = '3lb carrots and a chicken sandwich and fries milk';
    useEffect(()=>{
        const apiUrl=`/nutrition?query=${query}`;
        axios({
            method: 'GET',
            url: apiUrl,
            mode: 'cors',
            headers: {
                // 'Access-Control-Allow-Origin':'*',
        // 'Access-Control-Allow-Origin':'http://localhost:3000',
        'X-Api-Key':'Xrb1NEiAjSZc9yvEQykBNg==8KADYFa4P1NhV92q'},
        },function(error, response, body) {
            // console.log(response.json());
            if(error) return console.error('Request failed:', error);
            else if(response.statusCode != 200) 
            return console.error('Error:', response.statusCode, body.toString('utf8'));
            else console.log(body)
        }).then((response) => {
            console.log(response.data)
            setdata(response.data["items"]);
           
        });

    },[]);
    console.log(data);
    return data ? (
        <div className="cards">
            {
                data && data.map((element,index)=>(
                    
                    <div className="food-item-card">
                        <FoodDetails name={element['name']}
                         cal={element['calories']}
                         carbs={element['carbohydrates_total_g']}
                         colestrol={element['cholesterol_mg']}
                         protein={element['protein_g']}
                         sugar={element['sugar_g']}
                         fat={element['fat_total_g']}
                         />
                        
                        {/* <h1>{element['name']}</h1>
                        <h2>calories: </h2>
                        <p>{element['calories']}</p>
                        <h2>carbohydrates: </h2>
                        <p>{element['carbohydrates_total_g']}g</p>
                        <h2>cholesterol: </h2>
                        <p>{element['cholesterol_mg']}mg</p>
                        <h2>protein: </h2>
                        <p>{element['protein_g']}g</p>
                        <h2>sugar: </h2>
                        <p>{element['sugar_g']}g</p>
                        <h2>fat: </h2>
                        <p>{element['fat_total_g']}g</p> */}
                    </div>
                ))
            }
        </div>
    ): null;

}