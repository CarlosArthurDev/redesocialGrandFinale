
var firebaseConfig = {
  apiKey: "AIzaSyC2ClfoKv2MqRV7CnbJvH7DqRJ9mBTqQ6U",
  authDomain: "redesocial-35805.firebaseapp.com",
  databaseURL: "https://redesocial-35805-default-rtdb.firebaseio.com",
  projectId: "redesocial-35805",
  storageBucket: "redesocial-35805.appspot.com",
  messagingSenderId: "394529187199",
  appId: "1:394529187199:web:77d356515fbbb83495a64a"
};

firebase.initializeApp(firebaseConfig)


  userName = localStorage.getItem("user");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
 input_name=document.getElementById("roomName").value;
 firebase.database().ref("/").child(input_name).update({
  purpose:"addRoom"
 
 })
 localStorage.setItem("chave",input_name);
 window.location="kwitterPage.html"
}

function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { 
      childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
