console.log(localStorage.getItem('clicked'));
if(localStorage.getItem('clicked')==="NaN"){
localStorage.setItem('clicked',0);
console.log("entered");
}
let x=document.querySelector("button").addEventListener("click",()=>{
let result=document.getElementById("demo");
let count=parseInt(localStorage.getItem('clicked'));
count++;
localStorage.setItem('clicked',count);
result.innerHTML=`The Count = ${localStorage.getItem('clicked')}`
});
