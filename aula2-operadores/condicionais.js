// -----------------------------------------------
// ESTRUTURA CONDICIONAIS SIMPLES
// -----------------------------------------------

// IF = SE
// if só executa se a condição for VERDADEIRA

let sensorTemp = 20;
if (sensorTemp >= 26) {
    console.log("Ligar ar condicionado");
}

console.log("FIM");

// -----------------------------------------------
// ESTRUTURA CONDICIONAIS COMPOSTA
// -----------------------------------------------


let idade = 30;

if (idade < 18){
    console.log("DIMENÓ");
    console.log(`O jovem capetinha tem ${idade} ano(s)`);
} else {
    console.log("DIMAIÓ");
    console.log(`A idade do carinha é ${idade}`);
}


// -----------------------------------------------
// ESTRUTURA CONDICIONAL ENCADEADA
// -----------------------------------------------


let mae = "rihanna";

// if (mae == "beyonce") {
//     console.log("TU É MTO RICO");
// } else {
//     if (mae == "rihanna") {
//         console.log("VOCÊ É UM POUCO MENOS RICO");
//     } else {
//         console.log("TU É F****");
//     }
// }

// ESTRUTURA CONDICIONAL ENCADEADA MELHORADA...
mae = "pabLao".toLowerCase();
let pai = "tamy";

if (mae == "beyonce") {
    console.log("TU É MTO RICO");
} else if (mae == "rihanna") {
    console.log("VOCÊ É UM POUCO MENOS RICO");
} else if (mae == "pablao" && pai == "tamy") {
    console.log("EH, NAO SEI OQ DIZER");
} else {
    console.log("Pobre BR");
}