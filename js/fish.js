//algorithm
var lovePoints = 0;
var feed = 0;
var pet = 0;
var play = 0;
var clean = 0;
var sleep = 0;
var speak = 0;

$('#msgBox').hide();

$('#feed').click(function(){
    lovePoints += 2;
    feed += 1;
    console.log(lovePoints + ", " + feed);
    if(feed%5 == 0){
        $('#msgBox').show();
        $('#message').text("Your pet needs to play");
        setTimeout(function() { $("#msgBox").hide(); }, 3000);
    }
    if(lovePoints == 500){
        $('#msgBox').show();
        $('#message').text("Congrats, you maxed out the love bar! You and your pet are best friends! Keep taking care of your pet to earn even more points.");
        setTimeout(function() { $("#msgBox").hide(); }, 10000);
    }
    else if(lovePoints%500 == 0 && lovePoints != 0){
        $('#msgBox').show();
        $('#message').text("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
        setTimeout(function() { $("#msgBox").hide(); }, 5000);
    }
    if(lovePoints%100 == 0 && lovePoints <= 500){
        if(lovePoints == 100){
            document.getElementById('heart').animate([{transform: 'translateX(0px)'},{transform: 'translateX(50px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 200){
            document.getElementById('heart').animate([{transform: 'translateX(50px)'},{transform: 'translateX(100px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 300){
            document.getElementById('heart').animate([{transform: 'translateX(100px)'},{transform: 'translateX(150px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 400){
            document.getElementById('heart').animate([{transform: 'translateX(150px)'},{transform: 'translateX(200px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 500){
            document.getElementById('heart').animate([{transform: 'translateX(200px)'},{transform: 'translateX(250px)'}],{duration: 2500, fill: "forwards"});}
    }
});
$('#pet').click(function(){
    lovePoints -= 1;
    pet += 1;
    console.log(lovePoints + ", " + pet);
    if(lovePoints == 500){
        $('#msgBox').show();
        $('#message').text("Congrats, you maxed out the love bar! You and your pet are best friends! Keep taking care of your pet to earn even more points.");
        setTimeout(function() { $("#msgBox").hide(); }, 10000);
    }
    else if(lovePoints%500 == 0 && lovePoints != 0){
        $('#msgBox').show();
        $('#message').text("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
        setTimeout(function() { $("#msgBox").hide(); }, 5000);
    }
    if(lovePoints%100 == 0 && lovePoints <= 500){
        if(lovePoints == 100){
            document.getElementById('heart').animate([{transform: 'translateX(0px)'},{transform: 'translateX(50px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 200){
            document.getElementById('heart').animate([{transform: 'translateX(50px)'},{transform: 'translateX(100px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 300){
            document.getElementById('heart').animate([{transform: 'translateX(100px)'},{transform: 'translateX(150px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 400){
            document.getElementById('heart').animate([{transform: 'translateX(150px)'},{transform: 'translateX(200px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 500){
            document.getElementById('heart').animate([{transform: 'translateX(200px)'},{transform: 'translateX(250px)'}],{duration: 2500, fill: "forwards"});}
    }
});
$('#play').click(function(){
    lovePoints += 1;
    play += 1;
    console.log(lovePoints + ", " + play);
    if(play%5 == 0){
        $('#msgBox').show();
        $('#message').text("Your pet needs some sleep");
        setTimeout(function() { $("#msgBox").hide(); }, 3000);
    }
    if(lovePoints == 500){
        $('#msgBox').show();
        $('#message').text("Congrats, you maxed out the love bar! You and your pet are best friends! Keep taking care of your pet to earn even more points.");
        setTimeout(function() { $("#msgBox").hide(); }, 10000);
    }
    else if(lovePoints%500 == 0 && lovePoints != 0){
        $('#msgBox').show();
        $('#message').text("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
        setTimeout(function() { $("#msgBox").hide(); }, 5000);
    }
    if(lovePoints%100 == 0 && lovePoints <= 500){
        if(lovePoints == 100){
            document.getElementById('heart').animate([{transform: 'translateX(0px)'},{transform: 'translateX(50px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 200){
            document.getElementById('heart').animate([{transform: 'translateX(50px)'},{transform: 'translateX(100px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 300){
            document.getElementById('heart').animate([{transform: 'translateX(100px)'},{transform: 'translateX(150px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 400){
            document.getElementById('heart').animate([{transform: 'translateX(150px)'},{transform: 'translateX(200px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 500){
            document.getElementById('heart').animate([{transform: 'translateX(200px)'},{transform: 'translateX(250px)'}],{duration: 2500, fill: "forwards"});}
    }
});
$('#clean').click(function(){
    lovePoints += 2;
    clean += 1;
    console.log(lovePoints + ", " + clean);
    if(lovePoints == 500){
        $('#msgBox').show();
        $('#message').text("Congrats, you maxed out the love bar! You and your pet are best friends! Keep taking care of your pet to earn even more points.");
        setTimeout(function() { $("#msgBox").hide(); }, 10000);
    }
    else if(lovePoints%500 == 0 && lovePoints != 0){
        $('#msgBox').show();
        $('#message').text("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
        setTimeout(function() { $("#msgBox").hide(); }, 5000);
    }
    if(lovePoints%100 == 0 && lovePoints <= 500){
        if(lovePoints == 100){
            document.getElementById('heart').animate([{transform: 'translateX(0px)'},{transform: 'translateX(50px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 200){
            document.getElementById('heart').animate([{transform: 'translateX(50px)'},{transform: 'translateX(100px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 300){
            document.getElementById('heart').animate([{transform: 'translateX(100px)'},{transform: 'translateX(150px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 400){
            document.getElementById('heart').animate([{transform: 'translateX(150px)'},{transform: 'translateX(200px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 500){
            document.getElementById('heart').animate([{transform: 'translateX(200px)'},{transform: 'translateX(250px)'}],{duration: 2500, fill: "forwards"});}
    }
});
$('#sleep').click(function(){
    lovePoints += 1;
    sleep +=1;
    console.log(lovePoints + ", " + sleep);
    if(sleep%25 == 0){
        $('#msgBox').show();
        $('#message').text("Your pet needs to play");
        setTimeout(function() { $("#msgBox").hide(); }, 3000);
    }
    if(lovePoints == 500){
        $('#msgBox').show();
        $('#message').text("Congrats, you maxed out the love bar! You and your pet are best friends! Keep taking care of your pet to earn even more points.");
        setTimeout(function() { $("#msgBox").hide(); }, 10000);
    }
    else if(lovePoints%500 == 0 && lovePoints != 0){
        $('#msgBox').show();
        $('#message').text("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
        setTimeout(function() { $("#msgBox").hide(); }, 5000);
    }
    if(lovePoints%100 == 0 && lovePoints <= 500){
        if(lovePoints == 100){
            document.getElementById('heart').animate([{transform: 'translateX(0px)'},{transform: 'translateX(50px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 200){
            document.getElementById('heart').animate([{transform: 'translateX(50px)'},{transform: 'translateX(100px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 300){
            document.getElementById('heart').animate([{transform: 'translateX(100px)'},{transform: 'translateX(150px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 400){
            document.getElementById('heart').animate([{transform: 'translateX(150px)'},{transform: 'translateX(200px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 500){
            document.getElementById('heart').animate([{transform: 'translateX(200px)'},{transform: 'translateX(250px)'}],{duration: 2500, fill: "forwards"});}
    }
});
$('#speak').click(function(){
    lovePoints += 1;
    speak += 1;
    console.log(lovePoints + ", " + speak);
    if(lovePoints == 500){
        $('#msgBox').show();
        $('#message').text("Congrats, you maxed out the love bar! You and your pet are best friends! Keep taking care of your pet to earn even more points.");
        setTimeout(function() { $("#msgBox").hide(); }, 10000);
    }
    else if(lovePoints%500 == 0 && lovePoints != 0){
        $('#msgBox').show();
        $('#message').text("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
        setTimeout(function() { $("#msgBox").hide(); }, 5000);
    }
    if(lovePoints%100 == 0 && lovePoints <= 500){
        if(lovePoints == 100){
            document.getElementById('heart').animate([{transform: 'translateX(0px)'},{transform: 'translateX(50px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 200){
            document.getElementById('heart').animate([{transform: 'translateX(50px)'},{transform: 'translateX(100px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 300){
            document.getElementById('heart').animate([{transform: 'translateX(100px)'},{transform: 'translateX(150px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 400){
            document.getElementById('heart').animate([{transform: 'translateX(150px)'},{transform: 'translateX(200px)'}],{duration: 2500, fill: "forwards"});}
        else if(lovePoints == 500){
            document.getElementById('heart').animate([{transform: 'translateX(200px)'},{transform: 'translateX(250px)'}],{duration: 2500, fill: "forwards"});}
    }
});


//animation
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