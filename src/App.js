import logo from './logo.svg';
import React from "react";
import './App.css';
import CityInput from "./components/CityInput";
import CityWeather from './components/CityWeather';
function App() {
  const [city, setCity] = React.useState("");
  const [cityWeather, setCityWeather] = React.useState();
  const fetchCityWeather = () => {
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e52aa7323d90386c3a70692701e8cf3b`
    )
    .then((res)=>res.json())
      .then((result)=>{
      console.log("rseult is ",result);
      setCityWeather({result});
      console.log(cityWeather);
    });
  };
  return (
    <>
    <CityInput 
    city={city}
     setCity={setCity}
     fetchCityWeather ={fetchCityWeather}
     cityWeather = {cityWeather} /> 
    </>
  )
}

export default App;
