// // console.log("Hello World");
// // Declarando variables de diferentes tipos de datos
// let string = "Hola mundo"; // Variable de tipo string
// let number = 10;    // Variable de tipo numero
// let boolean = true; // Variable de tipo boolean
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Variable de tipo array
// let object = { // Variable de tipo objeto
//     nombre: "Juan",
//     edad: 20,
//     pais: "Mexico"
// };
// let nulo = null; // Variable de tipo nulo
// let indefinido = undefined; // Variable de tipo indefinido

// // Imprimiendo variables en consola
// console.log("Tipo de dato de string: " + typeof string);
// console.log("valor de string: " + string);
// console.log("Tipo de dato number: " + typeof number);
// console.log("valor de number: " + number);
// console.log("Tipo de dato boolean: " + typeof boolean);
// console.log("valor de boolean: " + boolean);
// console.log("tipo de dato array: " + typeof array);
// console.log("valor de array: " + array);
// console.log("tipo de dato object: " + typeof object);
// console.log("valor de object: " + object);
// console.log("tipo de dato nulo: " + typeof nulo);
// console.log("valor de nulo: " + nulo);

// // Declaracion de variables
// let x = 5;
// let y = 10;

// // Condicion if
// if (x < y) {
//     console.log("x es menor que y");
// }

// // Condicion if-else
// if (x > y) {
//     console.log("x es mayor que y");
// } else {
//     console.log("x es menor o igual que y");
// }

// // Condicion else-if
// if (x > y) {
//     console.log("x es mayor que y");
// } else if (x === y) {
//     console.log("x es igual a y");
// } else {
//     console.log("x es menor que y");
// }

// // Operador ternario
// let resultado = x > y ? "es mayor que y" : "x es menor o igual que y";
// console.log(resultado);

// // Switch
// let dia = "lunes";
// switch (dia) {
//     case "lunes":
//         console.log("Es lunes");
//         break;
//     case "martes":
//         console.log("Es martes");
//         break;
//     case "miercoles":
//         console.log("Es miercoles");
//         break;
//     default:
//         console.log("Hoy no es lunes, martes ni miercoles");
//         break;
// }

// // Declaracion de una funcion basica con parametros
// function suma(a, b) {
//     return a + b;
// }

// // Declaracion de una funcion asignada a una variable
// const multiply = function (a, b) {
//     return a * b;
// }

// // Declaracion de una funcion anonima
// const divide = function (a, b) {
//     return a / b;
// }

// // Declaracion de una funcion flecha (arrow function)
// const resta = (a, b) => {
//     return a - b;
// }

// // Declaracion de una funcion flecha (arrow function) con una sola linea de codigo
// const modulo = (a, b) => a % b;

// // Llamando a una funcion
// // console.log(suma(5, 10));
// // console.log(multiply(5, 10));
// // console.log(divide(5, 10));
// // console.log(resta(5, 10));

// // Declaramos una funcion que imprime um mensaje despu{es de 2 segundos
// function imprimirMensaje() {
//     setTimeout(function () {
//         console.log("Hola, soy un mensaje asincrónico!");
//     }, 5000);
// }

// // Llamamos a la función para imprimir el mensaje
// imprimirMensaje();

// // Imprimimos un mensaje antes de que se imprima el mensaje asincrónico
// console.log("Estoy imprimiendo un mensaje antes del mensaje asincrónico");

// Declaracion de una variable global
let globalVariable = "Soy global";

// Funcion que retorna una promesa después de un tiempo de espera
function promiseFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("La promesa se resolvió exitosamente");
        }, 5000);
    });
}

// Funcion asincrona que utiliza la promesa y la variable global
async function asyncFunction() {
    try {
        // Esperar la resolucion de la promesa
        const result = await promiseFunction();
        console.log(result);

        // Acceder a la variable global desde dentro de la funcion
        console.log(globalVariable);

        // Declaracion de una variable local dentro de la funcion
        let localVariable = "Soy local";

        // Acceder a la variable local desde dentro de la funcion
        console.log(localVariable);
    } catch (error) {
        console.log(error);
    }
}

// Llama a la funcion asincrona
asyncFunction();
console.log("Esto se muestra ántes de la funcion asíncrona.");
