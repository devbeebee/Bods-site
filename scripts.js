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
  $.getJSON("project.json", function (jd) {
    console.log(jd.ip);
  });
}
getJsonData();
