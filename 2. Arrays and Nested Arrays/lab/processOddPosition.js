function processOddPosition(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        if (i % 2 !== 0) {
            currentNumber *= 2;
            newArr.push(currentNumber);

        }
    }
    return newArr.reverse().join(' ');

// SHORT RESULT

    let result = arr.reduce((acc, el, index) => {
        if (index % 2 !== 0) {
            acc.push(el * 2);
        }
        return acc;
    }, [])
    return result.reverse();

}
processOddPosition([10, 15, 20, 25]);
processOddPosition([3, 0, 10, 4, 7, 3]);