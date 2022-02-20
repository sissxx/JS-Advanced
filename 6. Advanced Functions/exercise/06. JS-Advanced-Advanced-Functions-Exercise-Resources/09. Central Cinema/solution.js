function solve() {

    let name = document.querySelector('#container input:nth-of-type(1)');
    let hall = document.querySelector('#container input:nth-of-type(2)');
    let price = document.querySelector('#container input:nth-of-type(3)');
    let btnOnScreen = document.querySelector('#container button');

    let ulMoviesElement = document.querySelector('#movies ul');
    let ulArchiveElement = document.querySelector('#archive ul');

    let buttonClearElement = document.querySelector('#archive button');


    btnOnScreen.addEventListener('click', onClick);



}