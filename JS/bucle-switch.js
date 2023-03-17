
var dia;

switch (new Date().getDay()) {

    case 0:

        dia = "Domingo"; break;

    case 1:

        dia = "Lunes"; break;

    case 2:

        dia = "Martes"; break;

    case 3:

        dia = "Miércoles"; break;

    case 4:

        dia = "Jueves"; break;

    case 5:

        dia = "Viernes"; break;

    case 6:

        dia = "Sábado";

}
document.getElementById("texto").innerHTML = "En que dia estamos " + dia;
var mes;
switch (new Date().getMonth()){
    case 0:

     mes = "Enero"; break;

    case 1:

    mes = "Febrero"; break;

    case 2:

     mes = "Marzo"; break;

    case 3:

    mes = "Abril"; break;

    case 4:

     mes = "Mayo"; break;

    case 5:

     mes = "Junio"; break;

    case 6:

     mes = "Julio";

    case 7:
     mes = "Agosto"; break;

    case 8:

    mes = "Septiembre"; break;

    case 9:

     mes ="Octubre";break

    case 10:

     mes ="Noviembre";break

    case 11:

     mes="Diciembre";break

}

document.getElementById("demo").innerHTML = "En que mes estamos " + mes;
document.write(new Date()+ "<br>");
document.write(new Date().getDay()+"<br>");


