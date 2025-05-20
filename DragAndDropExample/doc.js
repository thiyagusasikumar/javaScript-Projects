function dragStart(ev){
    ev.dataTransfer.setData("text",ev.target.id);
}
function dragOver(ev){
    ev.preventDefault();
}
function dropIt(ev){
    ev.preventDefault();
    let data=ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    

}