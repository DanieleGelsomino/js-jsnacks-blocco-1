// console check
console.log("JS OK!");

/* consegna :
   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
   chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const invitedList = ["danny", "john", "jack", "emily"];

const nameInvited = prompt("Inserisci il tuo nome");

// questa variabile serve per capire se ho trovato il nome oppure no all'interno del mio array,
//inizialmente è falsa perchè non ho trovato il nome dato che non ho cominciato a guardare nell'array.

let trovato = false;

for (let i = 0; i < invitedList.length; i++) {
  if (nameInvited.trim().toLowerCase() === invitedList[i]) {
    // ho trovato il nome
    console.log("Puoi entrare");
    trovato = true;
    const confermaLista = document.getElementById("confirm");
    const conferma = confermaLista;
    conferma.innerText = "Puoi entrare " + nameInvited + " sei in lista.";
  }
}

if (trovato == false) {
  // questo vuol dire che non ho trovato il nome
  console.log("Non puoi entrare");
  const confermaLista = document.getElementById("confirm");
  const conferma = confermaLista;
  conferma.innerText =
    " Non puoi entrare " + nameInvited + " purtroppo non sei in lista.";
}
