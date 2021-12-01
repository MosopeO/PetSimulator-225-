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

$('#loginBtn').on('click', function () {
    document.getElementById('welcome').style.display = "none";
    document.getElementById('login').style.display = "block";
    playAudio()
});

$('#signupBtn').on('click', function () {
    document.getElementById('welcome').style.display = "none";
    document.getElementById('signup').style.display = "block";
    playAudio()
});

function playAudio() {
    var audio = new Audio('audio/background1.mp3');
    audio.loop = true;
    audio.play();
    console.log("playing audio")
}

$("#help_btn").click(function () {
    if (document.getElementById('help_info').style.display == "block") {
        document.getElementById('welcome').style.display = "block";
        document.getElementById('signup').style.display = "none";
        document.getElementById('login').style.display = "none";
        document.getElementById('help_info').style.display = "none";
    }
    else {
        document.getElementById('welcome').style.display = "none";
        document.getElementById('signup').style.display = "none";
        document.getElementById('login').style.display = "none";
        document.getElementById('help_info').style.display = "block";
    }
});

firebase.firestore().collection("SignUp").add("New input")