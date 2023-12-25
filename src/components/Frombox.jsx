import React, { useState,useEffect } from 'react';

const FromBox = ({ value, update }) => {
  const [suggestions, setSuggestions] = useState([]);

  const fetchStations = async () => {
    const url = `https://api.railyatri.in/api/common_city_station_search.json?hide_city=true&q=${value}`

    try {
      const response = await fetch(url);
      const result = await response.json();
      const stations = result.items.map(station => station.station_name);
      console.log(stations);

      setSuggestions(stations);
    } catch (error) {
      alert(error);
    }
  };

  const handleInputChange = (e) => {
    update(e);
    fetchStations();
  };

  const handleStationClick = (selectedStation) => {
    update({ target: { value: selectedStation } });
    setSuggestions([]); // Clear suggestions after selecting a station
  };

  return (
    <div>
      <p>From</p>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="From"
        className="input input-bordered input-info w-full max-w-xs" required
      />
      <ul>
        {suggestions.map((station, index) => (
          <li key={index} className='bg-white rounded-sm m-1 p-1 cursor-pointer' onClick={() => handleStationClick(station)}>{station}</li>
        ))}
      </ul>
    </div>
  );
};

export default FromBox;
