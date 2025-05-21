document.getElementById("uploadFile").addEventListener("change",()=>{
    let data=document.getElementById("uploadFile");
    let output=document.querySelector(".output");
    console.dir(data);
    let file=data.files[0];
    let fileType=file.type;
    if(fileType.startsWith("text/")){
        console.log("files");
        let fr=new FileReader;
        fr.readAsText(file);
        fr.addEventListener("load",()=>{
            let output_0=document.querySelector(".output_0");
            output_0.textContent=fr.result;
        });
        fr.onerror=()=>{
            output.innerHTML="";
            output.innerHTML='<span>Error on Loading File</span>';
        }
    }
    else if (fileType.startsWith("image/")){
        console.log("image");
        let img=document.createElement("img");
        let fr=new FileReader;
        fr.readAsDataURL(file);
        fr.onload=()=>{
            img.src=fr.result;
            output.appendChild(img);
        
        }
       fr.onerror=()=>{
        output.innerHTML="";
        output.innerHTML='<span>Error on Loading image</span>';

       }
    }
   

});
