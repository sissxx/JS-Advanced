function townsTotJson(arr) {
    let output = [];
    let names = arr.shift().split('|');
    console.log(names);

}
townsTotJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
])