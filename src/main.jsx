import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Findtrain from './components/Findtrain.jsx';
import Trainstatus from './components/Trainstatus.jsx';
import Searchtrain from './components/Livetrainstatus/Searchtrain.jsx';
import Trainmap from './components/Livetrainstatus/Trainmap.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/find" element={<Findtrain />} />
        <Route path='/status' element={<Trainstatus />}/>
        <Route path='/livestatus' element={<Searchtrain />}/>
        <Route path="/trainmap" element={<Trainmap />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

