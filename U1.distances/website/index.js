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
h2Text.innerHTML = cityPrompt;



function createAllCityBoxes () {
    for(let city of cities) {
        const createDiv = document.createElement("div");
        cityDiv.appendChild(createDiv);
        createDiv.className = "cityBox";
        createDiv.textContent = `${city.name}`
        if (cityPrompt === city.name) {
            h2Text.innerHTML = `${cityPrompt} (${city.country})`;
            createDiv.className = "target";
        }
        
    }
};
createAllCityBoxes();




// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

/*const table = document.querySelector("#table");

for(let city of cities) {
    const createDiv = document.createElement("div");
    table.appendChild(createDiv);
    createDiv.textContent = `${city.id} - ${city.name}`;
    for(let distance of distances) {
        
    }
    
}
    */