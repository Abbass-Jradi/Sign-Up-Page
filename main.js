const form = document.querySelector('.form');
const password_input = form.querySelector('.password');
const message = document.querySelector('.message');


form.addEventListener('submit', (e)=>{
    if(password_input.value === '' || password_input.value === null){
        e.preventDefault();
        message.style.visibility = "visible";
        password_input.style.border = "1px tomato solid";
    } else {
        message.style.visibility = "hidden";
        password_input.style.border = "1px lightgrey solid";
        
    }

})

password_input.addEventListener('focus', ()=>{
    message.style.visibility = "hidden";
    password_input.style.border = "1px lightgrey solid";


})
