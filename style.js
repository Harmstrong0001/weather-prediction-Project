// const apiKey = 'ayomide';
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// const weatherForm = document.getElementById('weatherForm');
// const locationInput = document.getElementById('locationInput');
// const weatherInfo = document.getElementById('weatherInfo');
// const locationElement = document.getElementById('location');
// const temperatureElement = document.getElementById('temperature');
// const weatherConditionElement = document.getElementById('weather-condition');

// weatherForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const location = locationInput.value.trim();
//   if (location === '') return;

//   getWeatherData(location);
// });

// function getWeatherData(location) {
//   const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       displayWeatherData(data);
//     })
//     .catch((error) => {
//       console.error('Error fetching weather data:', error);
//     });
// }

// function displayWeatherData(data) {
//   const locationName = data.name;
//   const temperature = data.main.temp;
//   const weatherCondition = data.weather[0].description;

//   locationElement.textContent = `Location: ${locationName}`;
//   temperatureElement.textContent = `Temperature: ${temperature} °C`;
//   weatherConditionElement.textContent = `Weather Condition: ${weatherCondition}`;

//   weatherInfo.style.display = 'block';
// }
