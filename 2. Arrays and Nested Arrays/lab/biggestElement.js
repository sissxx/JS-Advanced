function biggestElement(input) {

    let newArr = [];

    for (let i = 0; i < input.length; i++) {
        let currArr = input[i]; 
        currArr.forEach(el => {
            newArr.push(el);
        });
    }
    console.log(newArr.sort((a, b) => a - b).pop());
}

biggestElement([
    [20, 50, 10],
    [8, 33, 145]
])