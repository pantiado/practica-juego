/* let titulo  = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10'; */

/* function intentoUsuario(){
    alert('click desde la funcion');
}
 */

/* function mensajeConsola(){
    console.log('Hola mundo');
}

let mensajeCon = mensajeConsola(); */

/* let altura = parseFloat(prompt ('ingresa tu altura'));
let peso = parseFloat(prompt('ingresa tu peso'));
let imc;

calcularIMC(altura, peso);

function calcularIMC(valorAltura,valorPeso){
  imc = valorPeso/(valorAltura*valorAltura);
  return imc;
}

console.log(imc);


/* let numeroMultiplicar =  parseInt(prompt('ingresa el numero a multiplicar'));
let contador = 1
let resultado;

while (contador <= 10){
  multiplicador(numeroMultiplicar, contador)
  console.log(`${numeroMultiplicar} x ${contador} = ${resultado}`);
  contador++;
}

function multiplicador(vnumeroMultiplicar,vcontador) {
  resultado = vnumeroMultiplicar * vcontador;
  return resultado;
} */

//------------------------------------------------------------------------------------------

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
console.log(numeroSecreto);
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //el usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sorteron todos los numeros posibles");
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto!");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  console.log(numeroSecreto);
}
function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalo de números
  //Generar el número aleatorio
  //Inicializar el número intentos
  condicionesIniciales();
  //Deshabilitar el botón de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

//------------------------------------------------------------------------------------------

/* //Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let listaDeProgramacion = ["javascript", "c", "c++", "kotlin", "python"];
//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
listaDeProgramacion.push("java", "ruby", "golang");
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
console.log(listaDeProgramacion);
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
let tamanoLista = listaDeProgramacion.length - 1;
//let restador = 1;
function listaInversa() {
  while (tamanoLista >= 0) {
    console.log(listaDeProgramacion[tamanoLista]);
    tamanoLista--;
  }
}
listaInversa(); */
//Crea una función que calcule el promedio de los elementos en una lista de números.
/* let listaNumeros = [34, 30, 30, 34];
let suma = 0;
let resultado = 0;
function promedio(indice) {
  while (indice > 0) {
    suma = suma + listaNumeros[indice - 1];
    indice--;
  }
  resultado = suma / listaNumeros.length;
  console.log(`el promedio de ${listaNumeros} es: ${resultado}`);
  return;
}
promedio(listaNumeros.length); */
//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.


//Crea una función que devuelva la suma de todos los elementos en una lista.

/* let listaSuma = [34, 30, 30, 34];
let suma = 0;
function promedio(indice) {
  while (indice > 0) {
    suma = suma + listaSuma[indice - 1];
    indice--;
  }
  console.log(`el resulado de la suma de ${listaSuma} es: ${suma}`);
  return;
}
promedio(listaSuma.length);
//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
} */
/* let numeroIngresado = parseInt(prompt('ingresa el numero'));
let listadoDeNumeros = [23,54,34,76,12];
encontrarIndiceElemento(listadoDeNumeros, numeroIngresado); */

//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
