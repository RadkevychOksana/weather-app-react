import React, { useState } from "react";

export default function WeatherTemp(props){
    const[unit, setUnit] = useState("celsius");
    function convertToFarenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertToCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    function fahrenheit(){
        return props.celsius*9/5+32;
    }
    if(unit==="celsius"){
        return (
            <div className="WeatherName">
            <strong className="text-secondary">{Math.round(props.celsius)}</strong>
            <span className="units"> °C | <a className="text-decoration-none text-info" href="/" onClick={convertToFarenheit}>°F</a> </span>
            </div>);
    }else{
        return (
            <div className="WeatherName">
            <strong className="text-secondary">{Math.round(fahrenheit())}</strong>
            <span className="units"> <a className="text-decoration-none text-info" href="/" onClick={convertToCelsius}>°C</a>  | °F</span>
            </div>);
    }

}