(function () {
  /* if(window.location.pathname == "/" || window.location.pathname == "/dashboard" || window.location.pathname.split("/")[1] == "profile"){
    document.body.style.overflow = 'hidden';
    preloader.style.display = null;
    window.addEventListener("load", function () {
      preloader.className += " fade";
      setTimeout(function () {
        preloader.style.display = "none";
        document.body.style.overflow = null;
      }, 500);
    });
  } */

  /* function triggerLoadScreen(timeout) {
    preloader.style.display = null;
    setTimeout(function () {
      preloader.className = "preloader";
      document.body.style.overflow = 'hidden';
    }, 10);

    setTimeout(function () {
      preloader.className += " fade";
      setTimeout(function () {
        preloader.style.display = "none";
        document.body.style.overflow = null;
      }, 500);
    }, timeout);
  } */

  var html = document.getElementsByTagName("html");

  document.addEventListener('DOMContentLoaded', removePreloader);

  // set a timer if after 5 seconds the page still not loaded, remove the preloader
  setTimeout(removePreloader, 5000);

  function removePreloader() {
    var preloader = document.getElementById("preloader");
    preloader.className += " fade";
    setTimeout(function () {
      preloader.style.display = "none";
      document.body.style.overflow = null;
    }, 200);
  }
})();
