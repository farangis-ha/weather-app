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
function showCity(event) {
  event.preventDefault();
  let searchValue = document.querySelector('[placeholder="Search"]');
  let searchCity = searchValue.value;
  let city = document.querySelector("#enter-city");
  city.innerHTML = searchCity;
}

// Search City
let search = document.querySelector("#search");
search.addEventListener("click", showCity);
//Date + Time
let now = new Date();
let dateIn = document.querySelector("#city-time");
dateIn.innerHTML = setTime(now);
// Wheather
