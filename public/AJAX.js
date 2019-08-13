"use strict"


function encode() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {

var res = this.responseText;
console.log(JSON.parse(res));
}
};
var emailRaw = document.getElementById("email").value;
var eventRaw = document.getElementById("eventSelect").value;
var email = encodeURIComponent(emailRaw);
var event = encodeURIComponent(eventRaw);
var request = "/add?" + "email=" + email + "&event=" + event;
   xhttp.open("GET",request, true);
   xhttp.send();
};
