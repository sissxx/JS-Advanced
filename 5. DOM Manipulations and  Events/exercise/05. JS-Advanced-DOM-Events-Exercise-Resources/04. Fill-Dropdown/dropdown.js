function addItem() {
    let inputTextElement = document.getElementById('newItemText').value;
    let inputValueElement = document.getElementById('newItemValue').value;
    let menu = document.getElementById('menu');

    let option = document.createElement('option');
    option.value = inputValueElement;
    option.textContent = inputTextElement;
    menu.appendChild(option);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

}