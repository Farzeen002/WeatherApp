import SearchBox from "./src/SearchBox.jsx";
import InfoBox from "./src/InfoBox.jsx";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelslike: 45.48,
    humidity: 23,
    temp: 13.05,
    tempMax: 43.05,
    tempMin: 43.05,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo = {updateInfo} />
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
