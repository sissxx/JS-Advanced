function heroicInventory(list) {
    let result = [];
    let listL = list.length;

    for (let i = 0; i < listL; i++) {

        let [name, level, items] = list[i].split(' / ')
        level = Number(level);

        items = items ? items.split(', ') : [];

        result.push({
                name,
                level,
                items
            }

        )

    }
    console.log(JSON.stringify(result));

}
heroicInventory(['Isacc / 25 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);