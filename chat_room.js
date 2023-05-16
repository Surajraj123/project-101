// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfzC5ErIqqfcBl_wI2P0KLvOHcgeVHH_c",
    authDomain: "lets-chat-web-app-62944.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-62944-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-62944",
    storageBucket: "lets-chat-web-app-62944.appspot.com",
    messagingSenderId: "157265683531",
    appId: "1:157265683531:web:4deb2dc7ac094061ad59ce"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = local.storage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function add_room(){
    room_name = document.getElementById("room_name").value;

    localStorage.setItem("rromname", room_name);

    window.location = "chat_page.html";

    firebase.database().rel("/").child(room_name).update({
        purpose: "Adding Room Name"
    });
}

function getData() {firebase.database().ref("/").on("value", function (snapshot) {document.getElementById("output").innerHTML = "";snapshot()}

)}
