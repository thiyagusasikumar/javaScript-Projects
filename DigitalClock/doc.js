const ohrs=document.querySelector(".hrs");
const omin=document.querySelector(".min");
const osec=document.querySelector(".sec");

setInterval(() =>{
    const now = new Date();
    const hrs=(now.getHours()<10?"0":" ")+now.getHours();
    const min=(now.getMinutes()<10?"0":" ")+now.getMinutes();
    const sec=(now.getSeconds()<10?"0":" ")+now.getSeconds();
    omin.innerHTML=min;
    osec.innerHTML=sec;
    ohrs.innerHTML=hrs;
},1000);



