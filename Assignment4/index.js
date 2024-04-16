// Fetch weather forecast data
async function getWeatherForecast() {
    const apiKey = '6c74b3f3dbmsh48c5a40246a790ep18f3eajsn271d1fdb0c82';
    const apiUrl = 'https://wettercom-wettercom-default.p.rapidapi.com/weather/current/';
    const location = 'Berlin'; // You can change the location as needed

    //fetch location from
    try {
        const response = await fetch(`${apiUrl}${location}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 6c74b3f3dbmsh48c5a40246a790ep18f3eajsn271d1fdb0c82
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Display weather forecast on the webpage
async function displayWeatherForecast() {
    const weatherInfo = document.getElementById('weather-info');

    try {
        const data = await getWeatherForecast();
        const temperature = data.temperature;
        const description = data.weather;
        const city = data.city;

        weatherInfo.innerHTML = `<p>Current weather in ${city}: ${description}, ${temperature}°C</p>`;
    } catch (error) {
        console.error('Error displaying weather forecast:', error);
        weatherInfo.innerHTML = `<p>Failed to fetch weather forecast</p>`;
    }
}

// Call displayWeatherForecast when the page loads
window.addEventListener('load', displayWeatherForecast);

//This API was helped created by the following page https://rapidapi.com/wettercom-wettercom-default/api/forecast9
