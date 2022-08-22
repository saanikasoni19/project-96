const firebaseConfig = {
    apiKey: "AIzaSyBSHv8RhcXIU5JzMYESDnscEK_GVDjLl4c",
    authDomain: "kwitter-4e66a.firebaseapp.com",
    databaseURL: "https://kwitter-4e66a-default-rtdb.firebaseio.com/",
    projectId: "kwitter-4e66a",
    storageBucket: "kwitter-4e66a.appspot.com",
    messagingSenderId: "560117208467",
    appId: "1:560117208467:web:8b74b6a29057f28fa54466",
    measurementId: "G-NJDE580Z3P"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
function logout(){
    localStorage.removeItem("User");
    localStorage.removeItem("RoomName");
    window.location="index.html";
}
user_name = localStorage.getItem("user_name");
RoomName = localStorage.getItem("RoomName");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(RoomName).push({
          name:User,
          message:msg,
          like:0
    });
    document.getElementById("msg").value= "";
}