function deleteByEmail() {
    let emailInput = document.querySelector('input[name = "email"]');
    let emailRows = Array.from(document.querySelectorAll('tr td:nth-of-type(2)'));
    let result = document.getElementById('result');

    let findEmail = emailRows.find(x =>
        x.textContent == emailInput.value);

    if (findEmail) {
        findEmail.parentElement.remove();
        result.textContent = 'Deleted.'
    } else {
        result.textContent = 'Not found.'
    }
}