let speech=new SpeechSynthesisUtterance();
const synth=window.speechSynthesis;
const voiceSelect=document.querySelector("select");
let voices;
 function loadvoices(){
    voices=synth.getVoices();
    for(let i=0;i<voices.length;i++){
        const option=document.createElement("option");
        option.textContent=`${voices[i].name} {${voices[i].lang}}`;
        option.value=i;
        voiceSelect.appendChild(option);
    }
 }
 if("onvoiceschanged"in synth){
    synth.onvoiceschanged=loadvoices;
 }
 else{
    loadvoices();
 }
document.querySelector("button").addEventListener("click",() =>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech); ;
    loadvoices();
});
voiceSelect.addEventListener("change",() =>{
    speech.voice=voices[voiceSelect.value];
});                 