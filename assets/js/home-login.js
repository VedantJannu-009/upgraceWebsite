var homeModal = document.getElementById("home-modal");
var loginBox = document.getElementById("login-box");
var homeMOdalClosebtn = document.getElementById("home-modal-closebtn");

loginBox.onclick = function(){
    homeModal.style.top='0%';
}

homeMOdalClosebtn.onclick = function(){
    homeModal.style.top='-100%';
}