function calc() {
    // TODO: sum = num1 + num2

    let firstNumber = Number(document.getElementById('num1').value);
    let secondNumber = Number(document.getElementById('num2').value);
    let sumInput = document.getElementById('sum');

    sumInput.value = firstNumber + secondNumber;

}