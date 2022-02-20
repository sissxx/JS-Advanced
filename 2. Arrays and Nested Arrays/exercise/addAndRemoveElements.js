function addAndRemove(arr) {
    let result = [];
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let curr = arr[i];

        if (curr === 'add') {
            result.push(i + 1);
        } else if (curr === 'remove') {
            result.pop();
        }

    }
    if (result <= 0) {
        console.log('Empty');

    } else {
        console.log(result.join('\n'));
    }

}
addAndRemove([
    'remove',
    'remove',
    'remove'
])