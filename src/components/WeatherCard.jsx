import React from "react";
import { useState } from "react";

const WeatherCard = ({ weather, temperature }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleClick = () => setIsCelsius(!isCelsius);

  return (
    <>
      <article className="box">
        <h1 className="box__tittle">Weather App </h1>
        <h2 className="box__sub">
          {weather?.name}, {weather?.sys.country}
        </h2>
        <div className="box__body">
          <div className="box__img">
            <img
              src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png `}
              alt=""
            />
          </div>
          <section className="box__inf">
            <h3 className="box__inf-tit">{weather?.weather[0].description}</h3>
            <ul className="box__inf-body">
              <li className="box__inf-item">
                <i className="bx bx-wind"></i>
                <span className="box__inf-label">Wind Seed:</span>
                {weather?.wind.seed}m/s
              </li>
              <li className="box__inf-item">
                <i className="bx bxs-cloud"></i>
                <span className="box__inf-label">Clouds:</span>
                {weather?.clouds.all}%
              </li>
              <li className="box__inf-item">
                <i className="bx bx-test-tube"></i>
                <span className="box__inf-label">Pressure:</span>
                {weather?.main.pressure}hPa
              </li>
            </ul>
          </section>
        </div>
        <footer className="box__footer">
          <h2 className="box__temperature">
            {isCelsius
              ? temperature?.celsius + " °C"
              : temperature?.farenheit + " °F"}
          </h2>
          <button className="box__btn" onClick={handleClick}>
            {" "}
            Change to °{isCelsius ? "F" : "C"}
          </button>
        </footer>
      </article>
    </>
  );
};

export default WeatherCard;
