function dayMonth(month, year) {
    return new Date(year, month, 0).getDate();
    
}
console.log(dayMonth(2, 2021)); 