let clientId="flcy1T8KSSE2blGXatd5Z_Jbucc7-uWFFcRbj4TIAyo";

let searchBox=document.getElementById("searchBox");
let searchBtn=document.getElementById("btn");
let resultBox=document.getElementsByClassName("result")[0];
let showMore=document.querySelector(".showMore button");
let page=0;
let keyword="";
 async function searchImage(){
    keyword=searchBox.value;
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${clientId}&per_page=12`;
    const response=await fetch(url);
    const data = await response.json();
    console.log(data);
    let results=data.results;

    console.log("outer");
    results.map(result=>{
        console.log("inner");
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);
        resultBox.appendChild(imageLink);
    });
    showMore.style.display="block";
 }

 searchBtn.addEventListener("click",()=>{
    page=1;
    searchImage();
 });
 
 showMore.addEventListener("click",()=>{
    page++;
    searchImage();
 });