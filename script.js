const loginBox = document.getElementById('login-box');
const cadBox = document.getElementById('cad-box');

document.getElementById('to-cad') .onclick = (e) => {
    e.preventDefault();
    loginBox.classList.add('esconde');
    cadBox.classList.remove('esconde');
};

document.getElementById('to-login').onclick = () => {
    cadBox.classList.add('esconde');
    loginBox.classList.remove('esconde');
};

document.getElementsById('form-login').onsubmit = (e) => {
    e.preventDefault();
    alert('Login Efetuado!');
};

document.getElementById('form-cad').onsubmit = (e) => {
    e.preventDefault();
    const cpf = document.getElementById('cad-cpf').value;
    alert('Cadastro Realizado!'+ cpf);
    cadBox.classList.add('esconde');
    loginBox.classList.remove('esconde');
};

