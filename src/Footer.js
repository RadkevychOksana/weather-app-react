import React from "react";

import './App.css';
export default function Footer(){
    return(
        <div className="container text-center">
<small className="footer__description">This project was coded by <a className="text-info fw-bold"href="https://github.com/RadkevychOksana">Oksana Radkevych</a> 
&nbsp;and is open-sourced on <a className="text-info fw-bold" href="https://github.com/RadkevychOksana/weather-app-react">GitHub</a>  and hosted on <a className="text-info fw-bold" 
href="https://darling-gnome-617d13.netlify.app/">Netlify</a> </small>
        </div>
    );
}