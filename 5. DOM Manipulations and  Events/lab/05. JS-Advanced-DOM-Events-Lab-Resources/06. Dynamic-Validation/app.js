function validate() {
    let emailPatt = /[a-z]+\@[a-z]+\.[a-z]+/g;
    let inputElement = document.querySelector("#email");

    inputElement.addEventListener("change", (e) => {
        // const className = emailPatt.test(e.target.value) ? "" : "error";
        // e.target.className = className;
        if (emailPatt.test(inputElement.value)) {
            e.target.className = '';

        } else {
            e.target.className = 'error';
        }
    });

}