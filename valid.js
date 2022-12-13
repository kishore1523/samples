function myfunction(){
    var x =document.getElementById("pass");

    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}

function validate(){
    var password = document.getElementById("pass");
    var username = document.getElementById("user");
    var length = document.getElementById("length");
    

    if(username.value == 'Kishore' && password.value == 'Anu@1523'){
        alert("Login Succesfull");
        window.location.replace("newpage.html");
        return false;
    }
    else{
        alert("Login Failed");
    }
}