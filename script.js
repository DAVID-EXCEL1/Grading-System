var song = "Audio/effect-sound_-_There-Is-God-O.mp3"
var songToPlay = new Audio(song)
var song = "Audio/effect-sound_-_Funny_laughing.mp3"
var playsong = new Audio(song)
var song = "Audio/sound_effct_-_E-shock-you-broda-shaggi.mp3"
var plai = new Audio(song)
var song = "Audio/Emotional-Damage-Sound-Effect.mp3"
var pltei = new Audio(song)
var song = "Audio/mixkit-one-man-clapping-482.wav"
var its = new Audio(song)
var song = "Audio/sound_effct_-_Funny-laugh-no-no-no.mp3"
var noresult = new Audio(song)
var song = "Audio/mixkit-rhythmic-audience-clapping-loop-522.wav"
var correct = new Audio(song)
function checkValue() {
    if (num.value != "") {
        if (num.value >= 0 && num.value < 40) {
            console.log("F - Fail🥴");
            document.getElementById("show").innerHTML = "F - Fail🥴"
            songToPlay.play()
        } else if (num.value >= 40 && num.value < 45) {
            console.log("E - Pass😔");
            document.getElementById("show").innerHTML = "E - Pass😔"
            playsong.play()
        } else if (num.value >= 45 && num.value < 50) {
            console.log("D - Average😬");
            document.getElementById("show").innerHTML = "D - Average😬"
            plai.play()
        } else if (num.value >= 50 && num.value < 60) {
            console.log("C - Credit🤔");
            document.getElementById("show").innerHTML = "C - Credit🤔"
            pltei.play()
        } else if (num.value >= 60 && num.value < 70) {
            console.log("B - Good🙂");
            document.getElementById("show").innerHTML = "B - Good🙂"
            its.play()
        } else if (num.value >= 70 && num.value <= 100) {
            console.log("A - Excellent😀");
            document.getElementById("show").innerHTML = "A - Excellent😀"
            correct.play()
        } else {
            console.log("Invalid Input❗")
            document.getElementById("show").innerHTML = "Invalid Input❗"
            noresult.play()
        }
    }
}
