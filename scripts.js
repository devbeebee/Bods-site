var username = "UNKOWN";

var json = "";

function save() {
  username = document.getElementById("usernameinput").value;
  localStorage.setItem("username", username);
  load();
}
function load() {
  username = localStorage.getItem("username");

  $("#mainUser").text(username);
}

load();

function getJsonData() {
  $.getJSON("/app data/t7online/user/properties.json", function (jd) {

    $("#jsonUser").text(jd.playerName);
  });
}
getJsonData();
