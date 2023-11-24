const snacks = require('../Javascript/snacks');

test('Snacks to eat', () => {
    expect(snacks()).toBe("mars bars,\nchocolate cake,\negg tart");
});