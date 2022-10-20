const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password-confirmation');

const showError = (input, msg) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.classList.add('error');
    small.textContent = msg;
};

const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.classList.add('success');
};

const isValidEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validateUsername = (username) => {
    if (username.value === '') {
        showError(username, 'Username is required');
    } else if (username.value.length < 3) {
        showError(username, 'Username must be at least 3 characters long');
    } else {
        showSuccess(username);
    }
};

const validateEmail = (email) => {
    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Invalid email address');
    } else {
        showSuccess(email);
    }
};

const validatePassword = (password) => {
    if (password.value === '') {
        showError(password, 'Password is required');
    } else if (password.value.length < 8) {
        showError(password, 'Password must be at least 8 characters long');
    } else {
        showSuccess(password);
    }
};

const validatePasswordConfirmation = (passwordConfirmation) => {
    validatePassword(passwordConfirmation);
    if (passwordConfirmation.value !== password.value) {
        showError(passwordConfirmation, 'Passwords must match');
    } else {
        showSuccess(passwordConfirmation);
    }
};

form.addEventListener('submit', function (e) {
    e.preventDefault();

    validateUsername(username);
    validateEmail(email);
    validatePassword(password);
    validatePasswordConfirmation(passwordConfirmation);
});
