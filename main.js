var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var content;

function start() {
    recognition.start();   
}

recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript.toLowerCase();
    console.log(content);
    if(content == "selfie") {
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function () {
        take_snapshot();
        save();
    }, 5000);
    Webcam.attach(camera);
}
