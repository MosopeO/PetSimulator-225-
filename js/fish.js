

document.getElementById("feed").addEventListener("click", feed)
document.getElementById("pet").addEventListener("click", pet, false)
document.getElementById("play").addEventListener("click", play)
document.getElementById("clean").addEventListener("click", clean)
document.getElementById("sleep").addEventListener("click", sleep)
document.getElementById("speak").addEventListener("click", speak, false)

$('#pet').on('click', function () {
    show(document.getElementById("fish_pet"), 5000);
    console.log("pet called")
});

$('#play').on('click', function () {
    show(document.getElementById("hoop"), 5000);
});

$('#clean').on('click', function () {
    show(document.getElementById("fish_clean"), 5000);
});

$('#sleep').on('click', function () {
    document.getElementById("fish").src = "img/fish_sleep.png";
    setTimeout(function () { document.getElementById("fish").src = "img/fish.png"; }, 10000);
    show(document.getElementById("zzz"), 10000);
});

$('#speak').on('click', function () {
    show(document.getElementById("fish_speak"), 3000);
});

function show(e, n) {
    setTimeout(function () { e.style.display = "none"; }, n);
    e.style.display = "block";
}

$('#submit').on('click', function () {
    document.getElementById('enterName').style.display = "none";
    console.log(document.getElementById('myContainer').style.display)
    document.getElementById('myContainer').style.display = "block";
    console.log(document.getElementById('myContainer').style.display)
    playAudio()
});

function playAudio() {
    var audio = new Audio('audio/background1.mp3');
    audio.loop = true;
    audio.play();
    console.log("playing audio")
}