$(document).ready(function(){


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
