
let quote=document.getElementById("quote");
let aurthor=document.getElementById("aurthor");
async function getQuote(){
    const url='https://dummyjson.com/quotes/random';
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    
    quote.innerHTML=data.quote;
    aurthor.innerHTML=data.author;
}
getQuote();
let newQuote=document.querySelector(".newQuote");
newQuote.addEventListener("click",getQuote);
