
var username = document.getElementById('username');
    var password = document.getElementById('password');
    

document.getElementById('login').addEventListener("submit",function(event){
    event.preventDefault();
    
    console.log('Username: ' + username.value + ' Password: ' + password.value);
if (username.value == 'admin' && password.value == '123456789') {
    alert('Login Successful');
    window.location.href='loginpage.html';
}
});




