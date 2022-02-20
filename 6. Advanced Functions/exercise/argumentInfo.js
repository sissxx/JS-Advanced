function argumentInfo() {

    let dataObj = {};

    Array.from(arguments)
        .forEach((x) => {
            let type = typeof x;
            console.log(`${type}: ${x}`);

            if (!dataObj[type]) {
                dataObj[type] = 0;
            };
            dataObj[type]++;

        });

    Object.keys(dataObj)
        .sort((a, b) => dataObj[b] - dataObj[a])
        .forEach((keys) => console.log(`${keys} = ${dataObj[keys]}`));

}
argumentInfo('cat', 42, function () {
    console.log('Hello world!');
})