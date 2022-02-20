function peaceOfPie(arr, startSectionFlavor, endSectionFlavor) {

    //starting at the first flavor parameter, and ending at 
    // (and including) the second flavor parameter.
    let newArr = arr.slice(arr.indexOf(startSectionFlavor),
        arr.indexOf(endSectionFlavor) + 1);
    return newArr;

    //output is the return value of the function 
    //and should be an array of strings.
}
peaceOfPie(['Pumpkin Pie',
        'Key Lime Pie', // 1
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)