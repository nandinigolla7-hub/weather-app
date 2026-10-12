const apiKey = '114c33d0972919119bf2156740140c6c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(
        `${apiUrl}${encodeURIComponent(city)}&appid=${apiKey}`
    );

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") weatherIcon.src = "images/clouds.png";
        else if (data.weather[0].main == "Clear") weatherIcon.src = "images/clear.png";


        document.querySelector(".weather").style.display = "block";

    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

