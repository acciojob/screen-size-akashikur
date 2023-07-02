//your JS code here. If required.
function updateSizeValues() {
    var width = window.innerWidth;
    var height = window.innerHeight;
  
    document.getElementById("widthValue").textContent = width;
    document.getElementById("heightValue").textContent = height;
  }

  // Initial update of size values
  updateSizeValues();

  // Update size values on window resize
  window.addEventListener("resize", updateSizeValues);
