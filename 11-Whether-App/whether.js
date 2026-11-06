let getDisplay = document.getElementById("display");
let getSubmit = document.getElementById("submit");
let getCity = document.getElementById("city");

async function getWhether() {
  const gotCity = getCity.value;

  const geoRes = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${gotCity}&count=1&language=en&format=json`,
  );
  const geoData = await geoRes.json();

  if (!geoData.results) {
    getDisplay.innerHTML = "City not Found";
    return;
  }

  const matchedPlace = geoData.results[0];
  const foundName = matchedPlace.name.toLowerCase();

  const lat = geoData.results[0].latitude;
  const long = geoData.results[0].longitude;

  const whetherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m`,
  );
  const whetherData = await whetherRes.json();

  getDisplay.innerHTML = `${foundName},${whetherData.current.temperature_2m} C`;
}

getSubmit.addEventListener("click", getWhether);
