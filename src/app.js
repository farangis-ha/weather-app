// variables
let apiKey = "NQ82TD4LZ4S83Q372SW2ALX7L";
let apiUrl;
let today;

function setTime() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let min = now.getMinutes();

  if (hour > 9) {
    if (min > 9) {
      today = `${day} ${hour}:${min}`;
    } else {
      today = `${day} ${hour}:0${min}`;
    }
  } else {
    if (min > 9) {
      today = `${day} 0${hour}:${min}`;
    } else {
      today = `${day} 0${hour}:0${min}`;
    }
  }
  return today;
}
// Show City
function showCity(event) {
  event.preventDefault();
  let searchValue = document.querySelector('[placeholder="Enter City Name"]');
  let searchCity = searchValue.value;
  let city = document.querySelector("#enter-city");
  city.innerHTML = searchCity;
  apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchValue.value}/today?unitGroup=metric&include=current&key=${apiKey}&contentType=json`;
  axios.get(apiUrl).then(cityTempreture);
}
// City Tempreture
function cityTempreture(response) {
  temprture = response.data.currentConditions.temp;
  windspeed = response.data.currentConditions.windspeed;
  humidity = response.data.currentConditions.humidity;
  condition = response.data.currentConditions.conditions;
  //Enter amount
  let temp = document.querySelector("#temp");
  temp.innerHTML = `${Math.round(temprture)}°`;
  document.querySelector("#Humidity").innerHTML = `Humidity= ${Math.round(
    humidity
  )}%`;
  document.querySelector("#Wind").innerHTML = `Wind Speed= ${Math.round(
    windspeed
  )} km/h`;
  document.querySelector("#Condition").innerHTML = `${condition}`;

  //Weather Icon
  console.log(condition);
  let iconWeather = document.querySelector("#icons");
  iconWeather.innerHTML = "";
  if (condition === "Clear") {
    const iconElement = document.createElement("i");
    iconElement.classList.add("fas", "fa-sun", "fa-2x");
    // Append the <i> element to the element with ID "icons".
    iconWeather.appendChild(iconElement);
  } else if (condition === "Overcast") {
    const iconElement = document.createElement("i");
    iconElement.classList.add("fas", "fa-cloud", "fa-2x");
    // Append the <i> element to the element with ID "icons".
    iconWeather.appendChild(iconElement);
  } else if (condition === "Partially cloudy") {
    const iconElement = document.createElement("i");
    iconElement.classList.add("fas", "fa-cloud-sun", "fa-2x");
    // Append the <i> element to the element with ID "icons".
    iconWeather.appendChild(iconElement);
  }
  if (condition.includes("Rain")) {
    const iconElement = document.createElement("i");
    iconElement.classList.add("fas", "fa-cloud-rain", "fa-2x");

    iconWeather.appendChild(iconElement);
  }
  if (condition.includes("Snow")) {
    const iconElement = document.createElement("i");
    iconElement.classList.add("fas", "fa-snowflake", "fa-2x");
    iconWeather.appendChild(iconElement);
  }
  if (condition.includes("Wind")) {
    const iconElement = document.createElement("i");
    iconElement.classList.add("fas", "fa-wind", "fa-2x");
    iconWeather.appendChild(iconElement);
  }
}
function geo() {
  // event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentTempreture);
}
function currentTempreture(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}/today?unitGroup=metric&include=current&key=${apiKey}&contentType=json`;
  alert(apiUrl);
  axios.get(apiUrl).then(cityTempreture);
}
// Search City
let searchfield = document.querySelector("#search");
searchfield.addEventListener("click", showCity);
//Date + Time
let now = new Date();
let dateIn = document.querySelector("#city-time");
dateIn.innerHTML = `Last updated on ${setTime(now)}`;
// Current Wheather
let currentButton = document.querySelector("#current");
currentButton.addEventListener("click", geo);
