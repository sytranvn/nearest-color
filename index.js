import { RGB } from "./rgb.js";

const colorInp = document.getElementById('color');
const selectedColorEl = document.getElementById('selectedColor');
const nearestColorEl = document.getElementById('nearestColor');
let selectedColor;
let nearestColor;

function onColorChange(event) {
  const hexColor = event.target.value; // e.g., "#FF0000"
  // Remove the '#'
  const cleanHex = hexColor.substring(1);

  // Parse individual R, G, B components
  const red = parseInt(cleanHex.substring(0, 2), 16);
  const green = parseInt(cleanHex.substring(2, 4), 16);
  const blue = parseInt(cleanHex.substring(4, 6), 16);
  selectedColor = new RGB(red, green, blue);
  nearestColor = selectedColor.nearestColor();

  selectedColorEl.innerHTML = selectedColor.toString();
  selectedColorEl.style.color = selectedColor.toString();
  nearestColorEl.innerHTML = nearestColor.toString();
  nearestColorEl.style.color = nearestColor.toString();
}

colorInp.onchange = onColorChange;
