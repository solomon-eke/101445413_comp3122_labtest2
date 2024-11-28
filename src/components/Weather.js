import React from "react";

const Weather = ({ weatherData }) => {
  if (!weatherData) return <p className="weather-prompt">Enter a city to see weather details!</p>; // Default message

  const { name, main, weather } = weatherData;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-info">
      <h2>{name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p>{weather[0].description}</p>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
};

export default Weather;
