import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          Coded by
          <a
            href="https://github.com/Exploradora139"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Dora Lopez
          </a>{" "}
          ,{" "}
          <a
            href="https://github.com/Exploradora139"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub{" "}
          </a>{" "}
          and Website hosted{" "}
          <a
            href="https://explorer-react-weather.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
