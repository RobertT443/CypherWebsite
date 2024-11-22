// Defining the correct code
const correctCode = "753357";

document.addEventListener("mousemove", function (event) {
    const eye = document.querySelector(".eye");
    const iris = document.querySelector(".iris");

    // Get eye's bounding box
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    // Calculate angle between mouse position and eye center
    const deltaX = event.clientX - eyeCenterX;
    const deltaY = event.clientY - eyeCenterY;
    const angle = Math.atan2(deltaY, deltaX); // Radians

    // Set iris position based on the angle
    const irisRadius = rect.width / 4; // Limit iris movement within the eye
    const irisX = Math.cos(angle) * irisRadius;
    const irisY = Math.sin(angle) * irisRadius;

    iris.style.transform = `translate(${irisX}px, ${irisY}px)`;
});


// Function to change digit
function changeDigit(index, direction) {
    // Get the current digit element
    const digitElement = document.getElementById(`digit-${index}`);
    // Parse the current digit value
    let currentDigit = parseInt(digitElement.textContent);
    // Update the digit value
    currentDigit = (currentDigit + direction + 10) % 10; // Handles rollovers
    // Set the updated digit value
    digitElement.textContent = currentDigit;

    // Check if the code is correct after the change
    checkCode();
}

// Function to check the entered code
function checkCode() {
    let enteredCode = "";
    for (let i = 0; i < 6; i++) {
        // Concatenate all digits to form the code
        enteredCode += document.getElementById(`digit-${i}`).textContent;
    }

    // Compare with the correct code
    if (enteredCode === correctCode) {
        // Redirect to a new web page
        window.location.href = "https://rick.nerial.uk";
    }
}
