$(document).ready(function(){


  $('#email').hover(function(){
    $('#innerEmail').css("opacity","1");
  }, function(){
    $('#innerEmail').css("opacity","0");
  });

  $('#phone').hover(function(){
    $('#innerPhone').css("opacity","1");
  }, function(){
    $('#innerPhone').css("opacity","0");
  });

  $('#emaillink').click(function(){
    var $tmp = $("<textarea>");
      $("body").append($tmp);
      $tmp.val($('#emaillink').text()).select();
      document.execCommand("copy");
      $tmp.remove();
  });

  $('#phonelink').click(function(){
    var $tmp = $("<textarea>");
      $("body").append($tmp);
      $tmp.val($('#phonelink').text()).select();
      document.execCommand("copy");
      $tmp.remove();
  });


  $(window).scroll(function(){                   //scrollbar function
    var scroll = $(window).scrollTop(),
            dh = $(document).height(),
            wh = $(window).height(),
        value = (scroll / (dh-wh)) * 100;

        $('#scrollbar').css('width', value + '%');
  });



  var $el = $('#fixedmenu'),                     //fixedmenu scroll function
      top = $el.offset().top;

  $(window).scroll(function () {
      var pos = $(window).scrollTop();

      if(pos > top  && !$el.hasClass('fixed')) {
          $el.addClass('fixed');
      } else if (pos < top  && $el.hasClass('fixed')) {
          $el.removeClass('fixed');
      }

    });




  });
