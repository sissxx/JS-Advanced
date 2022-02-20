function addItem() {
    let inputElement = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');

    let li = document.createElement('li');
    li.textContent = inputElement.value;
    ulElement.appendChild(li);

}