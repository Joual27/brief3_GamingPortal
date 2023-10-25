

const contactForm = document.getElementById("contact-form");

if(contactForm){

    contactForm.addEventListener("submit", (event) =>{
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const number = document.getElementById("number").value;
        const password = document.getElementById("pw").value;
        
        
        
        function checkName(name){
        const nameError = document.getElementById("nameError");

        if( name === ""){
            nameError.textContent = "Name cannot be empty !";
            return false;
            
        }
        
        if(!/^[a-zA-Z ]+$/.test(name) ){
            nameError.textContent = "Name cannot contain numbers or special characters!";
            return false;
        }
        else{
            nameError.textContent = "";
            return true;
        }
    }
    
    function checkEmail(email){
        const emailError = document.getElementById("emailError");
        if(email === ""){
            emailError.textContent = "email can't be empty";
            return false;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)){
            emailError.textContent = "Invalid email format ";
            return false;
        }
        else {
            emailError.textContent = "";
            return true;
        }
    }

    function checkNumber(number){
        const numberError = document.getElementById("numberError");
        
        if(number === ""){
            numberError.textContent = "number can't be empty";
            return false;
        }
        
        if(! /^\d{10}$/.test(number)){
            numberError.textContent = "number should be 10 digits";
            return false;
        }
        
        else{
            numberError.textContent = "";
            return true;
        }
    }

    function checkPw(password){
        const pwError = document.getElementById("pwError");
         if(! /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password)){
            pwError.textContent = "password must be at least 8 chars long / 1 uppercase / 1 symbol /1number";
            return false;
         }
         else{
            return true;
         }

    }
    
    checkNumber(number);
    checkName(name);
    checkEmail(email);
    checkPw(password);
    
    
    if(!checkName(name) ||!checkNumber(number)||!checkEmail(email)||!checkPw(password) ) {
        event.preventDefault();
    } 
})
}