// Validating mandatory parts of email: '@', 'bridgelabz', '.', and 'co'
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@bridgelabz\.co(\..+)?$/;
    return emailRegex.test(email);
}

// Exporting function for testing
module.exports = validateEmail;


