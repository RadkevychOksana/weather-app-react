import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city,setCity] = useState(props.defaultCity);
  function showTemp(response) {
    setWeatherData({
      ready: true,
      temp: Math.round(response.data.main.temp),
      city: response.data.name,
      windSpeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon:response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      pressure: response.data.main.pressure,
    });
  }

  function search(){
    let apiKey = "149e1223e69e53cd644a15607bc75a82";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios(apiUrl).then(showTemp);
  }
function handleSubmit(event){
  event.preventDefault();
  search();

}

function handleCityChange(event){
  event.preventDefault();
setCity(event.target.value);
}

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app shadow p-3 mb-5 bg-body rounded">
            <form onSubmit={handleSubmit} className="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city.."
                    className="form-control text-secondary"
                    id="city-input"
                    autocomplete="off"
                    onChange={handleCityChange}
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
            <WeatherInfo data={weatherData}/>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
