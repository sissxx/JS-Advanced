function counterBuilder() {
    let counter = 0;

    return function c() {
        counter++;
        console.log(counter);
    }
}

let counter = counterBuilder(); //  high - order 
// function, връща функция, която се запазва в променливата counter
let counter2 = counterBuilder();
counter(); // impure func - защото всяко следващо извикване не връща същия резултат
counter();
counter();
counter();

counter2();
