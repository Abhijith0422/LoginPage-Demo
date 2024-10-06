var emailid = document.getElementById('email');
    var username = document.getElementById('userid');
    var password = document.getElementById('password');
    var confirmpassword = document.getElementById('confirmpass');

document.getElementById('signup').addEventListener("submit",function(event){
    event.preventDefault();
    
    
    if (password.value == confirmpassword.value) {
        console.log('Email ID: ' + emailid.value + ' Username: ' + username.value + ' Password: ' + password.value);
        alert('Signup Successful');
        window.location.href='signupsucesspage.html';
        
    }

});
