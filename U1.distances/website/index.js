// Recommended: All functions declared here
let table = document.querySelector("#table");
const emptyCell = document.createElement("div");
emptyCell.className = "cell";
table.appendChild(emptyCell);
const cityDiv = document.querySelector("#cities");
let h2Text = document.querySelector("h2");
let h3Text = document.querySelector("h3");
let cityPrompt = prompt("Skriv en stad i Europa");

for (let i = 0; i < cities.length; i++) {
  const createDiv2 = document.createElement("div");
  table.appendChild(createDiv2);
  createDiv2.style.fontWeight = "bold";
  createDiv2.className = "cell";
  createDiv2.textContent = i;
}

function createTableAndColors() {
  let grayBox = 0;
  let border = 0;

  for (const city of cities) {
    const createDiv3 = document.createElement("div");
    createDiv3.textContent = `${city.id}-${city.name}`;
    createDiv3.style.fontWeight = "bold";
    createDiv3.className = "cell";
    table.appendChild(createDiv3);

    if (border % 2 === 0) {
      createDiv3.classList.add("even_row");
    }

    if (grayBox % 2 === 0) {
      createDiv3.style.backgroundColor = "white";
    } else {
      createDiv3.style.backgroundColor = "gray";
    }
    grayBox++;
    border++;

    for (const targetCity of cities) {
      const createDiv4 = document.createElement("div");
      createDiv4.className = "cell";
      let distanceValue = distanceNumberForTable(city.id, targetCity.id);
      createDiv4.textContent = `${distanceValue}`;

      if (border % 2 === 1) {
        createDiv4.classList.add("even_row");
      }

      if (grayBox % 2 === 0) {
        createDiv4.style.backgroundColor = "white";
      } else {
        createDiv4.style.backgroundColor = "gray";
      }
      grayBox++;

      table.appendChild(createDiv4);
    }
  }
}

function distanceNumberForTable(city1Id, city2Id) {
  for (const distance of distances) {
    if (
      (distance.city1 === city1Id && distance.city2 === city2Id) ||
      (distance.city1 === city2Id && distance.city2 === city1Id)
    ) {
      return distance.distance / 10;
    }
  }
  return "";
}

createTableAndColors();
for (let city of cities) {
  const createDiv = document.createElement("div");
  cityDiv.appendChild(createDiv);
  createDiv.className = "cityBox";
  createDiv.textContent = `${city.name}`;
}
findClosestAndFurthestCity(cityPrompt);

function findClosestAndFurthestCity(cityPrompt) {
  let inputCityId = null;
  let closestCity = null;
  let furthestCity = null;
  let minDistance = Infinity;
  let maxDistance = null;

  for (const city of cities) {
    if (city.name.toLocaleLowerCase() === cityPrompt.toLocaleLowerCase()) {
      inputCityId = city.id;
      h2Text.innerHTML = `${cityPrompt} (${city.country})`;
      document.title = `${city.name}`;
      break;
    }
  }

  if (inputCityId === null) {
    h2Text.innerHTML = `${cityPrompt} finns inte i databasen;`;
    document.title = `Not found`;
    h3Text.innerHTML = ``;
    return;
  }

  for (const distance of distances) {
    let otherCityId = null;

    if (distance.city1 === inputCityId) {
      otherCityId = distance.city2;
    } else if (distance.city2 === inputCityId) {
      otherCityId = distance.city1;
    }

    if (otherCityId === null) continue;

    if (distance.distance < minDistance) {
      minDistance = distance.distance;
      closestCity = otherCityId;
    }

    if (distance.distance > maxDistance) {
      maxDistance = distance.distance;
      furthestCity = otherCityId;
    }
  }

  let closestCityName = null;
  let furthestCityName = null;

  for (const city of cities) {
    if (city.id === closestCity) {
      closestCityName = city.name;
    }
    if (city.id === furthestCity) {
      furthestCityName = city.name;
    }
  }

  colorCityBoxesByDistance(
    cityPrompt,
    closestCityName,
    furthestCityName,
    maxDistance,
    minDistance
  );
}

function colorCityBoxesByDistance(
  cityPrompt,
  closestCityName,
  furthestCityName,
  maxDistance,
  minDistance
) {
  const cityBoxes = document.querySelectorAll(".cityBox");

  cityBoxes.forEach((cityBox) => {
    const cityName = cityBox.textContent;

    if (cityName.toLowerCase() === cityPrompt.toLowerCase()) {
      cityBox.classList.add("target");
    } else if (cityName.toLowerCase() === closestCityName.toLowerCase()) {
      cityBox.classList.add("closest");
      cityBox.innerHTML += ` ligger ${minDistance / 10} mil ifrån`;
      document.querySelector("#closest").innerHTML = cityName;
    } else if (cityName.toLowerCase() === furthestCityName.toLowerCase()) {
      cityBox.classList.add("furthest");
      cityBox.innerHTML += ` ligger ${maxDistance / 10} mil ifrån`;
      document.querySelector("#furthest").innerHTML = cityName;
    } else {
      cityBox.style.backgroundColor = ""; // Återställ om ingen match
    }
  });
}
findClosestAndFurthestCity(cityPrompt);

/*

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

/*const table = document.querySelector("#table");*/

// en loop som går igenom varje id, skriver ut namnet på första raden.
// En loop i första loopen som går igenom alla idn och skriver ut varje distance 39 gånnger i varje cell efter.

//Om cityId

/*

let i = 0; 0 < cities.id.length + 1; i++ {
    skriv ut namnet på första cellen.
    let j = 0; 0 < 39; j++ {
        skriv ut distance i nästa cell om city1/city2 matchar med [i] city. 
    }
}

*/
