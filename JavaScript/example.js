// Get the input element from the HTML
const input = document.getElementById("list");

// Get the button element from the HTML
const button = document.getElementById("btn");

// Get the result element from the HTML
const result = document.getElementById("result");


// Function that finds the largest number
function check_numbers(numbers) {

    // Find the largest number in the array
    const largest = Math.max(...numbers);

    // Return the largest number
    return largest;
}


// Run this code when the button is clicked
button.addEventListener("click", function () {

    // Get the input value and split it into separate values
    const values = input.value.split(" ");

    // Convert the values from strings to numbers
    const numbers = values.map(Number);

    // Call the function and store the largest number
    const largest = check_numbers(numbers);

    // Print the largest number in the browser console
    console.log("Largest number:", largest);

    // Display the largest number on the webpage
    result.textContent = largest;

});