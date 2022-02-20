function magigMatrices(arr) {
    
    let sum = arr[0].reduce((a, b) => a + b);

    for (let i = 0; i < arr[0].length; i++) {

        let currCol = 0;

        for (let j = 0; j < arr.length; j++) {
            currCol += arr[j][i];
        }
        if (currCol !== sum) {
            return false;
        }
    }

    return true;

}

magigMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
])