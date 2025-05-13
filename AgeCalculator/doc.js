let calc=document.getElementById("age");
calc.max=new Date().toISOString().split("T")[0];
let result=document.querySelector(".result");
function calculateAge(){
    let birthDate=new Date(calc.value);
    let d1=birthDate.getDate();
    let m1=birthDate.getMonth();
    let y1=birthDate.getFullYear();
    let today=new Date();
    let d2=today.getDate();
    let m2=today.getMonth();
    let y2=today.getFullYear();
    
}

