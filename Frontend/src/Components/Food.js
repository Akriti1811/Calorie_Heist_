import React, {useEffect,useState} from 'react';
import axios from 'axios';

export default function Food(){
    const [data,setdata]=useState();
    useEffect(()=>{
        const apiUrl="/nutrition?query=3lb carrots and a chicken sandwich";
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
            console.log(data);
        });

    },[]);
    return(
        <div className="cards">
            {/* {
                data.map(element,index)=>(
                    <div className="food-item-card">

                    </div>
                )
            } */}
        </div>
    );

}