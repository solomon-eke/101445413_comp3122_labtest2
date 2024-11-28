import axios from "axios";

// A utility function to fetch weather data
const OpenWeatherApi = async (city) => {
  const apiKey = "579e641d0cf49071a8ee70d0f90b7a5d";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await axios.get(url); // Perform the API call
    return response.data; // Return the data
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error; // Propagate the error
  }
};

export default OpenWeatherApi;
