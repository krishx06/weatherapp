const apiKey = "6aa4ad9420b3f3a4ee38104f6e2deb2a";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (response.status === 404) {
        alert("City not found. Please enter a valid city name.");
        return;
    }
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

VanillaTilt.init(document.querySelector(".card"), {
    max: 15,
    speed: 1000,
    glare: true,
    "max-glare": 0.25,
});
