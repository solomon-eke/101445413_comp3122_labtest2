import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import OpenWeatherApi from "./components/OpenWeatherApi";
import './App.css';



const App = () => {
  const [city, setCity] = useState(""); // Track the user's input
  const [weatherData, setWeatherData] = useState(null); // Store the weather data

  // Fetch weather info when `city` updates
  useEffect(() => {
    const fetchWeatherInfo = async () => {
      if (!city) return; // Skip if city is empty

      try {
        const data = await OpenWeatherApi(city); // Fetch weather data
        setWeatherData(data); // Store the fetched data
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherInfo();
  }, [city]); // Dependency array ensures the useEffect runs when `city` changes

  return (
    <div className="app">
      <SearchBar onSearch={setCity} /> {/* Pass setCity to update the city */}
      <Weather weatherData={weatherData} /> {/* Pass fetched weather data */}
    </div>
  );
};

export default App;
