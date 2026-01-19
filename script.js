// --- Navigation Login/Register ---
const toRegister = document.getElementById('toRegister');
const toLogin = document.getElementById('toLogin');

if(toRegister){
    toRegister.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

if(toLogin){
    toLogin.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
}

// --- Login ---
const loginForm = document.getElementById('loginForm');
if(loginForm){
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        const storedPassword = localStorage.getItem(username);
        if(storedPassword === password){
            alert('Login erfolgreich!');
            window.location.href = 'chat.html';
        } else {
            alert('Benutzername oder Passwort falsch!');
        }
    });
}

// --- Registrierung ---
const registerForm = document.getElementById('registerForm');
if(registerForm){
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;

        if(localStorage.getItem(username)){
            alert('Benutzername existiert bereits!');
        } else {
            localStorage.setItem(username, password);
            alert('Registrierung erfolgreich! Bitte einloggen.');
            window.location.href = 'login.html';
        }
    });
}

// --- Dark/Light Mode Switcher ---
const themeSwitcher = document.getElementById('themeSwitcher');

themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
});