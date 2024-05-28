const loginBtn = document.getElementById('loginBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const roleInput = document.getElementById('role'); 

loginBtn.addEventListener('click', function() {
    const username = usernameInput.value;
    const password = passwordInput.value;
    const role = roleInput.value;

   
    const storageKey = role === 'admin' ? 'admin_' + username : 'user_' + username;

    const storedPassword = localStorage.getItem(storageKey);
    console.log(`Attempting login for ${role} account: ${storageKey}`); 

    if (!storedPassword || storedPassword !== password) {
        alert('Virheellinen käyttäjänimi tai salasana.');
        return;
    }

    alert('Kirjautuminen onnistui!');
    if (role === 'user') {
        window.location.href = 'kayttajanaanestyssivu.html';
    } else if (role === 'admin') {
        window.location.href = 'aanestyssivu.html';
    }
});