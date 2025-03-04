const validateEmail = require('../src/emailValidator');

test('Valid Email: abc@bridgelabz.co', () => {
    expect(validateEmail('abc@bridgelabz.co')).toBe(true);
});

test('Valid Email: xyz@bridgelabz.co.in', () => {
    expect(validateEmail('xyz@bridgelabz.co.in')).toBe(true);
});

test('Invalid Email: abc@bridgelabzcom', () => {
    expect(validateEmail('abc@bridgelabzcom')).toBe(false);
});

test('Invalid Email: abc@bridgelabz.xyz', () => {
    expect(validateEmail('abc@bridgelabz.xyz')).toBe(false);
});

test('Invalid Email: abc@xyz.co', () => {
    expect(validateEmail('abc@xyz.co')).toBe(false);
});

