const form = document.querySelector('form.cards');
const fields = form.querySelectorAll('.input');
const validateButton = form.querySelector('.button');


function generateError() {
    let error = document.createElement('span');
    error.className = 'error';
    error.style.color = 'red';
    error.textContent = '*';
    error.style.padding = '3px';

    // for (let i = 0; i < fields.length; i++) {
    //     fields[i].style.borderColor = 'red';
    // }

    return error;
}

function removeValidation() {
    let errors = form.querySelectorAll('.error');

    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }
}

function checkField() {
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            let error = generateError();
            form[i].parentElement.insertBefore(error, fields[i]);
        }
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    removeValidation();
    checkField();
});

// TODO if (cardsElement === null) {
//TODO    throw "Работать дальше нельзя! Элемент не найден!"


