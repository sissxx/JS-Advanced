function fruits(typeOfFruit, weightInGrams, pricePerKg) {

    let weight = weightInGrams / 1000;
    let money = weight * pricePerKg;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${typeOfFruit}.`);

}
fruits('orange', 2500, 1.80);
fruits('apple', 1563, 2.35)