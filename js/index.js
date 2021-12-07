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

$('#signUp').on('click', function (e) {
    e.preventDefault();
    email = document.getElementById('email').value
    password = 'fffggg'; //document.getElementById('password').value;
    cpassword = 'fffggg'; //document.getElementById('cpassword').value;

    console.log('mail' + email)
    console.log('password : ' + password)
    console.log('confirm: ' + cpassword)

    if (password !== cpassword) {
        window.alert("Please make sure that the passwords match")
    }
    else {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
                // Signed in
                // ...

                petChoice = document.querySelector('input[name="pet"]:checked').value;
                console.log(petChoice)
                window.open(petChoice + '.html')

                console.log("You are signed up");
                //firebase.firestore().collection("petstatus").doc("..").update({livepoint: point})
                //window.location.href = "Login.html";
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error.code);
                console.log(errorMessage);
            });
    }
});

$('#signIn').on('click', function (e) {
    e.preventDefault();
    email = document.getElementById('logInemail').value
    password = 'fffggg'; //document.getElementById('logInpassword').value;

    console.log('mail' + logInemail)
    console.log('password : ' + logInpassword)

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                // Signed in
                // ...

                petChoice = document.querySelector('input[name="pet"]:checked').value;
                console.log(petChoice)
                window.open(petChoice + '.html')

                console.log("You are signed up");
                //firebase.firestore().collection("petstatus").doc("..").update({livepoint: point})
                //window.location.href = "Login.html";
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error.code);
                console.log(errorMessage);
            });
    
});

