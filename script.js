// Get the value provided in the text input element
const ugxInput = document.getElementById('ugxInput');

// Get the converted value generated into the element 'div.result'
const resultElement = document.getElementById('result');

// Add an event listener to the form submission (performs real-time conversion)
// ugxInput.addEventListener('input', convertCurrency);

function convertCurrency() {
  // Get the input value and convert it to a number
  const ugxAmount = parseFloat(ugxInput.value);

  // Check if the conversion is valid
  if (!isNaN(ugxAmount)) {
    // Convert UGX to USD (assuming US$ 1 = UGX 3646.27)
    const usdAmount = ugxAmount / 3646.27;

    // Display the converted amount in the result element
    document.getElementById("result").innerHTML = "<span>US$</span> " + usdAmount.toFixed(2);
  } 
  /* else {
    // Clear the result element if the input is invalid
    resultElement.textContent = '';
  } */
}