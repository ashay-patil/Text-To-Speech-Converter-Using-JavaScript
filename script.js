let speech = new SpeechSynthesisUtterance();

const listen = document.getElementById('listen');
const textarea = document.getElementById('input-text');
const selectVoices = document.getElementById('accents');

let voices = [];

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    
    voices.forEach((voice, i)=>{
        selectVoices.options[i] = new Option(voice.name,i);
    });
}

selectVoices.addEventListener('change',()=>{
    speech.voice = voices[selectVoices.value];
})

listen.addEventListener('click',()=>{
    speech.text = textarea.value ;
    window.speechSynthesis.speak(speech);
})