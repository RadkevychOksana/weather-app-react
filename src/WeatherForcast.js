import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css"
import axios from "axios";

export default function WeatherForcast(props) {
    function handleResponse(response){
        console.log(props.coord);
    }
    let apiKey = "149e1223e69e53cd644a15607bc75a82";
    let lat = props.coord.lon;
    let lon = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForcast">
      <div className="row">
        <div className="col">
          <div className="WeatherForcast-day">Thu</div>
          <WeatherIcon code="01d" size="36"/>
          <div className="WeatherForcast-temp">
            <span className="WeatherForcast-temp-max">20°</span>
            <span className="WeatherForcast-temp-min">19°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
