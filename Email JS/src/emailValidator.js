// Validating mandatory parts of email
function validateEmail(email) {
    const emailRegex = /^abc@bridgelabz\.co(\.in)?$/;
    return emailRegex.test(email);
}

// Exporting function for testing
module.exports = validateEmail;
