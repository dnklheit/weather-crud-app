import React from "react";

const WeatherCard = ({
  city,
  degree,
  description,
  icon,
  onUpdate,
  onDelete,
}) => {
  return (
    <div className="mb-6 p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl mb-4 font-bold text-gray-900">{city}</h3>
      <div className="flex items-center mb-6">
        <img src={icon} alt="Weather Icon" className="w-16 h-16 mr-4" />
        <div>
          <p className="text-xl font-semibold text-gray-700">
            Sıcaklık: {degree || "N/A"}°C
          </p>
          <p className="text-lg text-gray-500">Durum: {description || "N/A"}</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={onUpdate}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Güncelle
        </button>
        <button
          onClick={onDelete}
          className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Sil
        </button>
      </div>
    </div>
  );
};

export default WeatherCard;
