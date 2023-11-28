/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let number1 = 5;
let number2 = 10;
console.log("Il primo numero è ", number1);
console.log("Il secondo numero è ", number2);

if (number1 < number2) {
  console.log("Il numero più grande é " + number2);
} else {
  console.log("Il numero più grande é " + number1);
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let number4 = 10;
console.log("Il numero fornito è ", number4);
console.log("Ugualzianza tra il numero fornito e il numero 5", number4 === 5);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let number5 = 12;
console.log("Numero intero fornito", number5);
let division = number5 % 5;
if (division === 0) {
  console.log("Il numero è perfettamente divisibile per 5");
} else {
  console.log(
    "il numero non è perfettamente divisibile per 5 e il suo resto è ",
    division
  );
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let number6 = 11;
let number7 = 2;
console.log("Il primo numero intero è ", number6);
console.log("Il secondo numero intero è ", number7);
let condition =
  number6 === 8 ||
  number7 === 8 ||
  number6 + number7 === 8 ||
  number6 - number7 === 8;
if (condition === true) {
  console.log(
    "il valore di uno dei numeri interi è 8 oppure la loro addizione/sottrazione é uguale a 8"
  );
} else {
  console.log(
    "il valore di uno dei numeri interi NON è 8 oppure la loro addizione/sottrazione é uguale a 8"
  );
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 40;
console.log("Il tuo carrello ammonta a ", totalShoppingCart);
if (totalShoppingCart > 50) {
  console.log("Congratulazioni hai diritto alla spedizione gratuita!");
} else {
  totalShoppingCart = totalShoppingCart + 10;
  console.log(
    "Continua ad acquistare per ricevere la spedizione gratuita,altrimenti il nuovo ammontare del tuo carrello è",
    totalShoppingCart
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let saleTotalShoppingCart = totalShoppingCart - totalShoppingCart * 0.2;
console.log(
  "SEI FORTUNATO OGGI è IL BLACK FIDAY quindi ti verra applicato uno sconto del 20% sui prodotti acquistati!",
  saleTotalShoppingCart
);
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let firstNamber = 5;
let secondNamber = 3;
let thirdNamber = 10;
console.log("Il primo numero è ", firstNamber);
console.log("Il primo numero è ", secondNamber);
console.log("Il primo numero è ", thirdNamber);
console.log("I numeri in ordine decrescente:");
if (firstNamber >= secondNamber && firstNamber >= thirdNamber) {
  if (secondNamber >= thirdNamber) {
    console.log(firstNamber, secondNamber, thirdNamber);
  } else {
    console.log(firstNamber, thirdNamber, secondNamber);
  }
} else if (secondNamber >= firstNamber && secondNamber >= thirdNamber) {
  if (firstNamber >= thirdNamber) {
    console.log(secondNamber, firstNamber, thirdNamber);
  } else {
    console.log(secondNamber, thirdNamber, firstNamber);
  }
} else {
  if (firstNamber >= secondNamber) {
    console.log(thirdNamber, firstNamber, secondNamber);
  } else {
    console.log(thirdNamber, secondNamber, firstNamber);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let testType = 20;
console.log("La variabile inserita è ", testType);
console.log("La variabile inserita è di tipo: ");
console.log(typeof testType);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let number9 = 40;
console.log("Il numero inserito è ", number9);
let dispariOPari = number9 % 2;

if (dispariOPari === 0) {
  console.log("Il numero inserito è pari");
} else {
  console.log("Il numero inserito è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  
*/
let val = 11;
console.log("Il numero inserito è ", val);
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log("L'oggetto dopo la modifica risulta ", me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log("L'oggetto dopo la modifica risulta ", me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const number = [];
console.log("Array VUOTO ", number);
number.push(1);
number.push(2);
number.push(3);
number.push(4);
number.push(5);
number.push(6);
number.push(7);
number.push(8);
number.push(9);
number.push(10);
console.log("Array con numeri da 1 a 10 ", number);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

number[number.length - 1] = 100;
console.log("Array con l'ultimo valore modificato", number);
