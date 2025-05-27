function PasswordChecker(value){
    console.log("entered");
    let pass=value.length;
    let result=document.getElementById("result");
    let strength=document.getElementById("strength");
    let inputs=document.getElementById("password");
    if(pass==0){
        result.style.display="none";
        strength.textContent=" ";
        inputs.style.border = "0px";
    }
    if(pass>0){
        const hasLetters = /[a-zA-Z]/.test(value);
        const hasNumbers = /[0-9]/.test(value);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value); 
        result.style.display="block";
        if(pass<4 && (hasLetters || hasNumbers || hasSpecial)){
            strength.textContent="Weak";
            strength.className="weak";
            result.className="weak";  
            inputs.style.border = "2px solid rgb(255, 0, 0)";     
        }
        else if(pass>4  && pass <= 8 &&((hasNumbers && hasLetters)||(hasNumbers && hasSpecial)||(hasLetters && hasSpecial))) {
            strength.textContent="";
            strength.textContent="Medium";
            strength.className="medium";
            result.className="medium";
            inputs.style.border = "2px solid rgb(251, 255, 3)";  

        }
        else if(pass>9 && hasLetters && hasSpecial && hasNumbers){
            strength.textContent="hard";
            strength.className="hard";
            result.className="hard";
            inputs.style.border = "2px solid rgb(0, 255, 0)";  
        }

    } 
};