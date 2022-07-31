import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css"

export default function WeatherForcast() {
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
