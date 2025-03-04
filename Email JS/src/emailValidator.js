// Validating mandatory and optional parts of the email including optional 2-character TLD
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;
    return emailRegex.test(email);
}

// Exporting function for testing
module.exports = validateEmail;





