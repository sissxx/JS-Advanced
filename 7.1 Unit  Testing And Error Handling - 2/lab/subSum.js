function subSum(numsArr, start, end) {

    if (!Array.isArray(numsArr)) {
        return NaN;
    };
    let lengthArr = numsArr.length;

    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, lengthArr - 1);

    let slicedArr = numsArr.slice(startIndex, endIndex +1);
 
    let sum = slicedArr.reduce((a, c) => a + Number(c),0);

    return sum;

}
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
module.exports = subSum;