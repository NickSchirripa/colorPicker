document.getElementById("getColorInfo").addEventListener("click", function () {
  const colorPicker = document.getElementById("colorPicker");
  const selectedColor = colorPicker.value;
  const colorCodeDisplay = document.getElementById("colorCode");
  const colorInfoDisplay = document.getElementById("colorInfo");

  colorCodeDisplay.textContent = selectedColor;

  // Fetch color information from the API
  fetch(`https://www.thecolorapi.com/id?hex=${selectedColor.substring(1)}`)
    .then((response) => response.json())
    .then((data) => {
      colorInfoDisplay.innerHTML = `
          <h3>Color Info:</h3>
          <p>Name: ${data.name.value}</p>
          <p>Hex: ${data.hex.value}</p>
          <p>RGB: ${data.rgb.value}</p>
          <p>CMYK: ${data.cmyk.value}</p>
          <p>Closest Named Color: ${data.name.closest_named_hex}</p>
          <p>Contrast Value: ${data.contrast.value}</p>
        `;
    })
    .catch((error) => {
      colorInfoDisplay.innerHTML = `<p>Error fetching color information. Please try again.</p>`;
      console.error("Error fetching color info:", error);
    });
});

document.getElementById("getColorInfo").addEventListener("click", function () {
  console.log("clciked");
});
