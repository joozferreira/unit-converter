/* Conversion units
1 meter = 3.2808399 feet
1 liter = 0.264172052 gallon
1 kilogram = 2.20462262 pound
*/

const body = document.getElementsByTagName("body")[0];
const sectionList = Array.from(document.getElementsByTagName("section"));
const lengthConversion = document.getElementById("length-conversion");
const volumeConversion = document.getElementById("volume-conversion");
const massConversion = document.getElementById("mass-conversion");
const quantity = document.getElementById("quantity");
const convertBtn = document.getElementById("convert");
const lightDarkMode = document.getElementById("light-dark-mode");
const mode = document.getElementById("mode");

// Ensures that only numbers are input on the input field
quantity.addEventListener("keyup", (event) => {
  if (event.key.charCodeAt(0) < 48 || event.key.charCodeAt(0) > 57) {
    quantity.value = quantity.value.slice(0, -1);
  }
});

convertBtn.addEventListener("click", converter);

function converter() {
  let input = document.getElementById("quantity").value;
  if (input === "") {
    input = 0;
  }
  const convertedFeet = (input * 3.2808399).toFixed(3);
  const convertedMeter = (input / 3.2808399).toFixed(3);
  const convertedGallon = (input * 0.264172052).toFixed(3);
  const convertedLiter = (input / 0.264172052).toFixed(3);
  const convertedPound = (input * 2.20462262).toFixed(3);
  const convertedKilo = (input / 2.20462262).toFixed(3);
  lengthConversion.textContent = `${input} meters = ${convertedFeet} feet | ${input} feet = ${convertedMeter} meters`;
  volumeConversion.textContent = `${input} liters = ${convertedGallon} gallons | ${input} gallons = ${convertedLiter} liters`;
  massConversion.textContent = `${input} kilos = ${convertedPound} pounds | ${input} pounds = ${convertedKilo} kilos`;
}

mode.addEventListener("click", () => {
  if (lightDarkMode.classList.contains("dark")) {
    lightDarkMode.setAttribute("src", "./svg-icons/moon-icon.svg");
    lightDarkMode.classList.toggle("dark");
    lightDarkMode.classList.toggle("svg-color");
    body.classList.toggle("dark-mode");
    sectionList.forEach((item) => item.classList.toggle("dark-section"));
  } else {
    lightDarkMode.setAttribute("src", "./svg-icons/day-sunny-icon.svg");
    lightDarkMode.classList.toggle("dark");
    lightDarkMode.classList.toggle("svg-color");
    body.classList.toggle("dark-mode");
    sectionList.forEach((item) => item.classList.toggle("dark-section"));
  }
});
