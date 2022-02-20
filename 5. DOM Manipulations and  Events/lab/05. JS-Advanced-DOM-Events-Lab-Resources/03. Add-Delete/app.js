function addItem() {
    let inputElements = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');

    let li = document.createElement('li');
    li.textContent = inputElements.value;
    ulElement.appendChild(li);
    inputElements.value = '';

    let a = document.createElement('a');
    a.href = '#';
    a.textContent = '[Delete]';
    li.appendChild(a);

    a.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    })

}