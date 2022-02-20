function stringLength(a, b, c) {
    let sumLength = Number(a.length + b.length + c.length);
    console.log(sumLength);
    let averageLength = Math.floor(sumLength / 3);
    console.log(averageLength);

}
stringLength('chocolate', 'ice cream', 'cake');