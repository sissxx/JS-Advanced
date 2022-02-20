function biggerHalf(arr) {

    arr = arr.sort((a, b) =>
        a - b).slice((arr.length / 2), arr.length);


return arr;

}
biggerHalf([3, 19, 14, 7, 2, 19, 6])