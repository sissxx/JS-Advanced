function cityTaxes(city, population, treasury) {

    let record = {
        name: city,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.taxRate * this.population;
        },
        applyGrowth(percentage) {
            percentage /= 100;
            this.population *= percentage + 1;
        },
        applyRecession(percentage) {
            percentage /= 100;
            this.treasury *= 1 - percentage;
        }

    };
    return record;

}
const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

// {
//     name: 'Tortuga',
//     population: 7000,
//     treasury: 15000,
//     taxRate: 10,
//     collectTaxes: [Function: collectTaxes],
//     applyGrowth: [Function: applyGrowth],
//     applyRecession: [Function: applyRecession]
//   }