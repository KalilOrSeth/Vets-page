let Edad;
//Edad = prompt("Ingresar edad");

Fena =parseFloat(prompt("Año de nacimiento"));
const actual=2023;
Genero =prompt("Ingrese si es hombre o mujer");
Edad = actual-Fena;


if (Edad>=18 && Genero=="hombre"){
    alert("Usted es mayor de edad y debe presentar el servicio");
} else if (Edad>=18 && Genero=="mujer"){
    alert("Usted es mayor de edad pero aun no necesita el servicio")
} else
{
    alert("Usted es menor de edad aun no necesita presentarse");
}