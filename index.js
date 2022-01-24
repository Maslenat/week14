let showMessage = () => {
    let name = prompt('Как тебя зовут?', );
    alert(`Привет, ${name}!`);


};



/* Калькулятор */

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
    if (b!=0){
    let ansdiv = Number(a) / Number(b);
    console.log(ansdiv);
    let div = document.getElementById('div').value = ansdiv;}
    else { alert ("На 0 делить нельзя!");}
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
/* Задание с дивами */

function ChangeMe ()
{
    let divs=document.querySelectorAll('#block>div');
  console.log(divs);
  divs[0].style.background="black";
  divs[1].style.background="blue";
  divs[2].style.background="red";
  
}


/* Галерея */

function RightArrow()
{
    let img=document.getElementById('img');
    img.src="./img/rose.jpg";
}

function LeftArrow()
{
    let img=document.getElementById('img');
    img.src="./img/Prince.jpg";
}



