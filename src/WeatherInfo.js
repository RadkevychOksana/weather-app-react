import React from "react";
import FormattedData from "./FormattedData";

export default function WeatherInfo(props){
  return (
    <div className = "WeatherInfo">
               <div className="overview">
              <h1 id="city" className="fs-1 fw-bold text-info">
                {props.data.city}
              </h1>
              <ul>
                <li>
                  Last updated:{" "}
                  <span>
                    <FormattedData date={props.data.date} />
                  </span>
                </li>
                <li className="text-capitalize">{props.data.description}</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <img
                    src={props.data.iconUrl}
                    alt="Clear"
                    className="float-left"
                  />
                  <div className="float-left">
                    <strong id="temperature">{props.data.temp}</strong>
                    <span className="units"> °C</span>
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