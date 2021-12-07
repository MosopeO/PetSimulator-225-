const firebaseConfig = {
    apiKey: "AIzaSyAE6FCcRXGCNcXXAo7-R2e-jMEaKsIlQfc",
    authDomain: "pet-sumilator---225.firebaseapp.com",
    databaseURL: "https://pet-sumilator---225-default-rtdb.firebaseio.com",
    projectId: "pet-sumilator---225",
    storageBucket: "pet-sumilator---225.appspot.com",
    messagingSenderId: "950367405218",
    appId: "1:950367405218:web:c7ddf43127e52b548ac3fb"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
    lovePoints += 1;
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
    lovePoints -= 1;
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
    lovePoints += 2;
    sleep +=1;
    console.log(lovePoints + ", " + sleep);
    if(sleep%30 == 0){
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

$('#pet').on('click', function () {
    show(document.getElementById("petHand"), 5000);
});

$('#play').on('click', function () {
    show(document.getElementById("yarn"), 5000);
});

$('#clean').on('click', function () {
    console.log("in the function");
    show(document.getElementById("shower"), 5000);
});

$('#sleep').on('click', function () {
    document.getElementById("cat").src = "img/cat_sleep.png";
    setTimeout(function () { document.getElementById("cat").src = "img/cat (1).png"; }, 10000);
    show(document.getElementById("zzz"), 10000);
});

$('#speak').on('click', function () {
    show(document.getElementById("cat_speak"), 3000);
    var audio = new Audio('audio/animal_cat_meow.mp3');
    audio.play();
});

function show(e, n) {
    setTimeout(function () { e.style.display = "none"; }, n);
    e.style.display = "block";
}

$('#submit').on('click', function () {
    document.getElementById('enterName').style.display = "none";
    document.getElementById('myContainer').style.display = "block";
    console.log(document.getElementById('pname').value)
    playAudio()
});

function playAudio() {
    var audio = new Audio('audio/background1.mp3');
    audio.loop = true;
    audio.play();
    console.log("playing audio")
}



