var customScripts = {

  onePageNav: function () {

    $('#mainNav').onePageNav({
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 950,
      scrollThreshold: 0.2,
      filter: '',
      easing: 'swing',
      begin: function () {
        //I get fired when the animation is starting
      },
      end: function () {
        //I get fired when the animation is ending
        if (!$('#main-nav ul li:first-child').hasClass('active')) {
          $('.header').addClass('addBg');
        } else {
          $('.header').removeClass('addBg');
        }

      },
      scrollChange: function ($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
        if (!$('#main-nav ul li:first-child').hasClass('active')) {
          $('.header').addClass('addBg');
        } else {
          $('.header').removeClass('addBg');
        }
      }
    });


    $('#coso').onePageNav({
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 950,
      scrollThreshold: 0.2,
      filter: '',
      easing: 'swing',
      begin: function () {
        //I get fired when the animation is starting
      },
      end: function () {
        //I get fired when the animation is ending
        if (!$('#coso-nav ul li:first-child').hasClass('active')) {
          $('.header').addClass('addBg');
        } else {
          $('.header').removeClass('addBg');
        }

      },
      scrollChange: function ($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
        if (!$('#coso-nav ul li:first-child').hasClass('active')) {
          $('.header').addClass('addBg');
        } else {
          $('.header').removeClass('addBg');
        }
      }
    });

    $("a[href='#top']").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
    $("a[href='#basics']").click(function () {
      $("html, body").animate({ scrollTop: $('#services').offset().top }, "slow");
      return false;
    });
  },
  waySlide: function () {
    /* Waypoints Animations
   ------------------------------------------------------ */
    $('#services').waypoint(function () {
      $('#services .col-md-3').addClass('animated fadeInUp show');
    }, { offset: 800 });
    $('#aboutUs').waypoint(function () {
      $('#aboutUs').addClass('animated fadeInUp show');
    }, { offset: 800 });
    $('#historia').waypoint(function () {
      $('#historia').addClass('animated fadeInUp show');
    }, { offset: 800 });
    $('#contactUs').waypoint(function () {
      $('#contactUs .parlex-back').addClass('animated fadeInUp show');
    }, { offset: 800 });

  },
  init: function () {
    customScripts.onePageNav();
    customScripts.waySlide();
  }
}
$('document').ready(function () {

  customScripts.init();
  $('#services .col-md-3, #features, #aboutUs, #clients, #historia, #plans, #contactUs .parlex-back').css('opacity', '0');
  $("#menuToggle").toggle(function () {
    $(this).find('i').removeClass('fa-bars').addClass('fa-remove');
    $('#mainNav').animate({ "right": "0px" }, "slow");
  }, function () {
    $('#mainNav').animate({ "right": "-200px" }, "slow");
    $(this).find('i').removeClass('fa-remove').addClass('fa-bars');
  });
});
