//SPACED REPETITION

//Ejercicio 1 Crea un array productos con al menos 4 objetos, cada uno con nombre y stock (número).

let productos = [
    {nombre:"barra olimpica", stock:10},
    {nombre:"discos 20kg", stock:20},
    {nombre:"straps", stock:0},
    {nombre:"rodrilleras", stock:30},
    {nombre:"cinturon de levantamiento", stock:0},
];

//Ejercicio 2 Usa .filter() para quedarte con los productos que tengan stock en 0 (agotados).
let productosAgotados = productos.filter(function(producto){
    return producto.stock === 0;
})
console.log(productosAgotados);

//Ejercicio 3 Usa .map() para crear un array nuevo solo con los nombre de TODOS los productos (sin filtrar).
let nombresProductos = productos.map(function(nombre){
    return nombre.nombre;
});
console.log(nombresProductos);

//Ejercicio 4 Encadena .filter() + .map() en un solo flujo: de los productos con stock mayor a 0 (disponibles), saca solo sus nombres.

let prductosNoAgotados = productos.filter(function(productodisponible){
    return productodisponible.stock > 0;
})
.map(function(productodisponible){
    return productodisponible.nombre;
});
console.log(prductosNoAgotados);

//Ejercicio 5 Sin usar for, dime cuántos productos están agotados (pista: ya hiciste algo parecido el domingo)

let cantidadProductosAgotados = productos.filter(function(productoagotado){
    return productoagotado.stock === 0;
});

console.log(cantidadProductosAgotados.length);