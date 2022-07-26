import React from "react";
import axios from "axios";
import { Grid } from  'react-loader-spinner';

export default function Weather(props){
    function showTemp(response){
        let string = `The temperature in ${response.data.name} is ${Math.round(response.data.main.temp)}`;
        return string;
    }
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios(apiUrl).then(showTemp);

    return( 
    <div>
       
        <h1>Herzlich Willkommen in React!</h1><Grid
        height = "80"
        width = "80"
        color = '#61dafb'
      /> 
    </div>
  );  
}