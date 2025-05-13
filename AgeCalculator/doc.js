let calc=document.getElementById("age");
calc.max=new Date().toISOString().split("T")[0];
let result=document.querySelector(".result");
function calculateAge(){
    console.log("entered");
    let birthDate=new Date(calc.value);
    let d1=birthDate.getDate();console.log(d1);
    let m1=birthDate.getMonth();console.log(m1);
    let y1=birthDate.getFullYear();console.log(y1);
    let today=new Date();
    let d2=today.getDate();console.log(d2);
    let m2=today.getMonth();console.log(m2);
    let y2=today.getFullYear();console.log(y2);
    let d3,m3,y3;
    y3=y2-y1;
    if(m2>=m1){
        m3=m2-m1;
    }
    else{
        y3--;
        m3=12+m2-m1;
    }
    if(d2>=d1){
        d3=d2-d1;
    }
    else{
        m3--;
        d3=30+d2-d1;
    }
    result.innerHTML=`your age is ${y3} Years ${m3} Months ${d3} Days`;
}
document.querySelector(".btn").addEventListener("click",calculateAge);


