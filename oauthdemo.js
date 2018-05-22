hello.init({
  google: "client id here"
});

hello.on('auth.login', function (auth) {

  hello(auth.network).api('/me').then(function (resp) {
    var lab = document.createElement("div");
    lab.id = "pic_and_greet";
    lab.innerHTML = '<img src="' + resp.thumbnail + '" /> Hey ' + resp.name;
    document.body.appendChild(lab);
  });
});

hello.on('auth.logout', function () {
  var lab = document.getElementById("pic_and_greet");
  if (lab != null) document.body.removeChild( lab );
});
