function sameNumbers(input) {
  
    // let arr = num.toString().split('').map(Number);
    
    // console.log([...new Set(arr)].length === 1);
    // console.log(arr.reduce((a, b) => a + b));

    input = String(input);
 
    let result = true;
    let sum = 0;
 
    let firstDigit = input[0];
    for (let i = 0; i < input.length; i++) {
        sum += +input[i];
 
        if (input[i] !== firstDigit) {
            result = false;
        }
    }
 
    console.log(result);
    console.log(sum);

}
sameNumbers(22222);
sameNumbers(123);