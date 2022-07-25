function loginValid() {
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();


    if (email == '') {
        let error=document.getElementsByClassName('error-msg')[0];
        error.innerHTML='Email Field is Blank.'
        error.style.visibility='visible';
        // alert("Invalid email");
    }
    else{
        let regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z]+)(\.[a-z]{2,8})(\.[a-z]{2,8})?$/;
        if (regx.test(email)){
            alert("Valid");
        }
        else{
            alert('Pattern Mismatched');
        }
    }

    if(password==""){
        error=document.getElementsByClassName('error-msg')[1];
        error.innerHTML='Password Field is Blank.'
        error.style.visibility='visible'; 
        document.getElementById('password').style.border='solid 1px red';
    }
}