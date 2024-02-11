//html
const griglia = document.getElementById('griglia');
const button = document.getElementById('button');
const estratto = document.getElementById('estratto');
const button2 = document.getElementById('button2');

//variabili globali
let numeri = [];
let numeriEstratti = [];
let numeroEstratto;

const stampaGriglia = () => {

    //cancella vecchia griglia
    griglia.innerHTML = '';

    let index = 1;
    for (j = 0; j < 9; j++) {

        //crea riga    
        const riga = document.createElement('div');
        riga.classList.add("riga");

        for (let i = 0; i < 10; i++) {
            const cella = document.createElement('div');

            //evidenzia numero estratto
            if (numeriEstratti.indexOf(index) > -1) {
                cella.classList.add('cellaEvidenziata');
            } else {
                cella.classList.add('cella');
            }

            const divNumero = document.createElement('div');
            divNumero.innerText = index++;
            divNumero.classList.add('numero');
            cella.appendChild(divNumero);
            riga.appendChild(cella);
        }
        griglia.appendChild(riga);
    }
};

const estraiNumero = () => {

    //gioco completato
    if (numeriEstratti.length == 90) {
        return;
    }

    let n = Math.floor(Math.random() * 90 + 1);
    const found = numeriEstratti.indexOf(n);
    if (found > -1) {
        estraiNumero();
    } else {
        numeriEstratti.push(n);

        //crea div testo
        estratto.innerHTML = '';
        const testo = document.createElement('div');
        testo.innerText = n;
        estratto.appendChild(testo);
    }
};

//click estrai numero
button.addEventListener('click', function () {
    estraiNumero();
    stampaGriglia();
});

//click rigioca
button2.addEventListener('click', function () {
    numeriEstratti = [];
    estratto.innerHTML = '';
    stampaGriglia();
});

//inizio
addEventListener('load', stampaGriglia);