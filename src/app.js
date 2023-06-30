// variables
let apiKey = "NQ82TD4LZ4S83Q372SW2ALX7L";
let apiUrl;
let today;

function setTime() {
  let days = ["sun", "Mon", "Tue", "Wed", "Thu", "Fri", "sat"];
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
  let searchValue = document.querySelector('[placeholder="Search"]');
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
  let temp = document.querySelector("#temp");
  temp.innerHTML = `Temprture= ${temprture} °C`;
  document.querySelector("#Humidity").innerHTML = `Humidity= ${humidity}`;
  document.querySelector("#Wind").innerHTML = `Wind Speed= ${windspeed}`;
}
function geo() {
  // event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentTempreture);
}
function currentTempreture(position) {
  alert("hiiii");
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
dateIn.innerHTML = setTime(now);
// Current Wheather
let currentButton = document.querySelector("#current");
currentButton.addEventListener("click", geo);
