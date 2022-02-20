function toggle() {
    let moreButton = document.querySelector('.button');
    let extraText = document.getElementById('extra');

    if (moreButton.textContent === 'More') {
        moreButton.textContent = 'Less';
        extraText.style.display = 'block';
    } else {
        moreButton.textContent = 'More';
        extraText.style.display = 'none';
    }

}