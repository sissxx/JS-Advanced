function smallestTwoNumbers(arr) {

    arr = arr.sort(function (a, b) {
        return a - b;
    })
    return arr[0] + " " + arr[1];
}
smallestTwoNumbers([30, 15, 50, 5])


//15 - 30 = -15
//50 - 15 = 35
//50 - 30 = 20
//5 - 30 = -25
//5 - 15 = -10