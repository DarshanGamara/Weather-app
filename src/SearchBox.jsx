   import TextField from "@mui/material/TextField";
   import Button from "@mui/material/Button";
   //import InfoBox from "./InfoBox";
   //import WeatherApp from "./WeatherApp";
   import "./SearchBox.css";
   

import { useState } from "react";

    function SearchBox({ updateInfo }) {
         const [city, setCity] = useState("");
         const [error, setError] = useState(false);

       const API_URL = "https://api.openweathermap.org/data/2.5/weather";
       const API_KEY = "ec93ab11d2a93c174ee1d530bbfda498";

       const getWeatherInfo = async() => {
          try {
              const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
          const jsonResponse = await response.json();
          console.log(jsonResponse);
            const result = {
              city: city,
              temp: jsonResponse.main.temp,
              tempMin: jsonResponse.main.temp_min,
              tempMax: jsonResponse.main.temp_max,
              humidity: jsonResponse.main.humidity,
              feelsLike: jsonResponse.main.feels_like,
              weather: jsonResponse.weather[0].description
            };
            console.log(result);
            return result
          } catch(err) {
           throw err;
       }
      }

       const handleChange = (event) => {
           setCity(event.target.value);
       }

       const handleSubmit = async (event) => {
         try {
            event.preventDefault();
           console.log(city);
           setCity("");
           const newInfo = await getWeatherInfo(); 
            updateInfo(newInfo);
            setError(false);
         } catch(err){
            setError(true);
         }
        }

        return (
          <div className="searchBox">
            <h3>Search Your City Weather</h3>
            <form onSubmit={handleSubmit}>
              <TextField
                id="city"
                label="Search City Name"
                variant="outlined"
                required
                value={city}
                onChange={handleChange}
              />
              <br></br> <br></br>
              <Button variant="contained" type="submit">
                Search
              </Button>
            </form>
            <div>
              {error  && (
                <p style={{ color: "red" }}>
                  No Place Found In Api, Try Another Place
                </p>
              )}
            </div>
          </div>
        );
      };
    
  
    export default SearchBox;