function storeCatalogue(list) {

    let result = list.sort((a, b) => a.localeCompare(b));
    let listL = result.length;
    let firstLetter = '';


    for (let i = 0; i < listL; i++) {

        let [product, price] = result[i].split(' : ');

        if (product[0] !== firstLetter) {
            console.log(product[0]);
        }
        console.log(`  ${product}: ${price}`);
        firstLetter = product[0];

    }

}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])