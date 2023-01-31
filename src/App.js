import logo from './logo.svg';
import './App.css';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import React from 'react';

function App() {

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '8fd07b5ad4688b6f021b6f838cd398b7',
    lat: '1.2921',
    lon: '36.8219',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  return (
    <div className="App">
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Nairobi"
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        showForecast
      />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
