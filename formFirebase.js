// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCvp3uW7nlwsLtiCSd6x7go7RrZTCh2leo",
//   authDomain: "ipex3-22f1c.firebaseapp.com",
//   projectId: "ipex3-22f1c",
//   storageBucket: "ipex3-22f1c.firebasestorage.app",
//   messagingSenderId: "274556063135",
//   appId: "1:274556063135:web:57ce25e51b0fedb13681aa",
//   measurementId: "G-DW2NQ91S6V"
// };

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";    
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// //validation
// const form = document.querySelector("#userinfo");
// const reMail = new RegExp("[a-z]*[0-9]*@ssn.edu.in");
// function validateFormLogin(){
//     let m =document.getElementById("umail").value;
//     let p =document.getElementById("pwd").value;
//     let flag=0;
//     if (!usernameRegex.test(u))
//     {
//         alert("Invalid username");
//         flag=1;
//     }
//     if (/\d/.test(u) || /[-'/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g.test(u))
//         {
//             alert("Error: UseName contains Special Characters or numbers");
//             flag=1;
//         }
//     // console.log(re.test(m));
//     if (!reMail.test(m))
//     {
//         alert("Invalid Mail: enter ssn mailid")
//     }
//     if (flag!=1)
//     {
//         var path = window.location.pathname;
//         var page = path.split("/").pop();
//         console.log( page );
//         const auth = getAuth();
//         signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//         });
//     }
//     const auth = getAuth();
//     onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/auth.user
//         const uid = user.uid;
//         alert("Logged in successfully!");
//         // ...
//     } else {
//         // User is signed out
//         // ...
//     }
//     });
//     // if (!(//))

//     // alert("hiiii"+u);
// }

// function validateFormRegister(){
//     let email =document.getElementById("umail").value;
//     let password =document.getElementById("pwd").value;
//     console.log(email);
//     let flag=0;
//     if (!usernameRegex.test(u))
//     {
//         alert("Invalid username");
//         flag=1;
//     }
//     if (/\d/.test(u) || /[-'/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g.test(u))
//         {
//             alert("Error: UseName contains Special Characters or numbers");
//             flag=1;
//         }
//     // console.log(re.test(m));
//     if (!reMail.test(m))
//     {
//         alert("Invalid Mail: enter ssn mailid")
//     }
//     if (flag!=1)
//     {
//         console.log(user);
//         const auth = getAuth();
//         createUserWithEmailAndPassword(auth, email, password)
//           .then((userCredential) => {
//             // Signed up 
//             const user = userCredential.user;
//             console.log(user);
//             // ...
//           })
//           .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // ..
//           });
//     }
//     // if (!(//))
//     const auth = getAuth();
//     onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/auth.user
//         const uid = user.uid;
//         alert("Logged in successfully!");
//         // ...
//     } else {
//         // User is signed out
//         // ...
//     }
//     });
//     // alert("hiiii"+u);
// }
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCvp3uW7nlwsLtiCSd6x7go7RrZTCh2leo",
//     authDomain: "ipex3-22f1c.firebaseapp.com",
//     projectId: "ipex3-22f1c",
//     storageBucket: "ipex3-22f1c.firebasestorage.app",
//     messagingSenderId: "274556063135",
//     appId: "1:274556063135:web:57ce25e51b0fedb13681aa",
//     measurementId: "G-DW2NQ91S6V"
//   };
//   firebase.initializeApp(firebaseConfig);
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);

// // Validation Regex
// const emailRegex = /^[a-zA-Z0-9._%+-]+@ssn\.edu\.in$/;
// const usernameRegex = /^[a-zA-Z]+$/;

// // Login Validation
// function validateFormLogin() {
//     let email = document.getElementById("umail").value.trim();
//     let password = document.getElementById("pwd").value.trim();
//     let username = document.getElementById("uname")?.value.trim(); // Assuming you have an input field for username

//     let flag = 0;

//     if (!usernameRegex.test(username)) {
//         alert("Invalid username. Only alphabets are allowed.");
//         flag = 1;
//     }

//     if (!emailRegex.test(email)) {
//         alert("Invalid Email: Please enter a valid SSN email ID.");
//         flag = 1;
//     }

//     if (password.length < 6) {
//         alert("Password should be at least 6 characters long.");
//         flag = 1;
//     }

//     if (flag === 0) {
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 alert("Logged in successfully!");
//                 console.log("User:", userCredential.user);
//             })
//             .catch((error) => {
//                 alert(`Error: ${error.message}`);
//             });

//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 console.log("User is logged in:", user.uid);
//             } else {
//                 console.log("User is logged out.");
//             }
//         });
//     }
// }

// // Registration Validation
// function validateFormRegister() {
//     let email = document.getElementById("umail").value.trim();
//     let password = document.getElementById("pwd").value.trim();
//     let username = document.getElementById("uname")?.value.trim(); // Assuming a username field

//     let flag = 0;

//     if (!usernameRegex.test(username)) {
//         alert("Invalid username. Only alphabets are allowed.");
//         flag = 1;
//     }

//     if (!emailRegex.test(email)) {
//         alert("Invalid Email: Please enter a valid SSN email ID.");
//         flag = 1;
//     }

//     if (password.length < 6) {
//         alert("Password should be at least 6 characters long.");
//         flag = 1;
//     }

//     if (flag === 0) {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 alert("User registered successfully!");
//                 console.log("User:", userCredential.user);
//             })
//             .catch((error) => {
//                 alert(`Error: ${error.message}`);
//             });

//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 console.log("User is logged in:", user.uid);
//             } else {
//                 console.log("User is logged out.");
//             }
//         });
//     }
// }

//  Load Firebase SDK from CDN (No need for npm imports)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

//  Replace this with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvp3uW7nlwsLtiCSd6x7go7RrZTCh2leo",
    authDomain: "ipex3-22f1c.firebaseapp.com",
    projectId: "ipex3-22f1c",
    storageBucket: "ipex3-22f1c.firebasestorage.app",
    messagingSenderId: "274556063135",
    appId: "1:274556063135:web:57ce25e51b0fedb13681aa",
    measurementId: "G-DW2NQ91S6V"
  };
//  Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//  Validation Regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@ssn\.edu\.in$/;
const usernameRegex = /^[a-zA-Z]+$/;

//  Login Validation Function
function validateFormLogin(event) {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById("umail").value.trim();
    let password = document.getElementById("pwd").value.trim();
    let forgotpass=document.getElementById("forgpass");
    // let usernameField = document.getElementById("uname"); 
    // let username = usernameField ? usernameField.value.trim() : "";

    // if (!usernameRegex.test(username)) {
    //     alert("Invalid username. Only alphabets are allowed.");
    //     return;
    // }

    if (!emailRegex.test(email)) {
        alert("Invalid Email: Please enter a valid SSN email ID.");
        return;
    }

    if (password.length < 6) {
        alert("Password should be at least 6 characters long.");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Logged in successfully!");
            console.log("User:", userCredential.user);
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("User is logged in:", user.uid);
        } else {
            console.log("User is logged out.");
        }
    });
    let ForgotPassword=()=>{
        sendPasswordResetEmail(auth,email).then(()=>{
            alert("Password reset link sent");
        }).catch((error)=>{
            alert(error);
        })
    }
    forgotpass.addEventListener("click",ForgotPassword);
}

//  Registration Validation Function
function validateFormRegister(event) {
    event.preventDefault(); // Prevent form submission
    alert("HIIII");
    let email = document.getElementById("umail").value.trim();
    let password = document.getElementById("pwd").value.trim();
    let usernameField = document.getElementById("uname"); 
    let username = usernameField ? usernameField.value.trim() : "";

    if (!usernameRegex.test(username)) {
        alert("Invalid username. Only alphabets are allowed.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid Email: Please enter a valid SSN email ID.");
        return;
    }

    if (password.length < 6) {
        alert("Password should be at least 6 characters long.");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("User registered successfully!");
            console.log("User:", userCredential.user);
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("User is logged in:", user.uid);
        } else {
            console.log("User is logged out.");
        }
    });
}

//  Attach Validation to Form Submission
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (loginForm) {
        loginForm.addEventListener("submit", validateFormLogin);
    }
    if (registerForm) {
        registerForm.addEventListener("submit", validateFormRegister);
    }
});
