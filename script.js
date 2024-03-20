const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');



registerBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    container.classList.add("active");

});

loginBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    console.log('teste')
    container.classList.remove("active");
    });


