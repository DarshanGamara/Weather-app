   import SearchBox from "./SearchBox";
   import InfoBox from "./InfoBox";
   import "./WeatherApp.css";
import { useState } from "react";

  function WeatherApp() {
      const [weatherInfo, setWeatherInfo] = useState({
        city: "Bhavnagar",
        feelsLike: 24.67,
        temp: 24.9,
        tempMin: 24.9,
        tempMax: 24.9,
        humidity: 47,
        weather: "smoke",
      });

       const updateInfo = (result) => {
           setWeatherInfo(result);
       }

     return (
       <div className="weather">
         <h2>Weather App By Darshan</h2>
         <SearchBox updateInfo={updateInfo} />
         <InfoBox info={weatherInfo} />
       </div>
     );
  };


   export default WeatherApp;