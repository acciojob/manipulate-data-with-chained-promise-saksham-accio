// Get the reference to the HTML element with the ID "output"
const outputInput = document.getElementById("output");

// Initial array of numbers
let array = [1, 2, 3, 4];

// Function to manipulate the array using chained promises
function newManipulation(array) {
  // First promise: Filters out even numbers and displays them after 1 second
  return new Promise((res, rej) => {
    setTimeout(() => {
      // Filter the even numbers from the array
      const evenNumber = array.filter((num) => num % 2 === 0);

      // Update the output to display even numbers
      outputInput.innerText = evenNumber.join(',');

      // Resolve the promise with the even numbers
      res(evenNumber);
    }, 1000); // Wait for 1 second
  })
  // Chain a second promise to multiply even numbers by 2 and display after 2 seconds
  .then((evenNumber) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        // Map over even numbers and multiply each by 2
        const evenMulti = evenNumber.map((num) => num * 2);

        // Update the output to display doubled numbers
        // Here we append to the existing content to display both even and doubled numbers
        outputInput.innerText = evenMulti.join(',');

        // Resolve the promise with the doubled numbers
        res(evenMulti);
      }, 2000); // Wait for 2 seconds
    });
  })
  // Catch any errors that might occur during promise execution
  .catch((error) => {
    console.error("Error", error);
  });
}

// Call the function to start the promise chain
newManipulation(array);
