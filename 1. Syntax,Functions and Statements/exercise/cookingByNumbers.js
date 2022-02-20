function cookingByNumber(num, p1, p2, p3, p4, p5) {

    let inputNumber = Number(num);
    let currentOperation = [p1, p2, p3, p4, p5];

    let chop = function () {
        return inputNumber / 2;
    }
    let dice = function () {
        return Math.sqrt(inputNumber);
    }
    let spice = function () {
        return inputNumber + 1;
    }
    let bake = function () {
        return inputNumber * 3;
    }
    let fillet = function () {
        return inputNumber * 0.80;
    }

    for (let i = 0; i < currentOperation.length; i++) {
        let operations = currentOperation[i];

        switch (operations) {
            case 'chop':
                inputNumber = chop(inputNumber);
                console.log(inputNumber);
                break;
            case 'dice':
                inputNumber = dice(inputNumber);
                console.log(inputNumber);
                break;
            case 'spice':
                inputNumber = spice(inputNumber);
                console.log(inputNumber);
                break;
            case 'bake':
                inputNumber = bake(inputNumber);
                console.log(inputNumber);
                break;
            case 'fillet':
                inputNumber = fillet(inputNumber);
                console.log(inputNumber);
                break;

            default:
                break;
        }

    }
}
cookingByNumber("9", "dice", "spice", "chop", "bake", "fillet")