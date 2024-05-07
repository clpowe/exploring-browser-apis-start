const synth = window.speechSynthesis;

const speak_button = document.querySelector("speak");
const stop_button = document.querySelector("stop");
const speak_input = document.querySelector("speak-text");

speak_button.addEventListener(() => {
  const utterance = new SpeechSynthesisUtterance(speak_input.value);
  if (synth.paused) {
    synth.resume();
    speak_button.innerText = "Pause Speak";
  }else if {
    synth.pause()
    speak_button.innerText = "Resume Speak"
  } else {
    synth.speak(utterance)
  }

  utterance.addEventListener("end", ()=>{
    if(!synth.speaking){
        speak_button.innerText = "Speak Text";
    }
  })
});

stop_button.addEventListener("click", ()=>{
    synth.cancel()
    speak_button.innerText = "Speak Text";
})