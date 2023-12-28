import React, { useState, useEffect } from 'react';

const FromBox = ({ value, update }) => {
  const [suggestions, setSuggestions] = useState([]);

  const fetchStations = async () => {
    const url = `https://api.railyatri.in/api/common_city_station_search.json?hide_city=true&q=${value}`

    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
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
      <p className='text-white'>From</p>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="From"
        className="input input-bordered input-info w-full max-w-56" required
      />
      <div className='max-h-[200px] overflow-y-auto overflow-hidden'>
        <ul>
          {suggestions.map((station, index) => (
            <li key={index} className='bg-white rounded-md m-1 p-2 max-w-56 cursor-pointer' onClick={() => handleStationClick(station)}>{station}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FromBox;
