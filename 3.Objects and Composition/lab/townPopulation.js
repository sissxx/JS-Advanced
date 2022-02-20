function townPopulation(arr) {

    let towns = {};

    for (const list of arr) {
        let [town, populationText] = list.split(' <-> ');
        let population = Number(populationText);

        if (!towns[town]) {
            towns[town] = 0;
        }

        towns[town] += population;
    }
    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`);

    }

}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
])