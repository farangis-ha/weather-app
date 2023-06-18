let search = document.querySelector("#search");
search.addEventListener(click, "showCity");
function showCity() {
  let searchValue = document.querySelector(
    "form.d-flex searchPart.form-control"
  );
  let searhCity = searchValue.value;
  let city = document.querySelector("#enter-city");
  city.innerHTML = searhCity;
}
