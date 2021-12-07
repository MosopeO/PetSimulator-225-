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
var docid = "";

//auth
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user.email);
        let email = user.email;
        let firsttime = 0;

        firebase
            .firestore()
            .collection("Points")
            .onSnapshot(querySnapshot => {
                console.log(querySnapshot.size);
                querySnapshot.forEach(doc => {
                    console.log(doc.data());
                    console.log(doc.data().Name);
                    console.log(doc.data().Points);
                    if (doc.data().Name == user.email) {
                        firsttime += 1;
                        lovePoints = doc.data().Points;
                        docid = doc.id;
                        console.log(doc.id);
                    }
                });
            });

        $('#msgBox').hide();

        $('#feed').click(function () {
            lovePoints += 1;
            feed += 1;
            console.log(lovePoints + ", " + feed);
            if (feed % 5 == 0) {
                $('#msgBox').show();
                $('#message').text("Your pet needs to play");
                setTimeout(function () { $("#msgBox").hide(); }, 3000);
            }
            if (lovePoints == 500) {
                $('#msgBox').show();
                $('#message').text("Congrats, you maxed out the love bar! You and your pet are best friends! Keep taking care of your pet to earn even more points.");
                setTimeout(function () { $("#msgBox").hide(); }, 10000);
            }
            else if (lovePoints % 500 == 0 && lovePoints != 0) {
                $('#msgBox').show();
                $('#message').text("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
                setTimeout(function () { $("#msgBox").hide(); }, 5000);
            }
            if (lovePoints % 100 == 0 && lovePoints <= 500) {
                if (lovePoints == 100) {
                    document.getElementById('heart').animate([{ transform: 'translateX(0px)' }, { transform: 'translateX(50px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 200) {
                    document.getElementById('heart').animate([{ transform: 'translateX(50px)' }, { transform: 'translateX(100px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 300) {
                    document.getElementById('heart').animate([{ transform: 'translateX(100px)' }, { transform: 'translateX(150px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 400) {
                    document.getElementById('heart').animate([{ transform: 'translateX(150px)' }, { transform: 'translateX(200px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 500) {
                    document.getElementById('heart').animate([{ transform: 'translateX(200px)' }, { transform: 'translateX(250px)' }], { duration: 2500, fill: "forwards" });
                }
            }
        });

        $('#pet').click(function () {
            lovePoints += 2;
            pet += 1;
            console.log(lovePoints + ", " + pet);
            if (lovePoints == 500) {
                $('#msgBox').show();
                $('#message').text("Congrats, you maxed out the love bar! You and your pet are best friends! Keep taking care of your pet to earn even more points.");
                setTimeout(function () { $("#msgBox").hide(); }, 10000);
            }
            else if (lovePoints % 500 == 0 && lovePoints != 0) {
                $('#msgBox').show();
                $('#message').text("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
                setTimeout(function () { $("#msgBox").hide(); }, 5000);
            }
            if (lovePoints % 100 == 0 && lovePoints <= 500) {
                if (lovePoints == 100) {
                    document.getElementById('heart').animate([{ transform: 'translateX(0px)' }, { transform: 'translateX(50px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 200) {
                    document.getElementById('heart').animate([{ transform: 'translateX(50px)' }, { transform: 'translateX(100px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 300) {
                    document.getElementById('heart').animate([{ transform: 'translateX(100px)' }, { transform: 'translateX(150px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 400) {
                    document.getElementById('heart').animate([{ transform: 'translateX(150px)' }, { transform: 'translateX(200px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 500) {
                    document.getElementById('heart').animate([{ transform: 'translateX(200px)' }, { transform: 'translateX(250px)' }], { duration: 2500, fill: "forwards" });
                }
            }
        });

        $('#play').click(function () {
            lovePoints += 2;
            play += 1;
            console.log(lovePoints + ", " + play);
            if (play % 5 == 0) {
                $('#msgBox').show();
                $('#message').text("Your pet needs some sleep");
                setTimeout(function () { $("#msgBox").hide(); }, 3000);
            }
            if (lovePoints == 500) {
                $('#msgBox').show();
                $('#message').text("Congrats, you maxed out the love bar! You and your pet are best friends! Keep taking care of your pet to earn even more points.");
                setTimeout(function () { $("#msgBox").hide(); }, 10000);
            }
            else if (lovePoints % 500 == 0 && lovePoints != 0) {
                $('#msgBox').show();
                $('#message').text("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
                setTimeout(function () { $("#msgBox").hide(); }, 5000);
            }
            if (lovePoints % 100 == 0 && lovePoints <= 500) {
                if (lovePoints == 100) {
                    document.getElementById('heart').animate([{ transform: 'translateX(0px)' }, { transform: 'translateX(50px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 200) {
                    document.getElementById('heart').animate([{ transform: 'translateX(50px)' }, { transform: 'translateX(100px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 300) {
                    document.getElementById('heart').animate([{ transform: 'translateX(100px)' }, { transform: 'translateX(150px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 400) {
                    document.getElementById('heart').animate([{ transform: 'translateX(150px)' }, { transform: 'translateX(200px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 500) {
                    document.getElementById('heart').animate([{ transform: 'translateX(200px)' }, { transform: 'translateX(250px)' }], { duration: 2500, fill: "forwards" });
                }
            }
        });
        $('#msgBox').hide();
        $('#collar').hide();
        $('#food').hide();

        $('#feed').click(function () {
            lovePoints += 1;
            feed += 1;
            console.log(lovePoints + ", " + feed);
            if (feed % 5 == 0) {
                $('#msgBox').show();
                $('#message').text("Your pet needs to play");
                setTimeout(function () { $("#msgBox").hide(); }, 3000);
            }
        });

        $('#pet').click(function () {
            lovePoints += 2;
            pet += 1;
            console.log(lovePoints + ", " + pet);
        });

        $('#play').click(function () {
            lovePoints += 2;
            play += 1;
            console.log(lovePoints + ", " + play);
            if (play % 5 == 0) {
                $('#msgBox').show();
                $('#message').text("Your pet needs some sleep");
                setTimeout(function () { $("#msgBox").hide(); }, 3000);
            }
        });

        $('#clean').click(function () {
            lovePoints += 1;
            clean += 1;
            console.log(lovePoints + ", " + clean);
        });

        $('#speak').click(function () {
            lovePoints += 1;
            speak += 1;
            console.log(lovePoints + ", " + speak);
        });

        $('#submit').click(function () {
            var name = $('#pname').val();
            $('#displayName').text(name);
            console.log(name);
        });

        $(':button').click(function () {
            var name = $('#pname').val();
            $('#points').text(lovePoints + " pts");
            if (lovePoints == 50) {
                $('#msgBox').show();
                $('#message').text("Congrats, you maxed out the love bar! You and " + name + " are best friends! Keep taking care of your pet to earn even more points.");
                setTimeout(function () { $("#msgBox").hide(); }, 10000);
            }
            else if (lovePoints % 50 == 0 && lovePoints != 0) {
                $('#msgBox').show();
                $('#message').text("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
                setTimeout(function () { $("#msgBox").hide(); }, 5000);
            }
            if (lovePoints % 10 == 0 && lovePoints <= 50) {
                if (lovePoints == 10) {
                    document.getElementById('heart').animate([{ transform: 'translateX(0px)' }, { transform: 'translateX(50px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 20) {
                    document.getElementById('heart').animate([{ transform: 'translateX(50px)' }, { transform: 'translateX(100px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 30) {
                    document.getElementById('heart').animate([{ transform: 'translateX(100px)' }, { transform: 'translateX(150px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 40) {
                    document.getElementById('heart').animate([{ transform: 'translateX(150px)' }, { transform: 'translateX(200px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 50) {
                    document.getElementById('heart').animate([{ transform: 'translateX(200px)' }, { transform: 'translateX(250px)' }], { duration: 2500, fill: "forwards" });
                }
            }
            if (lovePoints > 100) {
                $('#collar').show();
            }
        });

        $('#feed').click(function () {
            if (lovePoints >= 50) {
                $('#food').attr('src', 'img/dog_golden_treat.png');
            }
            $('#food').show();
            $('#food').animate({ right: '+=505px', top: '+=365px' }, 2000);
            $('#food').fadeOut(3000, function () {
                $('#food').animate({ right: '30%', top: '15%' });
            });
        });

        $('#pet').on('click', function () {
            $('#petHand').show();
            document.getElementById('petHand').animate([{ transform: 'translateX(0px)' }, { transform: 'translateX(-25px)' }], { duration: 500 });
            $('#petHand').fadeOut(3000);
        });

        $('#play').on('click', function () {
            if (lovePoints >= 150) {
                $('#ball').attr('src', 'img/dog_golden_toy.png');
            }
            show(document.getElementById("ball"), 5000);
            play1();
            play2();
            play2_1();
            play2_2();
            play3();
            play4();
            play2_1();
            play2_2();
            play6();
            play7();
            play2_1();
            play2_2();
            play9();
            play10();
            $('#ball').animate({ top: '90%', left: '45%' });
        });
        function play1() {
            $('#ball').animate({ top: '-=200px', left: '-=25px' }, 500);
        }
        function play2() {
            $('#ball').animate({ top: '-=20px', left: '-=5px' }, 150);;
        }
        function play2_1() {
            $('#ball').animate({ left: '-=5px' }, 150);
        }
        function play2_2() {
            $('#ball').animate({ top: '+=20px', left: '-=5px' }, 150);
        }
        function play3() {
            $('#ball').animate({ top: '+=200px', left: '-=25px' }, 500);
        }
        function play4() {
            $('#ball').animate({ top: '-=170px', left: '-=25px' }, 500);
        }
        function play6() {
            $('#ball').animate({ top: '+=150px', left: '-=25px' }, 500)
        }
        function play7() {
            $('#ball').animate({ top: '-=150px', left: '-=25px' }, 600);
        }
        function play9() {
            $('#ball').animate({ top: '+=130px', left: '-=25px' }, 600);
        }
        function play10() {
            $('#ball').animate({ top: '-=130px', left: '-=25px' }, 660);
        }

        $('#clean').on('click', function () {
            show(document.getElementById("shower"), 5000);
            document.getElementById("shower").animate([{ transform: 'translateX(0px' }, { transform: 'translateX(-55px)' }], { duration: 5000 });
        });

        $('#clean').click(function () {
            lovePoints += 1;
            clean += 1;
            console.log(lovePoints + ", " + clean);
            if (lovePoints == 500) {
                $('#msgBox').show();
                $('#message').text("Congrats, you maxed out the love bar! You and your pet are best friends! Keep taking care of your pet to earn even more points.");
                setTimeout(function () { $("#msgBox").hide(); }, 10000);
            }
            else if (lovePoints % 500 == 0 && lovePoints != 0) {
                $('#msgBox').show();
                $('#message').text("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
                setTimeout(function () { $("#msgBox").hide(); }, 5000);
            }
            if (lovePoints % 100 == 0 && lovePoints <= 500) {
                if (lovePoints == 100) {
                    document.getElementById('heart').animate([{ transform: 'translateX(0px)' }, { transform: 'translateX(50px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 200) {
                    document.getElementById('heart').animate([{ transform: 'translateX(50px)' }, { transform: 'translateX(100px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 300) {
                    document.getElementById('heart').animate([{ transform: 'translateX(100px)' }, { transform: 'translateX(150px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 400) {
                    document.getElementById('heart').animate([{ transform: 'translateX(150px)' }, { transform: 'translateX(200px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 500) {
                    document.getElementById('heart').animate([{ transform: 'translateX(200px)' }, { transform: 'translateX(250px)' }], { duration: 2500, fill: "forwards" });
                }
            }
        });

        $('#sleep').click(function () {
            document.getElementById("dog").src = "img/dog_sleep.png";
            setTimeout(function () { document.getElementById("dog").src = "img/dog.png"; }, 10000);
            show(document.getElementById("zzz"), 10000);
            
            lovePoints += 2;
            sleep += 1;
            console.log(lovePoints + ", " + sleep);
            if (sleep % 15 == 0) {
                $('#msgBox').show();
                $('#message').text("Your pet needs to play");
                setTimeout(function () { $("#msgBox").hide(); }, 3000);
            }
            if (lovePoints == 500) {
                $('#msgBox').show();
                $('#message').text("Congrats, you maxed out the love bar! You and your pet are best friends! Keep taking care of your pet to earn even more points.");
                setTimeout(function () { $("#msgBox").hide(); }, 10000);
            }
            else if (lovePoints % 500 == 0 && lovePoints != 0) {
                $('#msgBox').show();
                $('#message').text("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
                setTimeout(function () { $("#msgBox").hide(); }, 5000);
            }
            if (lovePoints % 100 == 0 && lovePoints <= 500) {
                if (lovePoints == 100) {
                    document.getElementById('heart').animate([{ transform: 'translateX(0px)' }, { transform: 'translateX(50px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 200) {
                    document.getElementById('heart').animate([{ transform: 'translateX(50px)' }, { transform: 'translateX(100px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 300) {
                    document.getElementById('heart').animate([{ transform: 'translateX(100px)' }, { transform: 'translateX(150px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 400) {
                    document.getElementById('heart').animate([{ transform: 'translateX(150px)' }, { transform: 'translateX(200px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 500) {
                    document.getElementById('heart').animate([{ transform: 'translateX(200px)' }, { transform: 'translateX(250px)' }], { duration: 2500, fill: "forwards" });
                }
            }
        });

        $('#speak').click(function () {
            lovePoints += 1;
            speak += 1;
            console.log(lovePoints + ", " + speak);
            if (lovePoints == 500) {
                $('#msgBox').show();
                $('#message').text("Congrats, you maxed out the love bar! You and your pet are best friends! Keep taking care of your pet to earn even more points.");
                setTimeout(function () { $("#msgBox").hide(); }, 10000);
            }
            else if (lovePoints % 500 == 0 && lovePoints != 0) {
                $('#msgBox').show();
                $('#message').text("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
                setTimeout(function () { $("#msgBox").hide(); }, 5000);
            }
            if (lovePoints % 100 == 0 && lovePoints <= 500) {
                if (lovePoints == 100) {
                    document.getElementById('heart').animate([{ transform: 'translateX(0px)' }, { transform: 'translateX(50px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 200) {
                    document.getElementById('heart').animate([{ transform: 'translateX(50px)' }, { transform: 'translateX(100px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 300) {
                    document.getElementById('heart').animate([{ transform: 'translateX(100px)' }, { transform: 'translateX(150px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 400) {
                    document.getElementById('heart').animate([{ transform: 'translateX(150px)' }, { transform: 'translateX(200px)' }], { duration: 2500, fill: "forwards" });
                }
                else if (lovePoints == 500) {
                    document.getElementById('heart').animate([{ transform: 'translateX(200px)' }, { transform: 'translateX(250px)' }], { duration: 2500, fill: "forwards" });
                }
            }
        });

        $('#pet').on('click', function () {
            show(document.getElementById("petHand"), 5000);
        });

        $('#play').on('click', function () {
            show(document.getElementById("ball"), 5000);
        });

        $('#clean').on('click', function () {
            show(document.getElementById("shower"), 5000);
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
            console.log(document.getElementById('pname').value)
            playAudio()
        });

        function playAudio() {
            var audio = new Audio('audio/background1.mp3');
            audio.loop = true;
            audio.play();
            console.log("playing audio")
        }

        $('#save').on('click', function () {
            let petNm = document.getElementById('pname').value;
            if (firsttime == 0) {
                firebase.firestore().collection("Points").add({ Name: email, Points: lovePoints });
            }
            else {
                firebase.firestore().collection("Points").doc(docid).update({ Points: lovePoints });
            }
        });

    } else {
        console.log("NO logged in");
    }

});

