let nomeCognome;
let chilometri;
let sconto;

document.getElementById('prem').addEventListener("click",function() {
    console.log("ciao");
nomeCognome=document.getElementsByClassName('primoInput')[0].value;

chilometri=document.getElementsByClassName('secondoInput')[0].value;

let p = document.getElementById("prova").value;

let costoBiglietto=0.21*chilometri;

if(p=="minorenne") {
   sconto=(costoBiglietto*20)/100;
   var scontoArr=sconto.toFixed(2);
}

else {
 sconto=(costoBiglietto*40)/100;
 var scontoArr=sconto.toFixed(2);
}

let biglietto=`<h1 class="text-light text-center mt-4">
IL TUO BIGLIETTO
</h1>
<div class="container bg-white p-5">
<div class="row" id="bordo">
    <div class="col-3 bg-secondary p-2" id="prima"><b>NOME PASSEGGERO</b> <br> <b>${nomeCognome}</b></div>
    <div class="col-2 p-3 text-center"> <b>Offerta</b> <br> <br> <br> Biglietto Standard</div>
    <div class="col-2 p-3 text-center"><b>Carrozza</b> <br> <br> <br> 5</div>
    <div class="col-2 p-3 text-center"><b>Codice CP</b> <br> <br> <br> 92911</div>
    <div class="col-3 p-3 text-center"><b>Costo Biglietto</b> <br> <br> <br> ${scontoArr}</div>
</div>
</div>`;

document.getElementById('totale').innerHTML+=biglietto;
})



