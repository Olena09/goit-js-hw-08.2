import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

let formData = {
    email: '',
    message: '',
};
  
function saveData(e) {
    formData = {
        email: input.value,
        message: textarea.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function fillForm() {
    const dataString = localStorage.getItem('feedback-form-state');
    if (dataString) {
        const inputData = JSON.parse(dataString);
        const input = document.querySelector('.feedback-form input');
        const textarea = document.querySelector('.feedback-form textarea');
        input.value = inputData.email;
        textarea.value = inputData.message;
    }
}

form.addEventListener('submit', submitData);
form.addEventListener('input', throttle(saveData, 500));

function submitData(event) {
    event.preventDefault();
    localStorage.removeItem('feedback-form-state');
    input.value = ''; 
    textarea.value = '';

    console.log(formData);
}
