function loginValidation(){
    let username=document.getElementById("username");
    let password=document.getElementById("password");

    if(username.value.trim() == ''){
        username.style.border='solid 1px red';
        document.getElementsByClassName('invalid')[0].style.visibility='visible';
        // document.getElementById("invaliduser").style.visibility='visible';
        return false;
    }
    if(password.value.trim() == ""){
        password.style.border='solid 1px red';
        document.getElementsByClassName("invalid")[1].style.visibility='visible';
        return false;
    }
    if(password.value.trim().length<8){
        let invalid=document.getElementsByClassName('invalid')[1];
        invalid.innerHTML="Password length must have 8 Character.";
        invalid.style.visibility='visible';
        
        return false;
    }
    
    
}