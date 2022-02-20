function matchOperation(a, b, operation) {

    let result;
    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        case '%':
            result = a % b;
            break;
        case '**':
            result = a ** b;
            break;

        default:
            break;

    }
    console.log(result);
}
matchOperation(5, 6, '+');
matchOperation(3, 5.5, '*')