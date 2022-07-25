function signupValidation() {
    let phone = document.getElementById('mobile').value;
    let telephone = document.getElementById('telephone').value;

    let tel = /^[0-7]{3}\d{6}$/;
    if (tel.test(telephone)) {
        return true;
    }
    else {
        document.getElementById('telephone').style.border = 'solid 1px red';
        return false;
    }

    let regx = /^9[7-8][0124568]\d{7}$/;
    if (regx.test(phone)) {
        return true;
    }
    else {
        document.getElementById('mobile').style.border = "solid 1px red";
        return false;
    }
}