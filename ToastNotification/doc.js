let completed=document.getElementById("completed");
let error=document.getElementById("error");
let invaild=document.getElementById("invalid");
let notification=document.querySelector(".notification");
completed.onclick=()=>{
    console.log("working");
    let newElement=document.createElement('div');
    newElement.className = 'tinos-bold ToastBox';
    newElement.innerHTML=' <p><i class="fa-solid fa-check iconComplete"></i> Task Was Completed</p>';
    notification.appendChild(newElement);
    setTimeout(()=>{
        newElement.remove;
    },6000);
};
error.onclick=()=>{
    let newElement=document.createElement('div');
    newElement.className = 'tinos-bold ToastBox';
    newElement.innerHTML=' <p><i class="fa-solid fa-xmark iconError"></i> Error In The Task</p>';
    notification.appendChild(newElement);
};
invaild.onclick=()=>{
    let newElement=document.createElement('div');
    newElement.className = 'tinos-bold ToastBox';
    newElement.innerHTML='<p><i class="fa-solid fa-exclamation iconInvaild"></i> Invaild Option</p>';
    notification.appendChild(newElement);
};


let completed = document.getElementById("completed");
let error = document.getElementById("error");
let invalid = document.getElementById("invalid");
let notification = document.querySelector(".notification");

// Function to create and display a toast notification
function createToast(message, iconClass, toastClass) {
    let newElement = document.createElement("div");
    newElement.className = `tinos-bold ToastBox ${toastClass}`;
    newElement.innerHTML = `<p><i class="${iconClass}"></ilet completed = document.getElementById("completed");
let error = document.getElementById("error");
let invalid = document.getElementById("invalid");
let notification = document.querySelector(".notification");

// Function to create and display a toast notification
function createToast(message, iconClass, toastClass) {
    let newElement = document.createElement("div");
    newElement.className = `tinos-bold ToastBox ${toastClass}`;
    newElement.innerHTML = `<p><i class="${iconClass}"></i