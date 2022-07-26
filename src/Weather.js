import React from "react";
import axios from "axios";
import { Grid } from  'react-loader-spinner';

export default function Weather(props){
    function showTemp(response){
        alert(`The temperature is ${response.data.main.temp}`);
    }
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios(apiUrl).then(showTemp);

    return( 
    <div>
        <h1>Herzlich Willkommen in React!</h1>
    </div>
  );  
}