const validateEmail = require('../src/emailValidator');

test('Valid Email: abc@bridgelabz.com', () => {
    expect(validateEmail('abc@bridgelabz.com')).toBe(true);
});

test('Valid Email: xyz@bridgelabz.in', () => {
    expect(validateEmail('xyz@bridgelabz.in')).toBe(true);
});

test('Invalid Email: abc@xyz.com', () => {
    expect(validateEmail('abc@xyz.com')).toBe(false);
});

test('Invalid Email: abc.bridgelabz.com', () => {
    expect(validateEmail('abc.bridgelabz.com')).toBe(false);
});

test('Invalid Email: abc@bridgelabz', () => {
    expect(validateEmail('abc@bridgelabz')).toBe(false);
});

