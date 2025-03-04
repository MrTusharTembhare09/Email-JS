const validateEmail = require('../src/emailValidator');

test('Valid Email: abc@bridgelabz.co', () => {
    expect(validateEmail('abc@bridgelabz.co')).toBe(true);
});

test('Valid Email: abc.xyz@bridgelabz.co', () => {
    expect(validateEmail('abc.xyz@bridgelabz.co')).toBe(true);
});

test('Valid Email: abc_xyz@bridgelabz.co.in', () => {
    expect(validateEmail('abc_xyz@bridgelabz.co.in')).toBe(true);
});

test('Valid Email: abc-xyz@bridgelabz.co.us', () => {
    expect(validateEmail('abc-xyz@bridgelabz.co.us')).toBe(true);
});

test('Valid Email: abc+xyz@bridgelabz.co.uk', () => {
    expect(validateEmail('abc+xyz@bridgelabz.co.uk')).toBe(true);
});

test('Invalid Email: abc@bridgelabzcom', () => {
    expect(validateEmail('abc@bridgelabzcom')).toBe(false);
});

test('Invalid Email: abc@xyz.co', () => {
    expect(validateEmail('abc@xyz.co')).toBe(false);
});

test('Invalid Email: abc@bridgelabz.co.ind', () => {
    expect(validateEmail('abc@bridgelabz.co.ind')).toBe(false);
});

test('Invalid Email: abc@bridgelabz.co.123', () => {
    expect(validateEmail('abc@bridgelabz.co.123')).toBe(false);
});
