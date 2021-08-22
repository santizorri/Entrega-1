//Acá abajo esta la parte de login de google

function onSignIn(googleUser) {
  // Useful data for your client-side scripts: Acá se encuentran los datos obtenidos de la cuenta de google
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());
  // The ID token you need to pass to your backend:

  let usuario = {}; //Creamos un objeto para guardar todos los datos que querramos, en este caso la imagen, el rpimer nombre y el estado. 

  usuario.nombre = profile.getGivenName();
  usuario.imagen = profile.getImageUrl();
  usuario.estado = "conectado";

  //Guardamos los datos en el Local Storage
  localStorage.setItem('usuario', JSON.stringify(usuario));

  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);

  location.href = "home.html"; // Nos redirecciona a la pagina principal del eMercado

}

//Funciones de google para el logout y funcionamiento adecuado

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {  });

  localStorage.clear(); ///Borra todo el localStorage
  location.href = "index.html"; //Nos devuelve a a la pantalla de login
}

function onLoad() {
  gapi.load('auth2', function () {
    gapi.auth2.init();
  });
}
