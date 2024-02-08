



//html
const griglia = document.getElementById('griglia');
const button = document.getElementById('button');

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

    let n = Math.floor(Math.random() * 90 + 1);

    const found = numeriEstratti.indexOf(n);
    console.log('found ' + found);

    if (found > 0) {
        estraiNumero();
    }
    console.log('found ' + found);

    

    numeriEstratti.push(n);
    console.log(numeriEstratti);
};





button.addEventListener('click', function () {
    estraiNumero();
    stampaGriglia();

});

stampaGriglia();