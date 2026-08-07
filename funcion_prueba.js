// function openOrSenior(data){
//     let resultados = [];
//     for (let i = 0; i< data.length; i++){
//         let age = data[i][0];
//         let handicap = data[i][1];

//         if(age >= 55 && handicap > 7){
//             resultados.push("Senior");
//         }else{
//             resultados.push("Open");
//         }
//     }
//     return resultados;

// }
// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))






const inventarioSucio = [100, "50", null, 20, "gratis", 40, undefined, 10];

// TU MISIÓN:
// 1. Usa .filter() para quedarte ÚNICAMENTE con los elementos cuyo tipo de dato sea 'number'.
//    Pista: Usa 'typeof' para verificar que sea exactamente 'number'.
// 2. Encadena otro .filter() para filtrar solo los números mayores a 15.
// 3. Imprime el resultado en consola.

let inventarioLimpio = inventarioSucio
  .filter(item => typeof item === 'number')
  .filter(item => item > 15);

console.log("Inventario filtrado y limpio:", inventarioLimpio);
// Resultado esperado en consola: [ 100, 20, 40 ]



const usuarios = [
  { nombre: "Carlos", edad: 25, activo: true },
  { nombre: "Ana", edad: 17, activo: true },
  { nombre: "Mateo", edad: 30, activo: false },
  { nombre: "Sofía", edad: 22, activo: true },
  { nombre: "Lucas", edad: 15, activo: false }
];

// TU MISIÓN:
// 1. Usa .filter() para quedarte solo con los usuarios que sean MAYORES DE EDAD (edad >= 18)
//    Y que además estén ACTIVOS (activo === true).
// 2. Encadena .map() para extraer ÚNICAMENTE el nombre de esos usuarios.
// 3. Guarda el resultado en 'usuariosValidos'.

let usuariosValidos = usuarios
  .filter(usuario => usuario.edad >= 18 & usuario.activo === true)
  .map(usuario => usuario.nombre);

console.log("Nombres de usuarios válidos:", usuariosValidos);
// Resultado esperado en consola: [ "Carlos", "Sofía" ]

