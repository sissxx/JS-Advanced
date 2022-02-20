function extractText() {

    let resultInputElement = document.getElementById('result');
    let ulLiElements = document.getElementById('items');

    resultInputElement.textContent = ulLiElements.textContent;
}