
checkPassword = () => {
    let password = document.getElementById('password')
    let cPassword = document.getElementById('c-password');

    if (password !== cPassword) {
        password.style.border = '1px solid red';
        cPassword.style.border = '1px solid red';
    } else {
        let form = document.querySelector('form');
       form.submit();
    }
}


let sub = document.querySelector('button');
sub.addEventListener('click', (e) => {
    e.preventDefault();
    checkPassword();
});
