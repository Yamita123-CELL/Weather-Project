import React from 'react';
import './styles.css';
const CityWeather = ({cityWeather}) => {
    return (
        <>
        <div id="main">
            <div><span>City Name</span>={cityWeather.result.name}</div>
            <div><span>Temperature</span>={cityWeather.result.main.temp}<sup>o</sup>C</div>
            <div><span>Humidity</span>={cityWeather.result.main.humidity}</div>
            <div><span>Wind Speed</span>={cityWeather.result.wind.speed}</div>
        </div>
        </>
    );
};

export default CityWeather;
