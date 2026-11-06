import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Exploradora139"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dora Lopez
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Exploradora139/exploradora-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>{" "}
          and{" "}
          <a
            href="https://explorer-react-weather.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
