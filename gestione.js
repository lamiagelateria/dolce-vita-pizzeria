// DOLCE VITA - GESTIONE DATI


function salvaDati(nome, dati){

localStorage.setItem(
nome,
JSON.stringify(dati)
);

}



function caricaDati(nome){

let dati =
localStorage.getItem(nome);


if(dati){

return JSON.parse(dati);

}


return [];

}




function aggiungiOrdine(ordine){


let ordini =
caricaDati("ordini");


ordini.push(ordine);


salvaDati(
"ordini",
ordini
);


}




function eliminaOrdine(indice){


let ordini =
caricaDati("ordini");


ordini.splice(indice,1);


salvaDati(
"ordini",
ordini
);


}




function svuotaOrdini(){

localStorage.removeItem("ordini");

}
