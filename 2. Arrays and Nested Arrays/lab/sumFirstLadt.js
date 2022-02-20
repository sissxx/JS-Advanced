function sumFirstAndLat(input) {

    let firstElemet = Number(input.shift());
    let lastElement = Number(input.pop());
    let sum = firstElemet  + lastElement;
    console.log(sum);

}
sumFirstAndLat(['20', '30', '40'])