function negativeOrPositive(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let currentNumber = input[i];
        if (currentNumber < 0) {
            result.unshift(currentNumber);

        } else {
            result.push(currentNumber);
        }
    }
    console.log(result.join('\n'));

}
negativeOrPositive([7, -2, 8, 9])