function login() {
  var user = $("#username").val();
  var pass = $("#password").val();

  if (user === "admin") {
    if (pass === "pass") {
      location.replace("Resources/setup.html");
    } else {
      alert("Incorrect Password");
    }
  } else {
    alert("Incorrect Username")
  }
}

function forward() {
  var opt = $("#selection :Selected").text();

  if (opt === "National Legal Forum") {
    window.open("https://himanshumasant.github.io/national-legal-forum/");
  } else if (opt === "Jan Suraksha Kendra") {
    window.open("https://himanshumasant.github.io/jan-suraksha-kendra/");
  } else if (opt === "Jan Sahayata Kendra") {
    window.open("https://himanshumasant.github.io/jan-sahayata-kendra/");
  } else {
    alert("Invalid Selection");
  }
}
