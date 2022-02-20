function sumTable() {
    let costElement = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultElement = document.getElementById('sum');

    let arrPrice = Array.from(costElement);
    let sum = 0;

    for (let i = 0; i < arrPrice.length - 1; i++) {
        sum += Number(arrPrice[i].textContent);
    }
    resultElement.textContent = sum;

}