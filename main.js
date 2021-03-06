var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var content;
var img_id = "selfie1";
function start() {
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript.toLowerCase();
    console.log(content);
    if (content == "selfie") {
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
        img_id = "selfie2";
        speak_data = "Taking your selfie in 10 seconds";
        utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        
    }, 5000);

    setTimeout(function () {
        take_snapshot();
    }, 15000);
    Webcam.attach(camera);
}

function take_snapshot() {
    console.log(img_id);

    Webcam.snap(function (data_uri) {
        if (img_id == "selfie1") {
            document.getElementById("result1").innerHTML = "<img id='selfie1' src= '" + data_uri + "'/>";
        }

        if (img_id == "selfie2") {
            document.getElementById("result2").innerHTML = "<img id='selfie2' src= '" + data_uri + "'/>";
        }

        if (img_id == "selfie3") {
            document.getElementById("result3").innerHTML = "<img id='selfie3' src= '" + data_uri + "'/>";
        }
    });
}

