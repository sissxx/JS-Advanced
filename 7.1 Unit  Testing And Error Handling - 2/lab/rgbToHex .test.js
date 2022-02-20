const expect = require("chai").expect;
const rgbToHexColor = require('./rgbToHex');

describe('', () => {

    it('If input is Nan', () => {
        expect(rgbToHexColor('256', '0', 1)).to.be.undefined;
    });
    it('If input is negative number', () => {
        expect(rgbToHexColor(-1, 0, 1)).to.be.undefined;
    });


    // it('If input is negative number', () => {
    //     let red = -1;
    //     let green = 0;
    //     let blue = 1;

    //     let actualNumber = rgbToHexColor(red, green, blue)

    //     expect(actualNumber).to.be.undefined;
    // });

    it('If input is bigger than 255', () => {
        expect(rgbToHexColor(256, 0, 1)).to.be.undefined;
    });
    it('"red", "green", "blue" = undefined', () => {
        expect(rgbToHexColor('red', 'green', 'blue')).to.be.undefined;
    });
    it('255, 255 = undefined', () => {
        expect(rgbToHexColor(255, 255)).to.be.undefined;
    });

    it('255, 255, 255 = "#FFFFFF"', () => { // white
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it('0, 0, 0 = "#000000"', () => { // black
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    // it('94, 0, 255 = "#5E00FF"', () => {
    //     expect(rgbToHexColor(94, 0, 255)).to.equal('#5E00FF');
    // }); 

    // it('240, 36, 255 = "#F024FF"', () => {
    //     expect(rgbToHexColor(240, 36, 255)).to.equal('#F024FF');
    // });


});