import React, { useState } from "react";
import InputForm from "../components/InputForm";
import WeatherCard from "../components/WeatherCard";
import { fetchWeather } from "../services/weatherApi";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState([]);

  const addCityWeather = (city) => {
    fetchWeather(city, (error, weather) => {
      if (error) {
        console.error("Error fetching weather data:", error.message);
      } else {
        setWeatherData([...weatherData, { city, ...weather }]);
      }
    });
  };

  const updateCityWeather = (city) => {
    fetchWeather(city, (error, updatedWeather) => {
      if (error) {
        console.error("Error fetching weather data:", error.message);
      } else {
        setWeatherData(
          weatherData.map((w) =>
            w.city === city ? { ...w, ...updatedWeather } : w
          )
        );
      }
    });
  };

  const deleteCityWeather = (city) => {
    setWeatherData(weatherData.filter((w) => w.city !== city));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-teal-400 text-white p-8">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg text-gray-800">
        <h1 className="text-3xl font-extrabold mb-6 text-center">
          Hava Durumu CRUD
        </h1>
        <InputForm addCityWeather={addCityWeather} />
        <ul>
          {weatherData.map((weather) => (
            <WeatherCard
              key={weather.city}
              city={weather.city}
              degree={weather.degree}
              description={weather.description}
              icon={weather.icon}
              onUpdate={() => updateCityWeather(weather.city)}
              onDelete={() => deleteCityWeather(weather.city)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherApp;
