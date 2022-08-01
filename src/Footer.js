import React from "react";

import "./App.css";
export default function Footer() {
  return (
    <div className="container text-center">
      <small className="footer__description">
        This project was coded by{" "}
        <a
          className="text-info fw-bold"
          href="https://github.com/RadkevychOksana"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oksana Radkevych
        </a>
        &nbsp;and is open-sourced on{" "}
        <a
          className="text-info fw-bold"
          href="https://github.com/RadkevychOksana/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          className="text-info fw-bold"
          href="https://darling-gnome-617d13.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>{" "}
      </small>
    </div>
  );
}
