// List of names
const names = ["Alice", "Bob", "Claire", "David", "Eve"];

// List of shapes
const shapes = ["Circle", "Square", "Triangle", "Star"];

// Track clicked shapes
let clickedShapes = [];

// Function to handle shape selection
function selectShape(shape) {
    // Check if shape was already clicked
    if (clickedShapes.includes(shape)) {
        alert(`${shape} has already been clicked!`);
        return;
    }

    // Assign a random name from the names list
    const assignedName = names[Math.floor(Math.random() * names.length)];

    // Display the selected shape and the assigned name
    document.getElementById("result").innerHTML = `<h3>You selected: ${shape}</h3><p>Name Revealed: ${assignedName}</p>`;

    // Disable the clicked shape button
    document.getElementById(shape.toLowerCase()).classList.add("disabled");
    document.getElementById(shape.toLowerCase()).disabled = true;

    // Mark the shape as clicked
    clickedShapes.push(shape);
}
