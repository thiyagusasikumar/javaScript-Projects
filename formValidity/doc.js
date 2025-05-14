function myfunction(){
    console.log("entered");
    let input=document.querySelector("input");
    console.log(input);
    if(!input.checkValidity()){
        document.getElementById("demo").innerHTML = input.validationMessage;
    }
    else{
        document.getElementById("demo").innerHTML="Input Ok"
    }
};