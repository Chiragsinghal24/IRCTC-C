import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Frombox from './components/Frombox';
import Tobox from './components/Tobox';

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

  const handleDate = (e) =>{
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
    <div className='flex flex-col items-center justify-center h-screen bg-red-500 p-8 rounded-lg shadow-lg gap-2'>
      <Frombox value={fromStation} update={handleFromChange} />
      <Tobox value={toStation} update={handleToChange} />
      <p>Date</p>
      <input value={dateValue} onChange={handleDate} className="input input-bordered input-info w-full max-w-xs" type="date" id="dateInput" name="dateInput" required></input>
      <button className="btn btn-warning" onClick={changeStation}>
        Change
      </button>
      <button className="btn" onClick={changeRoute}>
        Search Train
      </button>
    </div>
  );
};

export default App;
