function convertMinutesToSeconds() {
    // Get input value
    let minutesInput = document.getElementById('minutes').value;
  
    // Convert minutes to seconds
    let seconds = minutesInput * 60;
  
    // Display the result
    let resultElement = document.getElementById('result');
    resultElement.textContent = `Result: ${minutesInput} minutes is ${seconds} seconds.`;
  }
  