var email = document.getElementById("email");
var text = document.getElementById("text");

function validate(){
    if(email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        text.innerHTML = "Email Address is Valid";
        text.style.color = "#29bf12";
    }else{
        text.innerHTML = "Enter Valid Email Address";
        text.style.color = "#e70e02";
    }
}