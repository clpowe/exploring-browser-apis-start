const synth = window.speechSynthesis;

const speak_button = document.getElementById("speak");
const stop_button = document.getElementById("stop");
const speak_input = document.getElementById("speak-text");
const pitch_input = document.getElementById("pitch");
const speed_input = document.getElementById("speed");

let voices = [];

speak_button.addEventListener("click", () => {
  const utterance = new SpeechSynthesisUtterance(speak_input.value);
  const voice = document.getElementById("voice");
  let selectedIndex = voice.selectedIndex;
  utterance.voice = voices[selectedIndex];

  utterance.rate = speed_input.value;
  utterance.pitch = pitch_input.value;

  if (synth.paused) {
    synth.resume();
    speak_button.innerText = "Pause Speak";
  } else if (synth.speaking) {
    synth.pause();
    speak_button.innerText = "Resume Speak";
  } else {
    synth.speak(utterance);
    speak_button.innerText = "Pause Speak";
  }

  utterance.addEventListener("end", () => {
    if (!synth.speaking) {
      speak_button.innerText = "Speak Text";
    }
  });
});

stop_button.addEventListener("click", () => {
  synth.cancel();
  speak_button.innerText = "Speak Text";
});

function populateVoiceList() {
  voices = synth.getVoices();
  console.log("voices", voices);
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.textContent = voice.name + "(" + voice.lang + ")";
    document.getElementById("voice").appendChild(option);
  });
}

populateVoiceList();

if (typeof synth !== "undefined" && synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = populateVoiceList;
}
