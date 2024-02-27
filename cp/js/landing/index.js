(() => {
  $(".scroll-link").on("click", function (t) {
    var o = $(this);
    $("html, body").stop().animate({
      scrollTop: $(o.attr("href")).offset().top - 10
    }, 1e3), t.preventDefault()
  })
  // Aos

  AOS.init({
    once: true,
    mirror: false
  });

  // Production Slider

  $('.production-slider .owl-carousel').owlCarousel({
    nav: false,
    dots: true,
    loop: true,
    items: 1,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  })


  // Review Slider

  $('.review-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  })
  var myPlaylist = new jPlayerPlaylist(
    {
      jPlayer: "#jplayer_N",
      cssSelectorAncestor: "#jp_container_N",
    },
    [
      {
        title: "Usagi Flap",
        artist: "Nor",
        mp3: "https://cdn.nnsvn.me/cp/media/music/usagi.mp3",
        poster: "https://cdn.nnsvn.me/cp/media/aris-dancing.gif",
      },
      {
        title: "Kuru Kuru",
        artist: "Raphiiel",
        mp3: "https://cdn.nnsvn.me/cp/media/music/kurukuru.mp3",
        poster: "https://cdn.nnsvn.me/cp/media/kururin.gif",
      }
    ],
    {
      playlistOptions: {
        enableRemoveControls: true,
        autoPlay: false,
      },
      swfPath: "/js/landing",
      supplied: "webmv, ogv, m4v, oga, mp3",
      smoothPlayBar: true,
      keyEnabled: true,
      audioFullScreen: false,
    }
  );

  $(document).on(
    $.jPlayer.event.pause,
    myPlaylist.cssSelector.jPlayer,
    function () {
      $(".musicbar").removeClass("animate");
      $(".jp-play-me").removeClass("active");
      $(".jp-play-me").parent("li").removeClass("active");
    }
  );

  $(document).on(
    $.jPlayer.event.play,
    myPlaylist.cssSelector.jPlayer,
    function () {
      $(".musicbar").addClass("animate");
    }
  );

  $("#playlist").on("shown.bs.dropdown", function () {
    $(".mplayer .jp-playlist.open ul").css({
      left: "auto",
      right: "-21px",
      width: "300px",
    });
  });

  window.addEventListener('load', function () {
    $(".mplayer").css("display", "");
  });

})();