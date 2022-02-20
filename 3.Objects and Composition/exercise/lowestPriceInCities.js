function lowesPriceInCity(arr) {
    let result = [];
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        let [town, product, price] = arr[i].split(' | ');

        if (result.filter(x => x.product === product).length > 0) {
            let obj = result.find(x => x.product === product);

            if (obj.price > Number(price)) {
                obj.town = town;
                
                obj.price =Number(price);
            }
        } else {
            let obj = {
                product,
                town,
                price: Number(price)
            }
            result.push(obj)
        }


    }
    for (let product of result) {

        console.log(`${product.product} -> ${product.price} (${product.town})`);
    }

}
lowesPriceInCity(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
])

