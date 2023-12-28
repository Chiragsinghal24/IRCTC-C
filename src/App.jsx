import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Frombox from './components/Frombox';
import Tobox from './components/Tobox';
import Navbar from './components/Navbar';

const App = () => {
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [dateValue, setDateValue] = useState('');
  const navigate = useNavigate();

  const changeStation = () => {
    handleFromChange({ target: { value: toStation } });
    handleToChange({ target: { value: fromStation } });
  };

  const handleFromChange = (e) => {
    setFromStation(e.target.value);
  };

  const handleToChange = (e) => {
    setToStation(e.target.value);
  };

  const handleDate = (e) => {
    setDateValue(e.target.value);
  }

  const changeRoute = () => {
    navigate('/find', {
      state: {
        fromStation: fromStation,
        toStation: toStation,
        dateValue: dateValue,
      },
    });
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-l from-purple-950 to-black p-8 rounded-lg shadow-lg gap-2'>
      <div className='flex w-full justify-center bg-black'>
        <Navbar />
      </div>
      <div className='flex flex-col items-center justify-center max-h-[500px] overflow-y-auto mt-10'>
        <div className='max-h-[500px]'>
          <Frombox value={fromStation} update={handleFromChange} />
          <Tobox value={toStation} update={handleToChange} />
          <p className='text-white'>Date</p>
          <input value={dateValue} onChange={handleDate} className="input input-bordered input-info w-full max-w-xs" type="date" id="dateInput" name="dateInput" required></input>
          <div className='flex flex-col gap-2'>
            <button className="btn btn-warning mt-2" onClick={changeStation}>
              Swap Stations
            </button>
            <button className="btn" onClick={changeRoute}>
              Search Train
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
