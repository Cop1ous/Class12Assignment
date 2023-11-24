const registration = require('../Javascript/registration');

test('Registering for a BCIT course', () => {
    expect(registration("Jason Wilder", "COMP 2601", "Programming Fundamentals Part 3 (Object Design)")).toBe("You have registered for the course COMP 2601, Programming Fundamentals Part 3 (Object Design) with the teacher Jason Wilder.");
});