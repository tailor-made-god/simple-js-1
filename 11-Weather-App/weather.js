const getDisplay = document.getElementById("display");
const getSubmit = document.getElementById("submit");
const getCity = document.getElementById("city");

async function getWeather() {
  const gotCity = getCity.value.trim();
  if (!gotCity) {
    getDisplay.textContent = "Please Enter a city name";
    return;
  }

  getDisplay.textContent = "Loading...";
  getSubmit.disabled = true;

  try {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(gotCity)}&count=1&language=en&format=json`,
    );
    if (!geoRes.ok) {
      throw new Error("Geo coding failed");
    }
    const geoData = await geoRes.json();
    if (!geoData.results || geoData.results.length === 0) {
      getDisplay.textContent = "City not Found";
      return;
    }
    const matchedPlace = geoData.results[0];
    const foundName = matchedPlace.name.toLowerCase();
    const { latitude, longitude } = matchedPlace;

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`,
    );

    if (!weatherRes.ok) {
      throw new Error("Weather data failed");
    }

    const weatherData = await weatherRes.json();
    getDisplay.textContent = `${foundName},${weatherData.current.temperature_2m}°C`;
  } catch (error) {
    getDisplay.textContent = "Unable to fetch weather. Try again.";
  } finally {
    getSubmit.disabled = false;
  }
}

getSubmit.addEventListener("click", getWeather);

getCity.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
});
