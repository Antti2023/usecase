const registerBtn = document.getElementById('registerBtn');
const regUsernameInput = document.getElementById('regUsername');
const regPasswordInput = document.getElementById('regPassword');
const roleInput = document.getElementById('role'); 

registerBtn.addEventListener('click', function() {
    const regUsername = regUsernameInput.value;
    const regPassword = regPasswordInput.value;
    const role = roleInput.value; 

    if (regUsername.trim() === '' || regPassword.trim() === '') {
        alert('Käyttäjänimi ja salasana eivät voi olla tyhjiä.');
        return;
    }

    
    const storageKey = role === 'admin' ? 'admin_' + regUsername : 'user_' + regUsername;

    localStorage.setItem(storageKey, regPassword);
    console.log(`Saved ${role} account: ${storageKey}`); 

    alert('Käyttäjätili tallennettu onnistuneesti!');
    
    regUsernameInput.value = '';
    regPasswordInput.value = '';
});