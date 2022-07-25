function loginValidation() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    if (username.value.trim() == '' || password.value.trim() == '') {
        alert("Username or Password is blank.");
        return false;
    }
    else{
        alert("Login Successful")
        return true;
    }
}