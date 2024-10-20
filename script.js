document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
      
    console.log('Login attempt:', { username, password });
    
    alert('Login attempt received. Check console for details.');
});