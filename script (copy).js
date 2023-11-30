document.querySelector('header').innerHTML = '<h1>Bienvenidos al sitio web de Javascript</h1>';

document.querySelector('nav').innerHTML = '<nav><ul><li><a href="#">Inicio</a></li><li><a href="#">Acerca de</a></li><li><a href="#">Servicios</a></li><li><a href="#">Contacto</a></li></ul></nav>';

document.querySelector('main').innerHTML = '<h2>Bienvenidos al sitio web de Javascript</h2><p>Este es un ejemplo de cómo se puede usar Javascript para agregar interactividad a una página web.</p>';

document.querySelector('footer').innerHTML = '<p>Derechos de autor BlaBlaBLa© 2023 - Todos los derechos reservados</p>';


let num1;
let num2;
num1 = 10;
num2 = 25;
let suma = num1 + num2;
console.warn("El resultado de la suma es...")
console.log(suma);
console.info("Pero qué has hecho!!!")


let nombre;
nombre = "Juan";
console.log("Hola " + nombre + " ¿qué tal?")

document.querySelector('h1').innerHTML = "Hola " + nombre + " ¿qué tal?";