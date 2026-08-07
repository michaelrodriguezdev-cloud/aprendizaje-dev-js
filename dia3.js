
// //Crear objeto simple

// let periferico = {
//     nombre: "Basilisk v3",
//     marca: "Razer",
//     precio: 250000,
// };
// console.log(periferico.nombre);
// console.log(periferico.precio);

// //Modificar y agregar propiedades

// periferico.precio = 220000;
// periferico.enOferta = true;
// console.log(periferico);

// //Objeto con metodo (usando this)

// let producto = {
//   nombre: "Blackwidow v4",
//   precio: 450000,
//   mostrarInfo: function() {
//     console.log(this.nombre + " cuesta $" + this.precio);
//   }
// };
// producto.mostrarInfo();

// //Array de objetos + .map()
// let inventario = [
//   { nombre: "Basilisk v3", precio: 250000 },
//   { nombre: "Blackwidow v4", precio: 450000 },
//   { nombre: "Firefly v2 Pro", precio: 300000 }
// ];

// let nombresProductos = inventario.map(function(producto) {
//   return producto.nombre;
// });
// console.log(nombresProductos);

// //Ejercicio 5

// let mayorA280 = inventario.filter(function(producto){
//   return producto.precio > 280000;
// })
// console.log(mayorA280);



//PRACTICA DIA 3

//Reto 1
let proyecto = {
  nombre : "Calculadora Textil",
  leguaje : "JavaScript",
  terminado : false,
   resumen : function(){
    console.log(this.nombre);
    console.log(this.leguaje);
    console.log("Terminado : " + this.terminado);
  }
};
proyecto.resumen();


//Reto 2
 let tareas = [
  {titulo : "Estudiar objetos", completada: true},
  {titulo : "Pasear al perro", completada: false},
  {titulo : "Resolver 3 ejercicios", completada: true},
  {titulo : "Comprar comida", completada: false},
 ];

 let tareasPendientes = tareas.filter(function(tarea){
    return tarea.completada === false;
 })
 .map(function(tarea){
  return tarea.titulo;
 });
console.log(tareasPendientes);

 //Reto 3

let tareasCompletadas = tareas.filter(function(tarea){
  return tarea.completada === true;
})
console.log(tareasCompletadas.length);
