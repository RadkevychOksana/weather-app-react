import React from "react";
import FormattedData from "./FormattedData";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props){
  return (
    <div className = "WeatherInfo">
               <div className="overview">
              <h1 id="city" className="fs-1 fw-bold text-info">
                {props.data.city}
              </h1>
              <ul>
                <li>
                    <FormattedData date={props.data.date} />
                </li>
                <li className="text-capitalize">{props.data.description}</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <div className="float-left">
                  <WeatherIcon code={props.data.icon} alt = {props.data.description}/>
                  </div>
                  <div className="float-left">
                    <WeatherTemp celsius={props.data.temp}/>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Pressure: <span>{props.data.pressure}</span>
                  </li>
                  <li>
                    Humidity: <span> {props.data.humidity} </span>%
                  </li>
                  <li>
                    Wind: <span></span> {Math.round(props.data.windSpeed)} m/h
                  </li>
                </ul>
              </div>
            </div>
            <div className="weather-forecast"></div>
    </div>
  );
}