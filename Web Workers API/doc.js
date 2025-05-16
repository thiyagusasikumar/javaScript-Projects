let w;
function startWork(){
    console.log("hi");
    if(typeof(w)==="undefined"){
        console.log("outter");
        w=new Worker("worker.js");
    }
    w.onmessage=function(event){
        console.log("inner");
        console.log(event.data);
        let result =document.getElementById("result");
        result.innerHTML=event.data;
    }
}
function stopWork(){
    w.terminate();
    w=undefined;
}