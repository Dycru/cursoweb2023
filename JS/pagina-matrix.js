function sumar() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("resultado").value = resultado;
}

function restar() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 - num2;
    document.getElementById("resultado").value = resultado;
}

function multiplicar() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 * num2;
    document.getElementById("resultado").value = resultado;
}

function dividir() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 / num2;
    document.getElementById("resultado").value = resultado;
}

function convertir() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("celsius").innerHTML = celsius.toFixed(2) + " Celsius";
  }
  
  document.addEventListener('keydown', function (event) {
    var tecla = event.key;
    switch (tecla) {
      case '0':
        agregar(0);
        break;
      case '1':
        agregar(1);
        break;
      case '2':
        agregar(2);
        break;
      case '3':
        agregar(3);
        break;
      case '4':
        agregar(4);
        break;
      case '5':
        agregar(5);
        break;
      case '6':
        agregar(6);
        break;
      case '7':
        agregar(7);
        break;
      case '8':
        agregar(8);
        break;
      case '9':
        agregar(9);
        break;
      case '.':
        agregar('.');
        break;
      case '+':
        agregar('+');
        break;
      case '-':
        agregar('-');
        break;
      case '*':
        agregar('*');
        break;
      case '/':
        agregar('/');
        break;
      case 'Enter':
        calcular();
        break;
      case 'Backspace':
        limpiar();
        break;
      case 'Delete':
        limpiar();
        break;
      default:
        break;
    }
  });