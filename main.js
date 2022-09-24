let Pizzas = [
    {id: 1, 
    nombre: 'Fugazza', 
    ingredientes: ['masa', 'queso mozzarella', 'cebolla', 'y oregano'], 
    precio: '500', 
    imagen: "./assets/fugazza.jpg"}, 
    {id:2, 
    nombre: 'Cantimpalo', 
    ingredientes: ['masa', 'queso mozzarella', 'salsa de tomate', 'chorizo', 'y oregano'], 
    precio: '900',
    imagen: "./assets/cantimpalo.jpg"}, 
    {id:3, 
    nombre: 'Cuatro quesos', 
    ingredientes: ['masa','queso mozzarella', 'queso parmesano', 'queso fontina', 'queso gorgonzola', 'y pimienta'], 
    precio: '850',
    imagen: "./assets/cuatroquesos.jpg"}, 
    {id: 4, 
    nombre: 'Marinara', 
    ingredientes: ['masa', 'queso mozzarella', 'salsa de tomate', 'oregano', 'ajo', 'y albahaca'], 
    precio: '550',
    imagen: "./assets/marinara.jpg"}, 
    {id:5, 
    nombre: 'Margherita', 
    ingredientes: ['masa', 'queso mozzarella', 'salsa de tomate', 'tomate en rodajas', 'y albahaca'],
    precio: '600',
    imagen: "./assets/margarita.jpg"}, 
    {id:6, 
    nombre: 'Especial', 
    ingredientes: ['masa', 'queso mozzarella', 'tomate', 'oregano', 'y jamon en trozos'], 
    precio: '700',
    imagen: "./assets/especial.jpg"}];



let cardContainer = document.querySelector('.card-container')
/* let nombre = document.querySelector('h2');
let precio = document.querySelector('h4'); */
let input = document.querySelector("input[type='number']");
let btn = document.querySelector('button');


let pizzaStorage = JSON.parse(localStorage.getItem("pizzas")) || [];
// seteamos los elementos en localStorage
const saveLocalStorage = pizzas => localStorage.setItem("pizzas", JSON.stringify(pizzas));




/*  let nombre = document.getElementsByTagName('h2')[0];
let precio = document.getElementsByTagName('h4')[0];
let input = document.getElementsByTagName("input")[0];
let btn = document.getElementsByTagName('button')[0]; */
//console.log(nombre)
//console.log(precio)
//console.log(input)
//console.log(btn)
console.log(localStorage)

const renderPizza = pizza =>  cardContainer.innerHTML = 
`<h2>Pizza ${pizza.nombre}</h2> 
<img src="${pizza.imagen}" alt="">
<p>Ingredientes: ${pizza.ingredientes}</p>
<p> Precio: $${pizza.precio}</p>`;


function add(e) {
    e.preventDefault()
    const valorInput = input.value.trim();
    if (Pizzas.some(item => item.id == valorInput)) {
        let pizza = Pizzas.find(item => item.id == valorInput);
        renderPizza(pizza);
        saveLocalStorage(pizza);
    } else if (valorInput.length == 0) {
        alert('Por favor ingrese un #id de pizza')
    } else {
        alert('No existe ninguna pizza con ese #id')
    };
    input.value = "";
}

btn.addEventListener("click", add);

window.onload = renderPizza(pizzaStorage);