let showMessage = () => {
    let name = prompt('Как тебя зовут?', );
    alert(`Привет, ${name}!`);


};


function anssum() {
    var a = document.getElementById('argument1').value;
    console.log(a);
    var b = document.getElementById('argument2').value;
    console.log(b);

    let anssumma = Number(a) + Number(b);
    console.log(anssumma);
    let summa = document.getElementById('summa').value = anssumma;

}

function anssub() {
    var a = document.getElementById('argument1').value;
    console.log(a);
    var b = document.getElementById('argument2').value;
    console.log(b);

    let anssub = Number(a) - Number(b);
    console.log(anssub);
    let subb = document.getElementById('sub').value = anssub;
}

function ansdiv() {
    var a = document.getElementById('argument1').value;
    console.log(a);
    var b = document.getElementById('argument2').value;
    console.log(b);

    let ansdiv = Number(a) / Number(b);
    console.log(ansdiv);
    let div = document.getElementById('div').value = ansdiv;
}

function ansmult() {
    var a = document.getElementById('argument1').value;
    console.log(a);
    var b = document.getElementById('argument2').value;
    console.log(b);

    let ansmult = Number(a) * Number(b);
    console.log(ansmult);
    let mult = document.getElementById('mult').value = ansmult;

}