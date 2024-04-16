async function getWeatherForecast() {
    const apiKey = '6c74b3f3dbmsh48c5a40246a790ep18f3eajsn271d1fdb0c82';
    const apiUrl = 'https://forecast9.p.rapidapi.com/rapidapi/forecast/Berlin/summary/Berlin';

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6c74b3f3dbmsh48c5a40246a790ep18f3eajsn271d1fdb0c82',
                'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.log('Error fetching weather data:', error);
        throw error; // Rethrow the error to handle it in the caller function if needed
    }
}

// Display weather forecast on the webpage
async function displayWeatherForecast() {
    const weatherInfo = document.getElementById('weather-info');
    const studentInfo = document.getElementById('student-info');

    try {
        const data = await getWeatherForecast();
        const temperature = data.main.temp; // Assuming temperature is under 'main' object
        const description = data.weather[0].description; // Assuming weather description is an array
        const city = data.name; // Assuming city name is under 'name'

        weatherInfo.innerHTML = `<p>Current weather in ${city}: ${description}, ${temperature}°C</p>`;

        // Add student ID and name dynamically
        const studentId = '1226354'; // Replace with your actual student ID
        const studentName = 'Saad Zaidi'; // Replace with your actual name
        studentInfo.textContent = `Student ID: ${studentId}, Name: ${studentName}`;
    } catch (error) {
        console.error('Error displaying weather forecast:', error);
        weatherInfo.innerHTML = `<p>Failed to fetch weather forecast</p>`;
    }
}

// Call displayWeatherForecast when the page loads
window.addEventListener('load', displayWeatherForecast);
// the following code is retrieved from the API https://rapidapi.com/wettercom-wettercom-default/api/forecast9
