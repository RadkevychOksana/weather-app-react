import React, { useState } from "react";
import "./WeatherForcast.css"
import axios from "axios";
import WeatherForecastDay from"./WeatherForecastDay";

export default function WeatherForcast(props) {
    
    let [loaded, setLoaded] = useState(false);
    let [forecast,setForecast] = useState(null);
    function handleResponse(response){
        console.log(props.coord);
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
if(loaded){
    return (
        <div className="WeatherForcast">
          <div className="row">
            <div className="col">
                <WeatherForecastDay data = {forecast[0]}/>
            </div>
          </div>
        </div>
      );
   
}else{
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let lat = props.coord.lon;
    let lon = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
}
}
