const decendNumbers = require('../Javascript/decendNumbers');

test('Ordering array in decending order', () => {
    expect(decendNumbers([3,15,11,40,1])).toStrictEqual([40,15,11,3,1]);
});