// Recommended: All functions declared here
let table = document.querySelector("#table");
const emptyCell = document.createElement("div");
emptyCell.className = "cell";
table.appendChild(emptyCell);

for (let i = 0; i < cities.length; i++) {
    const createDiv2 = document.createElement("div");
    table.appendChild(createDiv2);
    createDiv2.style.fontWeight = "bold";
    createDiv2.className ="cell";
    createDiv2.textContent = i;
}

const cityDiv = document.querySelector("#cities");
let cityPrompt = prompt("Skriv en stad i Europa");
let h2Text = document.querySelector("h2");


function createTable () {
    let grayBox = 0;

    for (const city of cities) {
        const createDiv3 = document.createElement("div");
        createDiv3.textContent = `${city.id}-${city.name}`;
        createDiv3.style.fontWeight = "bold";
        createDiv3.className = "cell";
        table.appendChild(createDiv3);
    

        for (const targetCity of cities) {
            const createDiv4 = document.createElement("div");
            createDiv4.className = "cell";
            let distanceValue = distanceNumber(city.id, targetCity.id);
            createDiv4.textContent = `${distanceValue}`;

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




function distanceNumber (city1Id, city2Id) {
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

createTable ()

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
            cityBox.classList.add("closest");
        } else if (cityName.toLowerCase() === furthestCityName.toLowerCase()) {
            cityBox.classList.add("furthest");
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
