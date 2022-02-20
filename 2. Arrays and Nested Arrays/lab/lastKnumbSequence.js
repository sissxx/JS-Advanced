function lastKSequence(n, k) {
    let numsArr = []
    numsArr.push(1)
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= i; j++) {
            if (j === i) {
                let startIndex = 0
                if (j - k > 0) {
                    startIndex = j - k
                }
                let digits = numsArr.slice(startIndex)
                let sum = digits.reduce((sum, el) => sum += el)
                numsArr.push(sum)
            }
        }
    }
    return numsArr;
}
lastKnumbSequence(6, 3);
lastKnumbSequence(8, 2);