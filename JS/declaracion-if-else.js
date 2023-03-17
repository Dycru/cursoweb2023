var hour = new Date().getHours();

var saludo;

if (hour < 18) {

saludo = "Buenos días";

} else {

saludo = "Buenas tardes";

}

document.getElementById("buenas").innerHTML =
saludo;

