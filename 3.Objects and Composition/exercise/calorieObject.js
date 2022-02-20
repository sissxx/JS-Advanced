function calorieObj(arr) {

    let arrLength = arr.length;
    let output = {};

    for (let i = 0; i < arrLength; i += 2) {

        let current = arr[i].split(', ');
        let food = arr[i];
        let calorie = Number(arr[i + 1]);

        output[food] = calorie;
    }
    console.log(output);

}
calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])