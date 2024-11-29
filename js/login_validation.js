document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginform');
    const registerForm = document.getElementById('registerform');
    const container = document.querySelector('.container');

    const handleLogin = (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const message = document.getElementById('login-message');

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'homepage.html';

            message.textContent = 'LOGGED IN! Welcome Elfling :)';
            message.style.fontWeight = '700';
            message.style.fontSize = '14.5px';
            message.style.padding = '8px';
            message.style.color = '#ffa012'; 
            message.style.background = '#380466';
            message.style.outline = 'none';
            message.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.6)';

            setTimeout(() => {
                window.location.href = 'login.html';
            }, 3000);

        } 
        
        else {
            message.textContent = 'PLEASE TRY AGAIN.';
            message.style.color = 'rgb(255, 255, 255)';
            message.style.background = '#ff0000';
            message.style.outline = 'none';
        }
    };

    const handleRegister = (event) => {
        event.preventDefault();
        const username = document.getElementById('reg-username').value;
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('reg-confirmPassword').value;
        const name = document.getElementById('reg-fullname').value;
        const message = document.getElementById('register-message');

        if (password !== confirmPassword) {
            message.textContent = 'Passwords do not match.';
            message.style.color = 'rgb(255, 255, 255)';
            message.style.background = '#e83333';
            message.style.outline = 'none';
            return;
        }

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('name', name);
        message.textContent = 'Registration successful! Redirecting to login page...';
        message.style.fontWeight = '700';
        message.style.fontSize = '14.5px';
        message.style.padding = '8px';
        message.style.color = '#ffa012'; 
        message.style.outline = 'none';

        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    };


    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

});



