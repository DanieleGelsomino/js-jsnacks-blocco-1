//console check
console.log("JS OK!");

/* consegna:
   Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,
   se è dispari inseriscilo nell’array. 
*/

const containerNumber = [];

for (let i = 0; i < 6; i++) {
  const number = prompt("inserisci un numero");
  console.log(number);
  if (number % 2 !== 0) {
    containerNumber.push(number);
  }
  console.log(containerNumber);
}
