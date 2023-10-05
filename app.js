// Get references to HTML elements
const flavorsInput = document.getElementById("flavorsInput");
const calculateButton = document.getElementById("calculateButton");
const flavorTable = document.getElementById("flavorTable");


// Event listener for the Calculate button
calculateButton.addEventListener("click", () => {
    const inputText = flavorsInput.value;
    const flavors = inputText.split(",");

    // Create an object to store the counts of each flavor
    const flavorCounts = {};

    // Count the flavors
    for (const flavor of flavors) {
        if (flavorCounts[flavor]) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    }

    // Create a table to display the counts
    const tableHTML = "<table><tr><th>Flavor</th><th>Count</th></tr>" +
        Object.keys(flavorCounts).map((flavor) => {
            return `<tr><td>${flavor}</td><td>${flavorCounts[flavor]}</td></tr>`;
        }).join("") + "</table>";

    // Display the table
    flavorTable.innerHTML = tableHTML;
});
