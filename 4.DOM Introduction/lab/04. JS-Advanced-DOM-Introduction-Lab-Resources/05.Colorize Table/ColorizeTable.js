function colorize() {

    let tableRows = document.getElementsByTagName("tr");
    let rows = Array.from(tableRows);

    rows.forEach((x, i) => {
        if (i % 2 !== 0) {
            x.style.backgroundColor = "teal";
        }
    })
}