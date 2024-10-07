
var username = document.getElementById('username');
    var password = document.getElementById('password');
    var errorMessage = document.getElementById('error-message');

document.getElementById('login').addEventListener("submit",function(event){
    event.preventDefault();
    errorMessage.textContent = '';
  if(username.value!='' && password.value!=''){ 
if (username.value == 'Abhijith' && password.value == 'Abhijith@0422') {
    alert('Admin Login Successful');
    window.location.href='loginpage.html';
}
    else{
        errorMessage.innerHTML = "<i class='bx bxs-info-circle'></i> Invalid credentials. Please enter valid credentials.";
    console.log('Username: ' + username.value + ' Password: ' + password.value);
    }}
    else{
        errorMessage.innerHTML = "<i class='bx bxs-info-circle'></i>Please fill in both username and password.";
    }
});




