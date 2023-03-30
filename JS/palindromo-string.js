function verificarPalindromo() {
    // Obtener el texto del elemento de entrada
    var inputString = document.getElementById("inputString").value;

    // Eliminar caracteres no alfabéticos y convertir todo el texto a minúsculas
    var normalizedString = inputString.replace(/[\W_]/g, "").toLowerCase();

    // Invertir el string
    var reversedString = normalizedString.split("").reverse().join("");

    // Comparar el string original con el invertido
    if (normalizedString === reversedString) {
        document.getElementById("resultado").innerHTML = "El string es un palindromo";
    } else {
        document.getElementById("resultado").innerHTML = "El string no es un palindromo";
    }
}