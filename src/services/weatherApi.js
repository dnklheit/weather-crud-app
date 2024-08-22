export const fetchWeather = (city, callback) => {
  const API_KEY = "7kxVsgyhxl88moNIk7pgBn:5VZbvz8UbZVJQP9fg2cSVN";
  const baseURL = "https://api.collectapi.com/weather/getWeather";

  fetch(`${baseURL}?data.lang=tr&data.city=${encodeURIComponent(city)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `apikey ${API_KEY}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.result && data.result.length > 0) {
        const weather = data.result[0];
        callback(null, {
          degree: weather.degree,
          description: weather.description,
          icon: weather.icon,
        });
      } else {
        callback(new Error("Hava durumu verisi bulunamadı"));
      }
    })
    .catch((error) => {
      callback(error);
    });
};
