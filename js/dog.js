var lovePoints = 0;
var feed = 0;
var pet = 0;
var play = 0;
var clean = 0;
var sleep = 0;
var speak = 0;

$('#msgBox').hide();

$('#feed').click(function(){
    lovePoints += 1;
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
    lovePoints += 2;
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
    lovePoints += 2;
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
    lovePoints += 1;
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
    if(sleep%15 == 0){
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