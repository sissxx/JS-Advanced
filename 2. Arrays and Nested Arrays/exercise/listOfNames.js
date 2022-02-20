function listOfNames(arr) {

    let sortedNames = arr.sort((a, b) => a.localeCompare(b));
    let counter = 1;

    // for (let name of sortedNames) {
    //     console.log(`${counter++}.${name}`);

    // }

    sortedNames.forEach((x) => {
        console.log(`${counter++}.${x}`);
    })

}
listOfNames(["John", "Bob", "Christina", "Ema"])