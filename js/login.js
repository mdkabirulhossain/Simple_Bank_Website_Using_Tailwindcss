
document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;

    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    //Just Normal check without database

    if(email === 'kabirul@gmail.com' && password === 'kabirul'){
        window.location.href = 'bank.html';
    }else{
        alert("your password is incorrect provide actual password or contuct Islamic bank helpline");
    }
})