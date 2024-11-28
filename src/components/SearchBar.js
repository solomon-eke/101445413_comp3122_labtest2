import React, { useState } from "react";



export default function SearchBar({onSearch}) {
  const [city, setCity] = useState(""); // Local input state

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city); // Call the parent function with the city name
      setCity(""); // Clear the input field
    }
  };

  const handleCityUpdate = (e) => {
    e.preventDefault()
    setCity(e.target.value)



  }

 return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        placeholder="Enter city"
        onChange={handleCityUpdate} // Update local state
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}


