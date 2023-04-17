import React from "react";
import { useWeather } from "../context/WeatherContext";

const WeatherBox = () => {
  const { weather } = useWeather();

  return (
    <div className="weather-box">
      {" "}
      {weather &&
        weather.list.map((data, index) => {
          if (index % 8 === 0 || index === 39) {
            return (
              <div
                key={index}
                className={`daily-box ${index === 0 && "today-box"}`}
              >
                <h3 className="">
                  {new Date(data.dt * 1000).toString().split(" ")[0]}
                </h3>
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt="weatherImage"
                />
                <p>
                  <span>
                    {(data.main.temp_max - 273.15).toFixed(1)}° /{" "}
                    {(data.main.temp_min - 273.15).toFixed(1)}°
                  </span>
                </p>
              </div>
            );
          }
          return "";
        })}
    </div>
  );
};

export default WeatherBox;
