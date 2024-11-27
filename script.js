// Sabit JSON verisi
const mockWeatherData = {
    location: {
        name: "Istanbul",
        country: "Turkey",
    },
    current: {
        temperature: 15,
        weather_descriptions: ["Partly cloudy"],
        weather_icons: ["https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"],
    },
};

// HTML Elementlerini Seç
const weatherForm = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const weatherResult = document.getElementById("weather-result");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const weatherIcon = document.getElementById("weather-icon");

// Form Gönderildiğinde Hava Durumu Göster
weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    displayWeather(mockWeatherData);
});

// Hava Durumu Verilerini Göster
function displayWeather(data) {
    cityName.textContent = `${data.location.name}, ${data.location.country}`;
    temperature.textContent = `Temperature: ${data.current.temperature}°C`;
    description.textContent = `${data.current.weather_descriptions[0]}`;
    weatherIcon.src = data.current.weather_icons[0];
    weatherResult.classList.remove("hidden");
}
