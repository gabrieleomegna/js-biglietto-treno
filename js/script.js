/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va scritto in pagina in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
 */


// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const userDistance = parseInt(prompt('How many kilometers do you want to travel?'));
const userAge = parseInt(prompt('How old are you'));

console.log ('The distance is:', userDistance);
console.log ('Your age is:', userAge);

//il prezzo del biglietto è definito in base ai km (0.21 € al km)
const priceStandard = 0.21 * userDistance;
console.log ('Price standard is:',priceStandard,'€');

//va applicato uno sconto del 20% per i minorenni
let priceDiscounted;
if (userAge < 18) {
    priceDiscounted = priceStandard - ((priceStandard / 100) * 20);
    console.log ('There is 20% of discount, so the final price is:', priceDiscounted);
  //va applicato uno sconto del 40% per gli over 65.
} else if (userAge >= 65) { 
    priceDiscounted = priceStandard - ((priceStandard / 100) * 40);
    console.log ('There is 40% of discount, so the final price is:', priceDiscounted);
} else {
    console.log ('There is no discount');
}

// L'output del prezzo finale va scritto in pagina in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
document.getElementById('output').innerHTML = 'The final price is:' + priceDiscounted ;
