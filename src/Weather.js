import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedData";
//import { Grid } from  'react-loader-spinner';
import "bootstrap/dist/css/bootstrap.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showTemp(response) {
    setWeatherData({
      ready: true,
      temp: Math.round(response.data.main.temp),
      city: response.data.name,
      windSpeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl:
        "https://st.depositphotos.com/1007168/1249/i/600/depositphotos_12492703-stock-photo-summer-hot-sun.jpg",
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      pressure: response.data.main.pressure,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app shadow p-3 mb-5 bg-body rounded">
            <form id="search-form" className="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city.."
                    className="form-control"
                    id="city-input"
                    autocomplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-info w-100 text-white"
                  />
                </div>
              </div>
            </form>
            <div className="overview">
              <h1 id="city" className="fs-1 fw-bold text-info">
                {weatherData.city}
              </h1>
              <ul>
                <li>
                  Last updated:{" "}
                  <span>
                    <FormattedDate date={weatherData.date} />
                  </span>
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <img
                    src={weatherData.iconUrl}
                    alt="Clear"
                    className="float-left"
                  />
                  <div className="float-left">
                    <strong id="temperature">{weatherData.temp}</strong>
                    <span className="units"> °C</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Pressure: <span>{weatherData.pressure}</span>
                  </li>
                  <li>
                    Humidity: <span> {weatherData.humidity} </span>%
                  </li>
                  <li>
                    Wind: <span></span> {Math.round(weatherData.windSpeed)} m/h
                  </li>
                </ul>
              </div>
            </div>
            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "149e1223e69e53cd644a15607bc75a82";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios(apiUrl).then(showTemp);
    return "loading...";
  }
}
