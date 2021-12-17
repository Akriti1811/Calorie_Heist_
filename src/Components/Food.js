import React, {useEffect,useState} from 'react';
import axios from 'axios';
import FoodDetails from './FoodDetails';
import FooditemCard from './FooditemCard';
import './Food.css';
export default function Food(){
    let query = '3lb carrots and a chicken sandwich and fries';
    const [data,setdata]=useState();
    const [qry,setqry] = useState(query);
    let vegies=['Carrot','Corn','Potato','Sweet Potato']
    let beverages=[];
    let fruits=['Apple','Banana','Grapes','Orange','Pear','Pineapple (1 cup)','Raspberries (1 cup)','Strawberries (1 cup)','Watermelon (1 cup)'];
    let milk=['Low fat (2%) milk,Skim milk (1 cup),Yogurt (fruit-flavored, low fat) (1 cup)'];
    let Beans=['Black eye peas','Garbanzo beans (chick peas)','Pinto beans','Refried beans','White beans']
    // let query = '3lb carrots and a chicken sandwich and fries' + vegies.join(" ") + fruits.join(" ")// + milk.join(" ") + Beans.join(" ");
    console.log(query);
    useEffect(()=>{
        const apiUrl=`/nutrition?query=${qry}`;
        axios({
            method: 'GET',
            url: apiUrl,
            mode: 'cors',
            headers: {
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
    const dataHandler = ()=>{
        const apiUrl=`/nutrition?query=${qry}`;
        axios({
            method: 'GET',
            url: apiUrl,
            mode: 'cors',
            headers: {
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
    }
    console.log(data);
    let loader=<div className="loader">Loading...</div>
    return data ? (
        <div className="section">
            <div className="app col-12 mb-3">
                <input type="text" 
                className="form-control" id="inputEmail4"
                onChange={event=> setqry(event.target.value)}
                placeholder="What did you eat Today?"/>

             </div>
             <div className="app">
             <button className="btn btn-primary col-md"
               onClick={()=>dataHandler()}>Search</button>
             </div>
             
            <div className="cards">
            {
                data && data.map((element,index)=>(
                    
                    <div className="food-item-card">
                        <FooditemCard
                        name={element['name']}
                        cal={element['calories']}
                        carbs={element['carbohydrates_total_g']}
                        colestrol={element['cholesterol_mg']}
                        protein={element['protein_g']}
                        sugar={element['sugar_g']}
                        fat={element['fat_total_g']}
                        />
                        
                    </div>
                ))
            }
        </div>
        </div>
    ): loader;

}