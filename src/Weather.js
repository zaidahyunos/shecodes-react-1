import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>SheCodes React Week 1</h1>
      <div className="container mt-5 pt-4">
        <div className="row ps-2 pe-2 pb-5">
          <div className="col-md-10">
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="city"
            />
          </div>
          <div className="col-md-2">
            <input type="submit" value="Search" className="button" />
          </div>
        </div>

        <div className="bottom"></div>

        <div className="row ps-2 pe-2 pb-5">
          <div className="col-md-8 text-start">
            <p className="current-city display-5">Paris</p>
            <p className="current-details">
              Saturday 15:32, moderate rain <br />
              Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
            </p>
          </div>

          <div className="col-md-4 text-end">
            <span className="temperature-icon display-4">☀️</span>
            <span className="temperature-value display-3">14</span>
            <span className="temperature-unit fs-3">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
