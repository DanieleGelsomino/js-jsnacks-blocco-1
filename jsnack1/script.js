// console check
console.log("JS OK!");

/* consegna :
   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
   chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const invitedList = ["danny", "john", "jack", "emily"];

const nameInvited = prompt("Inserisci il tuo nome");

let confirm = false;

for (let i = 0; i < invitedList.length; i++) {
  if (nameInvited.toLowerCase() === invitedList[i]) {
    confirm = true;
    console.log("Puoi entrare");
  } else {
    console.log("Non puoi entrare");
  }
}
