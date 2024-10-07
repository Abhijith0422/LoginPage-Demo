var emailid = document.getElementById('email');
    var username = document.getElementById('userid');
    var password = document.getElementById('password');
    var confirmpassword = document.getElementById('confirmpass');
    var errorMessage = document.getElementById('error-message');

document.getElementById('signup').addEventListener("submit",function(event){
    event.preventDefault();
    
    if(emailid.value != '' && username.value !=''&&password.value != ''){
    if (password.value == confirmpassword.value) {
        console.log('Email ID: ' + emailid.value + ' Username: ' + username.value + ' Password: ' + password.value);
        alert('Signup Successful');
        window.location.href='signupsucesspage.html';
    }
    }
    else{
        errorMessage.innerHTML = "<i class='bx bxs-info-circle'></i> Please fill in all the fields.";
    }

});