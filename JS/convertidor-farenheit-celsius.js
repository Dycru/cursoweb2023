function convertir() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("celsius").innerHTML = celsius.toFixed(2) + " Celsius";
  }