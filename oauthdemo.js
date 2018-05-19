hello.init({
  google: "430428212432-f34jau77k2bipkvrmeefn96ks0e04iu1.apps.googleusercontent.com"
});

hello.on('auth.login', function (auth) {

  // add a greeting and access the thumbnail and name from
  // the authorized response

  hello(auth.network).api('/me').then(function (resp) {
    var lab = document.createElement("div");
    lab.id = "pic_and_greet";
    lab.innerHTML = '<img src="' + resp.thumbnail + '" /> Hey ' + resp.name;
    document.body.appendChild(lab);
  });
});

// remove the greeting when we log out

hello.on('auth.logout', function () {
  var lab = document.getElementById("pic_and_greet");
  if (lab != null) document.body.removeChild( lab );
});

console.log('test');
