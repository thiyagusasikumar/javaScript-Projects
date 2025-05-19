async function Qrchanger(){
    const URL="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    let content=document.getElementById("url").value;
    let respose=await fetch(URL + content);
    if(respose.ok){
       let qrImage=document.getElementById("qrImage");
       let button=document.querySelector(".btns");
       button.style.display="none";
       qrImage.src=URL+content;
       qrImage.style.display="block";
    }
    else{
        console.log("error");
    }
    };

function ImageUpload(){
   let hero=document.querySelector(".hero");
   let hero_2=document.querySelector(".hero_2");
   hero.style.display="none";
   hero_2.style.display="flex";
}
document.querySelector("#changeText").addEventListener("click",Qrchanger);
document.querySelector("#changeImage").addEventListener("click",ImageUpload);

