function sortArrBy2Criteria(list) {

    let sortedArr = list.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArr.join('\n'));

}
sortArrBy2Criteria(['alpha',
    'beta',
    'gamma'
])
sortArrBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
])