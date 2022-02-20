class Hex {
    constructor(value) {
        this.value = value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();;
    };

    valueOf() {
        return this.value;
    };
    
    //should add a number or Hex object and return a new Hex object.
    plus(input) {
        if (typeof input === 'object') {
            let result = this.value + input.value;
            return new Hex(result);
        } else {
            let result = this.value + input;
            return new Hex(result);
        }

    }
    //should subtract a number or Hex object and return a new Hex object.
    minus(input) {
        if (typeof input === 'object') {
            let result = this.value - input.value;
            return new Hex(result);
        } else {
            let result = this.value - input;
            return new Hex(result);
        }
    }
    parse(sting) {
        return parseInt(number, 16);
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));