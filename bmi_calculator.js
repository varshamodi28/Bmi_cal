function calculateBMI() {
    // Get user input for height and weight
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);

    // Check if height and weight are valid numbers
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid values for height and weight.");
        return;
    }

    // Calculate BMI
    var bmi = weight / (height * height);

    // Interpret BMI
    var interpretation = getBMICategory(bmi);

    // Display results
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Your BMI is: " + bmi.toFixed(2) + "<br>You are classified as: " + interpretation;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 24.9) {
        return "Normal weight";
    } else if (bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
