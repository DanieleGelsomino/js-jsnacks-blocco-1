// console check
console.log("JS OK!");

/* consegna:
   Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero. 
*/

const inputNumero = prompt("Digita un numero contenente 4 cifre");
const cifra = inputNumero;
const sommaCifre =
  parseInt(cifra[0]) +
  parseInt(cifra[1]) +
  parseInt(cifra[2]) +
  parseInt(cifra[3]);
if (isNaN(inputNumero) || !(inputNumero.length == 4)) {
  alert("Inserisci 4 cifre!");
} else {
  console.log("Hai inserito correttamente!");
  console.log("la somma delle tue cifre è: " + sommaCifre);
}
