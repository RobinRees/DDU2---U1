// Recommended: All functions declared here
let table = document.querySelector("#table");
const emptyCell = document.createElement("div");
emptyCell.className = "cell";
table.appendChild(emptyCell);

for (let i = 0; i < cities.length; i++) {
    const createDiv2 = document.createElement("div");
    table.appendChild(createDiv2);
    createDiv2.className ="cell";
    createDiv2.textContent = i;
}

const cityDiv = document.querySelector("#cities");
let cityPrompt = prompt("Skriv en stad i Europa");
let h2Text = document.querySelector("h2");





for(let city of cities) {
    const createDiv = document.createElement("div");
    cityDiv.appendChild(createDiv);
    createDiv.className = "cityBox";
    createDiv.textContent = `${city.name}`
}
findClosestAndFurthest(cityPrompt);

function findClosestAndFurthest(cityPrompt) {
    let inputCityId = null;
    let closestCity = null;
    let furthestCity = null;
    let minDistance = Infinity;
    let maxDistance = null;
    
    for (const city of cities) {
        if (city.name.toLocaleLowerCase() === cityPrompt.toLocaleLowerCase()) {
            inputCityId = city.id;
            h2Text.innerHTML = `${cityPrompt} (${city.country})`;
            break;
        }
    }

    if (inputCityId === null) {
        h2Text.innerHTML = `${cityPrompt} finns inte i databasen;`
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

    highlightCities(cityPrompt, closestCityName, furthestCityName);
}

function highlightCities(cityPrompt, closestCityName, furthestCityName) {
    const cityBoxes = document.querySelectorAll(".cityBox");

    cityBoxes.forEach(cityBox => {
        const cityName = cityBox.textContent;

        if (cityName.toLowerCase() === cityPrompt.toLowerCase()) {
            cityBox.classList.add("target");
        } else if (cityName.toLowerCase() === closestCityName.toLowerCase()) {
            cityBox.style.backgroundColor = "green";
        } else if (cityName.toLowerCase() === furthestCityName.toLowerCase()) {
            cityBox.style.backgroundColor = "blue";
        } else {
            cityBox.style.backgroundColor = ""; // Återställ om ingen match
        }
    });
}
highlightCities()
findClosestAndFurthest(cityPrompt);
/*

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

/*const table = document.querySelector("#table");*/
