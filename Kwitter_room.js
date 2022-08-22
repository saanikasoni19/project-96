// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

document.getElementById("user_name").innerText=localStorage.getItem("user_name");

function addRoom(){
  RoomName = document.getElementById("RoomName").value;
  firebase.database().ref("/").child(RoomName).update({
        purpose : "adding RoomName"
  })
  localStorage.setItem("RoomName", RoomName);
  window.location="./Kwitter_room.html";
}

document.getElementById("RoomName").innerHTML=localStorage.getItem("RoomName");

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' > #"+ Room_names 
  +"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page,html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("RoomName");
  window.location="index.html";
}