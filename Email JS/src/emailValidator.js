// Validating mandatory parts of email: '@' and 'bridgelabz'
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@bridgelabz\..+$/;
    return emailRegex.test(email);
}

// Exporting function for testing
module.exports = validateEmail;

