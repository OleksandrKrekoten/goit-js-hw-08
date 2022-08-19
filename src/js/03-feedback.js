import throttle from 'lodash.throttle';
const refs = {
    form: document.querySelector('.feedback-form'),
    inputEmail: document.querySelector('[name="email"]'),
    inputMessage: document.querySelector('[name="message"]')
}
const STORAGE_KEY = 'feedback-form-state';
const formData = {}

refs.form.addEventListener('submit', onFormSubmit)
refs.form.addEventListener('input',throttle (onTextareaInput, 500))

populateTextarea()

function onFormSubmit(event) {
    event.preventDefault()
    event.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
}

function onTextareaInput(event) {
    formData[event.target.name] = event.target.value
     const stringifiedformData = JSON.stringify(formData)
    localStorage.setItem(STORAGE_KEY, stringifiedformData)
    console.log(formData);
    
    
}
function populateTextarea() { 
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (savedMessage) {
        refs.inputEmail.value = savedMessage['email'] || ''
        refs.inputMessage.value = savedMessage['message']  || ''
    }
}