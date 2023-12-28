import React, { useState } from 'react';

const Tobox = ({ value, update }) => {
  const [suggestions, setSuggestions] = useState([]);

  const fetchStations = async () => {
    const url = `https://api.railyatri.in/api/common_city_station_search.json?hide_city=true&q=${value}`

    try {
      const response = await fetch(url);
      const result = await response.json();
      const stations = result.items.map(station => station.station_name);
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
      <p className="text-white">To</p>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="To"
        className="input input-bordered input-info w-full max-w-xs" required
      />
      <div className='max-h-[250px] overflow-y-auto overflow-hidden'>
        <ul>
          {suggestions.map((station, index) => (
            <li key={index} className='bg-white rounded-md m-1 p-2 max-w-56 cursor-pointer' onClick={() => handleStationClick(station)}>{station}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tobox;
