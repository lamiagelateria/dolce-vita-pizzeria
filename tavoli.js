function salvaStatoTavoli(tavoli){

localStorage.setItem(
"statiTavoli",
JSON.stringify(tavoli)
);

}



function caricaStatoTavoli(){

let dati =
localStorage.getItem("statiTavoli");


if(dati){

return JSON.parse(dati);

}


return {};

}




function occupaTavolo(numero){

let tavoli =
caricaStatoTavoli();


tavoli[numero]="occupato";


salvaStatoTavoli(tavoli);

}




function liberaTavolo(numero){

let tavoli =
caricaStatoTavoli();


tavoli[numero]="libero";


salvaStatoTavoli(tavoli);

}




function prenotaTavolo(numero){

let tavoli =
caricaStatoTavoli();


tavoli[numero]="prenotato";


salvaStatoTavoli(tavoli);

}
