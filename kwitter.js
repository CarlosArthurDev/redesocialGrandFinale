
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


var getname;
function addUser(){
  getname=document.getElementById("userName").value;
  firebase.database().ref("/").child(getname).update({
    purpose:"adicionar usuario"
  })
  localStorage.setItem("user",getname);
window.location="kwitterRoom.html";

}