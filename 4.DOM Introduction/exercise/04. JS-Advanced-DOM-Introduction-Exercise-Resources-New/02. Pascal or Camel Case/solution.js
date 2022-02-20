function solve() {

    let textInputElement = document.getElementById('text').value;
    let convectionInput = document.getElementById('naming-convention').value;

    let result = '';

    if (convectionInput === 'Camel Case') {

        for (let i = 0; i < textInputElement.length; i++) {

            if (textInputElement[i] == ' ') {
                result += (textInputElement[i + 1].toUpperCase());
                i++;
            } else {
                result += textInputElement[i].toLowerCase();
            }
        }

    } else if (convectionInput === 'Pascal Case') {

        result += textInputElement[0].toUpperCase();

        for (let i = 1; i < textInputElement.length; i++) {

            if (textInputElement[i] == ' ') {
                result += (textInputElement[i + 1].toUpperCase());
                i++;
            } else {
                result += textInputElement[i].toLowerCase();
            }
        }
    } else {
        result = 'Error!';
    }

    let resultSpanElement = document.getElementById('result');
    resultSpanElement.textContent = result;

}