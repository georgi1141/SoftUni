async function attachEvents() {
  const div = document.querySelector("#forecast");
  const label = document.querySelector("#current");
  const upcoming = document.querySelector("#upcoming");
  const inputField = document.querySelector("#location");
  const btn = document.querySelector("#submit");

  const url = `http://localhost:3030/jsonstore/forecaster/locations`;

  btn.addEventListener("click", async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    
    

      data.forEach((element) => {
        
        if (element.name == inputField.value) {
          div.style.display = "block";

          currentCond(element.code);
          threeDayForecast(element.code);
        }
      });
    } catch (error) {
      document.querySelector(".label").textContent = "Error";
      document.querySelector("#upcoming").remove();
      div.style.display = "block";
    }
  });

  function iconFn(input) {
    if (input == "Sunny") {
      return "☀";
    } else if (input == "Partly sunny") {
      return "⛅";
    } else if (input == "Overcast") {
      return "☁";
    } else if (input == "Rain") {
      return "☂";
    } else if (input == "Degrees") {
      return "°";
    }
  }

  async function currentCond(code) {
    
    const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

    const res = await fetch(url);
    const data = await res.json();
    

    const divContainer = document.createElement("div");
    divContainer.setAttribute("class", "forecast");
    

    const spanContainer = document.createElement("span");
    spanContainer.setAttribute("class", "condition symbol");
    spanContainer.textContent = iconFn(data.forecast.condition);

    const spanDataContainer = document.createElement("span");
    spanDataContainer.setAttribute("class", "condition");

    const spanCity = document.createElement("span");
    spanCity.setAttribute("class", "forecast-data");
    spanCity.textContent = `${data.name}`;
    const spanDegrees = document.createElement("span");
    spanDegrees.setAttribute("class", "forecast-data");
    spanDegrees.textContent = `${data.forecast.low}°/${data.forecast.high}°`;
    const spanCond = document.createElement("span");
    spanCond.setAttribute("class", "forecast-data");
    spanCond.textContent = data.forecast.condition;

    spanDataContainer.appendChild(spanCity);
    spanDataContainer.appendChild(spanDegrees);
    spanDataContainer.appendChild(spanCond);

    divContainer.appendChild(spanContainer);
    divContainer.appendChild(spanDataContainer);
    label.appendChild(divContainer);
  }

  async function threeDayForecast(code) {
    const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

    const res = await fetch(url);
    const data = await res.json();

    const divContainer = document.createElement("div");
    divContainer.setAttribute("class", "forecast-info");

    for (const iterator of data.forecast) {
      const spanContainer = document.createElement("span");
      spanContainer.setAttribute("class", "upcoming");

      const spanSymbol = document.createElement("span");
      spanSymbol.setAttribute("class", "symbol");
      spanSymbol.textContent = iconFn(iterator.condition);

      const spanDegrees = document.createElement("span");
      spanDegrees.setAttribute("class", "forecast-data");
      spanDegrees.textContent = `${iterator.low}°/${iterator.high}°`;

      const spanWeather = document.createElement("span");
      spanWeather.setAttribute("class", "forecast-data");
      spanWeather.textContent = iterator.condition;

      spanContainer.appendChild(spanSymbol);
      spanContainer.appendChild(spanDegrees);
      spanContainer.appendChild(spanWeather);
      divContainer.appendChild(spanContainer);
    }

    upcoming.appendChild(divContainer);
  }
}

attachEvents();
