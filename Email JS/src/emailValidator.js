// Validating mandatory and optional parts of the email
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)?@bridgelabz\.co(\..+)?$/;
    return emailRegex.test(email);
}

// Exporting function for testing
module.exports = validateEmail;




