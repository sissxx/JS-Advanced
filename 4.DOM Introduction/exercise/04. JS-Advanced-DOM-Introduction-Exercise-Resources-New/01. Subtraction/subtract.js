    function subtract() {
        let firstInputElement = Number(document.getElementById('firstNumber').value);
        let secondInputElement = Number(document.getElementById('secondNumber').value);
        let resultElement = document.getElementById('result');

        let increment = firstInputElement - secondInputElement;

        resultElement.textContent = increment;
    }