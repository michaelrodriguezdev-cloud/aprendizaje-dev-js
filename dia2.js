//Array basico y acceso
let colores = ["rojo", "verde", "azul"];
console.log(colores[1]);

//forEach para imprimir todos
let animales = ["perro","gato","loro"];
animales.forEach(function(animal){
    console.log(animal);
});

//.map() para duplicar numeros

let numeros = [2,4,6,8];
let duplicados = numeros.map(function(n){
    return n*2;
});
console.log(duplicados);

//.filter()para encontrar mayores a 10
let valores = [5,12,8,20,3,15];
let mayoresA10 = valores.filter(function(v){
    return v > 10;
});
console.log(mayoresA10);

//Crear con tus últimas 5 calificaciones o números random del 1-10,
// y usa .filter() para quedarte solo con los que sean mayores o iguales a 7

//let calificaciones = [7,9,10,5,3,8,9];
//let mayoresA7 = calificaciones.filter(function(c){
  //  return c > 7;
//});
//console.log(mayoresA7);

























function cuadrado(n){
    return n ** 2;
}

let listanumeros = [2,4,6,8,10];

console.log(listanumeros.map(cuadrado));
