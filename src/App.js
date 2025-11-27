import React, { useState } from 'react';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
  const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

  const convert = (temp, convertFunc) => {
    const input = parseFloat(temp);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convertFunc(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  };

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setTemperature(value);
    setScale('c');
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setTemperature(value);
    setScale('f');
  };

  const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

  return (
    <div className="app">
      <div className="converter-container">
        <h1> Конвертер температур</h1>
        <p>Введите значение в одной единице - получите во второй</p>
        
        <div className="input-group">
          <div className="input-field">
            <label>Градусы Цельсия (°C)</label>
            <input
              type="text"
              value={celsius}
              onChange={handleCelsiusChange}
              placeholder="0"
              className="temperature-input"
            />
          </div>

          <div className="separator">⇄</div>

          <div className="input-field">
            <label>Градусы Фаренгейта (°F)</label>
            <input
              type="text"
              value={fahrenheit}
              onChange={handleFahrenheitChange}
              placeholder="32"
              className="temperature-input"
            />
          </div>
        </div>

        <div className="example-values">
          <h3>Например:</h3>
          <div className="examples">
            <span>0°C = 32°F</span>
            <span>100°C = 212°F</span>
            <span>-40°C = -40°F</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;