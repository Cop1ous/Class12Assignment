const carForSale = require('../Javascript/carforsale');

test('Car for sale', () => {
    expect(carForSale({})).toStrictEqual({"airbags": 8, "colour": "Black Metallic", "cost": 93735, "model": "Tundra Hybrid CrewMax Platinum"});
});