function carFactory(car) {

    let resultCar = {};
    let engine = {};
    let carriage = {};
    let wheels = [];

    resultCar.model = car.model;

    if (car.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (car.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (car.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }

    carriage.type = car.carriage;
    carriage.color = car.color;


    for (let i = 0; i < 4; i++) {
        if (car.wheelsize % 2 === 0) {
            car.wheelsize--;
        }
        wheels.push(car.wheelsize);
    }

    resultCar.engine = engine;
    resultCar.carriage = carriage;
    resultCar.wheels = wheels;
    return resultCar;

}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14,
})