// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/* 
En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar
un sorteo aleatorio y determinar quién es el "amigo secreto".

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista 
visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el 
resultado en pantalla.

-------------------------------------------------------Fucionalidades:-------------------------------------------------------------------

* Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en
 "Adicionar".

1. Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

2. Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

3 . Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la 
página.

*/
// Array para almacenar los amigos
let amigos = [];
//--------------------------1.-----------------------------
function agregarAmigo() {
   let nameAmigo = document.getElementById("amigo").value.trim();//
   
   if (nameAmigo === ""){
      alert("Por favor ingrese un nombre. ");//Mensaje que emerge si el usuario deja en blanco el input
   }  else {
      amigos.push(nameAmigo);
      document.getElementById("amigo").value = ""; //Limpia el input luego Agragar
      document.getElementById("amigo").focus(); // Enfocar el input después de agregar facilita la inserción

      verAmigos();      //actualizamos la lista
   }
}

//2.--------------------------------------------------------------------
function verAmigos() {
   let listaAmigos = document.getElementById("listaAmigos");
   listaAmigos.innerHTML = ""; //Limpiamos la lista antes de actualizar

   amigos.forEach((elemento) => {
      let listaHTML = document.createElement("li");
      listaHTML.textContent = elemento;
      listaAmigos.appendChild(listaHTML);
   });//Optimizamos el for pon un forEach

}

//3.-------------------------------------------------------------------

function sortearAmigo(){
   let cantidadAmigos = amigos.length;

   if (cantidadAmigos === 0) {
      alert("No hay amigos en la lista. Agrega al menos uno."); // Mensaje si no hay amigos
   } else {
      let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
      let resultadoHTML = document.getElementById("resultado");
      resultadoHTML.innerHTML = `Tu Amigo secreto es : ${amigos[indiceAmigo]}`; // Mostrar el resultado
   }
}
