// LogIn button functionality
document.getElementById("loginBtn").addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNumber = 1757188749; // Predefined mobile number
    const pinNumber = 3675; // Predefined pin number
    const enteredNumber = document.getElementById("mobile-number").value;
    const enteredNumberInt = parseInt(enteredNumber);
    const enteredPin = document.getElementById("pin-number").value;
    const enteredPinInt = parseInt(enteredPin);

    if (enteredNumberInt === mobileNumber && enteredPinInt === pinNumber) {
        window.location.href = "./home.html"; // Redirect to dashboard
    } else {
        alert("Invalid Mobile Number or Pin Number");
    }
});
