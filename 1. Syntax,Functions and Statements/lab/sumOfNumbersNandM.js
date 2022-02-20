function sumOfNumbers(n, m) {
    let numOne = Number(n);
    let numTwo = Number(m);

    let resultSum = 0;

    for (let i = numOne; i <= numTwo; i++) {
        resultSum += i;

    }
    console.log(resultSum);

}
sumOfNumbers('1', '5')
sumOfNumbers('-8', '20')