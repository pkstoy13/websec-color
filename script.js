// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the elements
  const colorInput = document.getElementById("colorInput");
  const submitButton = document.getElementById("submitButton");
  const submitName = document.getElementById("name");
  const submitBirthday = document.getElementById("birthday");
  const message = document.getElementById("message");

  //check if color is valid
  function isValidColor(color) {
    const tempElement = document.createElement("div");
    tempElement.style.color = color;
    return tempElement.style.color !== "";
  }
  //code for button
  submitButton.addEventListener("click", function () {
    // Get the value from the input box
    const color = colorInput.value;
    const n = submitName.value;
    const bday = submitBirthday.value;

    //removes already existing messages
    if (message.firstChild) {
      message.removeChild(message.firstChild);
    }

    // Change the background color of the body
    if (color && n && bday) {
      if (!isValidColor(color)) {
        alert("Enter a Valid Color");
        return;
      }
      document.body.style.backgroundColor = color;
      message.appendChild(
        document.createElement("p")
      ).textContent = `You are ${n},\nyour favorite color is ${color},\nand your birthday is ${bday}`;
    } else alert("Complete All Fields");
  });
});
