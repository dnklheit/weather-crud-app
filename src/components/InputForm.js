import React, { useState } from "react";

const InputForm = ({ addCityWeather }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addCityWeather(city);
    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-center justify-between mb-6 p-6"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full p-2 rounded-l-lg border-2 border-indigo-500 focus:outline-none focus:border-indigo-700"
        placeholder="Şehir ismi girin"
        required
      />
      <button
        type="submit"
        className="w-full h-11 bg-indigo-500 text-white p-2 rounded-r-lg hover:bg-indigo-700 transition duration-300"
      >
        Ekle
      </button>
    </form>
  );
};

export default InputForm;
