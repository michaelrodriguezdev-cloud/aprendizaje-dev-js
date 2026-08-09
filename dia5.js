// //Ejercicio 1
// // función normal (transforma tú a arrow)
// // let cuadrados = [1,2,3,4].map(function(n) {
// //   return n * n;
// // });
// let cuadrados = [1,2,3,4].map(n=>n*n);
// console.log(cuadrados)


// //Ejercicio 2
// // let pares = [1,2,3,4,5,6].filter(function(n) {
// //   return n % 2 === 0;
// // });
// let pares = [1,2,3,4,5,6].filter(n => n % 2 === 0);
// console.log(pares);

// //Ejercicio 3 Escribe con arrow function desde cero: un .map() 
// // sobre ["hola", "mundo", "bro"] que devuelva cada palabra 
// // en mayúsculas. (Pista: los strings tienen un método .toUpperCase(), 
// // ej: "hola".toUpperCase() → "HOLA")

// let palabras = ["hola", "mundo", "bro"].map(palabra => palabra.toUpperCase());
// console.log(palabras);

// //Ejercicio 4
// //Reescribe tu propio Ejercicio 4 del Día 4 
// // (filter + map de productos con stock) usando 
// // arrow functions en vez de function().
// let productos = [
//     {nombre:"barra olimpica", stock:10},
//     {nombre:"discos 20kg", stock:20},
//     {nombre:"straps", stock:0},
//     {nombre:"rodrilleras", stock:30},
//     {nombre:"cinturon de levantamiento", stock:0},
// ];


// let productosDisponibles = productos.filter(producto => producto.stock > 0)
// .map(producto => producto.nombre);

// console.log(productosDisponibles);

// //Ejercicio 5
// //Usa arrow function con .filter() para quedarte solo con empleados 
// // que ganen más de 2000000, y luego con .map() para sacar solo sus nombres.
// // Encadénalo en una sola línea de flujo, con arrow functions.
// let empleados = [
//   { nombre: "Ana", salario: 3000000 },
//   { nombre: "Luis", salario: 1500000 },
//   { nombre: "Carla", salario: 4500000 }
// ];

// let sueldo = empleados.filter(empleado => empleado.salario > 2000000).map(empleado => empleado.nombre);
// console.log(sueldo);






//Ejercicio 6

let numeros = [5, 10, 15, 20, 25];

let numerosMultiplicados = numeros.map(numero => numero * 3);
console.log(numerosMultiplicados);

//Ejercicio 7

let edades = [12, 18, 25, 15, 30, 17];
 
let mayorDeEdad = edades.filter(edad => edad >= 18);
console.log(mayorDeEdad);

//Ejercicio 8
let frutas = [
    "manzana",
    "pera",
    "sandia",
    "uva"
];

let longitudPalabra = frutas.map(palabra => palabra.length);
console.log(longitudPalabra);


//Ejercicio 9
let estudiantes = [
    { nombre: "Pedro", nota: 4.8 },
    { nombre: "Laura", nota: 2.9 },
    { nombre: "Juan", nota: 3.7 },
    { nombre: "Sara", nota: 2.5 }
];

let estudiantesAprobados = estudiantes.filter(estudiante => estudiante.nota >= 3).map(estudiante => estudiante.nombre);
console.log(estudiantesAprobados);

//Ejercicio 10

let productos = [
    { nombre: "Mouse", precio: 80000 },
    { nombre: "Teclado", precio: 150000 },
    { nombre: "Monitor", precio: 900000 },
    { nombre: "Cable HDMI", precio: 30000 }
];

let prductosDeInferiorValor = productos.filter(producto => producto.precio < 100000).map(producto => producto.nombre);
console.log(prductosDeInferiorValor);

//🔥 Reto (un poco más difícil)

let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Carla", edad: 31 },
    { nombre: "Mateo", edad: 15 },
    { nombre: "Sofia", edad: 22 }
];

let mayoresDeEdad = personas.filter(persona => persona.edad >= 18).map(persona => persona.nombre.toUpperCase());
console.log(mayoresDeEdad);

//Ejercicio sistema de juegos

const jugadores = [
  {
    nombre: "Ana",
    nivel: 15,
    puntos: 1200,
    activo: true
  },
  {
    nombre: "Luis",
    nivel: 8,
    puntos: 600,
    activo: false
  },
  {
    nombre: "Carlos",
    nivel: 20,
    puntos: 2500,
    activo: true
  },
  {
    nombre: "Sofia",
    nivel: 12,
    puntos: 900,
    activo: true
  }
];

let usuariosActivos = jugadores.filter(jugador => jugador.activo).map(jugador=>jugador.nombre);
console.log(usuariosActivos);


function jugadoresVeteranos(jugadores){
    if(jugadores.activo);
};


// debe devolver
// [
//   {
//     nombre: "Ana",
//     nivel: 15,
//     puntos: 1200,
//     activo: true
//   },
//   {
//     nombre: "Carlos",
//     nivel: 20,
//     puntos: 2500,
//     activo: true
//   }
// ]
