import React from "react";

export default function WeatherTemp(props){
    return (
        <div className="WeatherName">
        <strong className="text-secondary">{Math.round(props.celsius)}</strong>
        <span className="units">°C</span>
        </div>);
}