const validateEmail = require('../src/emailValidator');

test('Valid Email: abc@bridgelabz.co', () => {
    expect(validateEmail('abc@bridgelabz.co')).toBe(true);
});

test('Valid Email: abc@bridgelabz.co.in', () => {
    expect(validateEmail('abc@bridgelabz.co.in')).toBe(true);
});

test('Invalid Email: xyz@bridgelabz.co', () => {
    expect(validateEmail('xyz@bridgelabz.co')).toBe(false);
});

test('Invalid Email: abc.xyz@bridgelabz.co', () => {
    expect(validateEmail('abc.xyz@bridgelabz.co')).toBe(false);
});

test('Invalid Email: abc@xyz.co', () => {
    expect(validateEmail('abc@xyz.co')).toBe(false);
});
