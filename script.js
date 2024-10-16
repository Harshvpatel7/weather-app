const api_key = "d572cd8d5075d7056d8c41ff597789ee";
const api= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search_bar = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weathericon");
 
async function checkWeather(city) {
    const response = await fetch(api + city +`&appid=${api_key}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"
    if (data.weather[0].main== "Haze") {
        weatherIcon.src = "images/haze.png";
    }if (data.weather[0].main== "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }if (data.weather[0].main== "Drizzel") {
        weatherIcon.src = "images/drizzel.png";
    }if (data.weather[0].main== "Mist") {
        weatherIcon.src = "images/mist.png";
    }if (data.weather[0].main== "Snow") {
        weatherIcon.src = "images/snow.png";
    }if (data.weather[0].main== "Rain") {
        weatherIcon.src = "images/rain.png";
    }if (data.weather[0].main== "Clear") {
        weatherIcon.src = "images/clear.png";
    }
    
    
}
// const apiforg = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&libraries=places&callback=initMap";

// navigator.geolocation.getCurrentPosition((position) => {
//     // console.log(position);
//     let latitude = position.coords.latitude
//     let longitude = position.coords.longitude;

//     const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&libraries=places&callback=initMap`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       // Parse the city name from the API response
//       console.log(data);
//       const city = data.results[0].address_components.find((component) =>
//         component.types.includes("locality")
//       ).long_name;

//       console.log(`Your city is ${city}.`);
//     })
//     .catch((error) => console.log(error));

// });
  

searchBtn.addEventListener("click",()=>{
    checkWeather(search_bar.value);
});