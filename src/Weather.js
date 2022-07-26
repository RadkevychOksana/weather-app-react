import React from "react";
//import axios from "axios";
//import { Grid } from  'react-loader-spinner';

export default function Weather(props){
    return(
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
                    className="btn btn-success w-100"
                  />
                </div>
              </div>
            </form>
            <div className="overview">
              <h1 id="city" className="fs-1 fw-bold text-success">
                London
              </h1>
              <ul>
                <li>
                  Last updated: <span id="date">Tuesday 10:00</span>
                </li>
                <li id="description">Clear</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <img
                    src="https://st.depositphotos.com/1007168/1249/i/600/depositphotos_12492703-stock-photo-summer-hot-sun.jpg"
                    alt="Clear"
                    id="icon"
                    className="float-left"
                  />
                  <div className="float-left">
                    <strong id="temperature">25</strong>
                    <span className="units"> °C</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity: <span id="humidity">80 </span>%
                  </li>
                  <li>
                    Wind: <span id="wind"></span> 10 m/h
                  </li>
                </ul>
              </div>
            </div>
            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
    );
}