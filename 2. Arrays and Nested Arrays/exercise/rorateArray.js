function rotateArr(arr, num) {

    for (let i = 0; i < num; i++) {
        let taken = arr.pop();
        arr.unshift(taken);

    }
    console.log(arr.join(' '));
}
rotateArr(['1', 
'2', 
'3', 
'4'], 
2


)