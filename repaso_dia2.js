//Reconstruccion sin mirar

// 1) Un array de 5 elementos

// let perifericos = ["Basilisk v3", "Blackwidow v4", "Firefly v2 Pro"]

// // forEach que los imprima

// perifericos.forEach(function(periferico){
//     console.log(periferico);
// });

// //.map() que los transfore

// let comprado = perifericos.map(function(periferico){
//     if (periferico === "Basilisk v3"){
//         return periferico + " comprado";
//     }
//     else{
//         return periferico + " faltante";
//     }
// });
// console.log(comprado);


// //.filter() que invente yo

// let specs = perifericos.filter(function(p){
//     if (p === "Basilisk v3"){
//         return false
//     } else {
//         return true;
//     }
// });
// console.log(specs);


// // 2) Combinación

// let precios = [15000, 45000, 8000, 120000, 32000, 5000]

// let mayoresA10000 = precios.filter(function(precio){
//     return precio > 10000;
// });

// let resultado = precios.filter(function(precio){
//     return precio < 10000;
// })
// .map(function(precio){
//     return precio * 0.9;
// });

// console.log(mayoresA10000);
// console.log(resultado);











// // 1. Lista de precios inicial
// const precios = [120, 45, 80, 15, 50, 200, 35];

// // 2. Aquí debes crear tu arreglo para guardar los precios en oferta
// let preciosEnOferta = precios.filter(function(precio){
//     return precio <= 50;
// });

// // === TU CÓDIGO AQUÍ ===
// // Usa un método de arreglos o un ciclo para recorrer 'precios'
// // y agregar a 'preciosEnOferta' solo los que sean <= 50.

// // 3. Comprobación final
// console.log("Precios originales:", precios);
// console.log("Precios en oferta (deben ser 45, 15, 50, 35):", preciosEnOferta);


// const precios = [120, 45, 80, 15, 50, 200, 35];

// // TU MISIÓN:
// // Usa el método .map() para crear un nuevo arreglo llamado 'preciosConDescuento'
// // donde cada valor sea el precio original con el 10% de descuento aplicado.
// // Intenta usar la sintaxis de flecha (=>) que acabamos de ver.

// let preciosConDescuento = precios.map(precio => precio * 0.9)

// console.log("Precios con descuento:", preciosConDescuento);



const precios = [120, 45, 80, 15, 50, 200, 35];

// TU MISIÓN:
// 1. Usa .filter() para quedarte solo con los precios <= 50.
// 2. Encadena .map() inmediatamente después para aplicar el 10% de descuento (* 0.9) a esos precios filtrados.
// Usa funciones flecha (=>) en ambos métodos.

let ofertasConDescuento = precios
  .filter(precio => precio <= 50)
  .map(precio => precio * 0.9);

console.log("Ofertas finales con descuento:", ofertasConDescuento);
// Resultado esperado en consola: [ 40.5, 13.5, 45, 31.5 ]