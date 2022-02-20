function sortArr(numbArr, criteria) {

    if (criteria == 'asc') {

        numbArr.sort((a, b) => a - b);

    } else {
        numbArr.sort((a, b) => b - a);

    }
    return numbArr;

}
sortArr([14, 7, 17, 6, 8], 'asc');