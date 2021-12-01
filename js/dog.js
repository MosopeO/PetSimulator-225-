
$('#pet').on('click', function () {
    show(document.getElementById("petHand"), 5000);
});

$('#play').on('click', function () {
    show(document.getElementById("ball"), 5000);
});

$('#clean').on('click', function () {
    show(document.getElementById("shower"), 5000);
});

$('#sleep').on('click', function () {
    document.getElementById("dog").src = "img/dog_sleep.png";
    setTimeout(function () { document.getElementById("dog").src = "img/dog.png"; }, 10000);
    show(document.getElementById("zzz"), 10000);
});

$('#speak').on('click', function () {
    show(document.getElementById("dog_speak"), 3000);
    var audio = new Audio('audio/animals_dog_bark_001.mp3');
    audio.play();
});

function show(e, n) {
    setTimeout(function () { e.style.display = "none"; }, n);
    e.style.display = "block";
}

$('#submit').on('click', function () {
    document.getElementById('enterName').style.display = "none";
    document.getElementById('myContainer').style.display = "block";
    console.log( document.getElementById('pname').value)
    playAudio()
});

function playAudio() {
    var audio = new Audio('audio/background1.mp3');
    audio.loop = true;
    audio.play();
    console.log("playing audio")
}