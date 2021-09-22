const btn = document.querySelector('.notify-btn');
const regex = /^([a-zA-Z0-9\.-_]+)([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9\.-_]+).([a-zA-Z0-9\.-_]+)$/;

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const input = document.getElementById('email').value;
    const inputElement = document.getElementById('email');

    if(!regex.test(input)) {
        if(!inputElement.classList.contains('wrong-input')) {
            inputElement.classList.add('wrong-input');
            inputElement.classList.add('wrong-border');
            var html = '<p class="small wrong-input">Please Enter A Valid Email...</p>';
            btn.insertAdjacentHTML("afterend", html);
        }
    } else {
        inputElement.classList.remove('wrong-input');
        inputElement.classList.remove('wrong-border');
        btn.nextElementSibling.remove();
    }
});