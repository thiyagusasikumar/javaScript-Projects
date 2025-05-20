let data=document.getElementById("DragDrop");
let image=document.getElementById("changeImage");
let main=document.querySelector(".container");
data.addEventListener("change",()=>{
    const file = data.files[0];
    uploadImage(file);
});
function uploadImage(file) {
    if (file) {
        const reader = new FileReader(); 
        reader.onload = function (e) {
            image.src = e.target.result; 
            image.style.display = "block"; 
            main.style.display = "none"; 
        }
        reader.readAsDataURL(file); 
    } else {
        console.error("No file provided");
    }
}
main.addEventListener("dragover",(e)=>{
    e.preventDefault();
});
main.addEventListener("drop",(e)=>{
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    uploadImage(droppedFile);
});
