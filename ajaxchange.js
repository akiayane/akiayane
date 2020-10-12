
var langStr = "en";

function hidealldiv(){
  $('#meet').fadeOut(400);
  $('#profileHref').fadeOut(400);
  $('#educationHref').fadeOut(400);
  $('#skillsHref').fadeOut(400);
  $('#moreinfoHref').fadeOut(400);
  $('#contactsHref').fadeOut(400);
  $('#prof_title').fadeOut(400);
  $('#prof_left').fadeOut(400);

  $('#edu_title').fadeOut(400);
  $('#edu_right1').fadeOut(400);
  $('#edu_right2').fadeOut(400);
  $('#edu_left').fadeOut(400);

  $('#skills_title').fadeOut(400);
  $('#skills_right').fadeOut(400);
  $('#skills_left').fadeOut(400);

  $('#more_title').fadeOut(400);
  $('#more_left').fadeOut(400);
  $('#more_right').fadeOut(400);
  $('#contact_title').fadeOut(400);

};

function showalldiv(){
  $('#meet').fadeIn(400);
  $('#profileHref').fadeIn(400);
  $('#educationHref').fadeIn(400);
  $('#skillsHref').fadeIn(400);
  $('#moreinfoHref').fadeIn(400);
  $('#contactsHref').fadeIn(400);
  $('#prof_title').fadeIn(400);
  $('#prof_left').fadeIn(400);

  $('#edu_title').fadeIn(400);
  $('#edu_right1').fadeIn(400);
  $('#edu_right2').fadeIn(400);
  $('#edu_left').fadeIn(400);

  $('#skills_title').fadeIn(400);
  $('#skills_right').fadeIn(400);
  $('#skills_left').fadeIn(400);

  $('#more_title').fadeIn(400);
  $('#more_left').fadeIn(400);
  $('#more_right').fadeIn(400);
  $('#contact_title').fadeIn(400);

};

function ajaxchange(langStr){
  $.ajax({
    type:'GET',
    dataType:'json',
    url: langStr+".json",
    cache:true,
    success: function(data){

      setTimeout(function() {
        $('#meet').empty();
        $('#meet').append(data.title);
        $('#meet').append(data.hr);
        $('#meet').append(data.subtitle);
        $('#profileHref').empty();
        $('#profileHref').append(data.profileHref);
        $('#educationHref').empty();
        $('#educationHref').append(data.educationHref);
        $('#skillsHref').empty();
        $('#skillsHref').append(data.skillsHref);
        $('#moreinfoHref').empty();
        $('#moreinfoHref').append(data.moreinfoHref);
        $('#contactsHref').empty();
        $('#contactsHref').append(data.contactsHref);

        $('#prof_title').empty();
        $('#prof_title').append(data.prof_title);
        $('#prof_left').empty();
        $('#prof_left').append(data.prof_left);

        $('#edu_title').empty();
        $('#edu_title').append(data.edu_title);
        $('#edu_right1').empty();
        $('#edu_right2').empty();
        $('#edu_right1').append(data.edu_right1);
        $('#edu_right2').append(data.edu_right2);
        $('#edu_left').empty();
        $('#edu_left').append(data.edu_left);

        $('#skills_title').empty();
        $('#skills_title').append(data.skills_title);
        $('#skills_right').empty();
        $('#skills_right').append(data.skills_right);
        $('#skills_left').empty();
        $('#skills_left').append(data.skills_left);

        $('#more_title').empty();
        $('#more_title').append(data.more_title);
        $('#more_left').empty();
        $('#more_left').append(data.more_left);
        $('#more_right').empty();
        $('#more_right').append(data.more_right);
        $('#contact_title').empty();
        $('#contact_title').append(data.contact_title);


      }, 400);



    },
    error: function(data){
      console.log("there is an error")
    }
  });
};


$('#langsw').click(function(){

      if($(this).prop("checked") == true){
          console.log("Checkbox is checked.");
          langStr = "ru";
          console.log(langStr);

          hidealldiv();
          ajaxchange(langStr);
          showalldiv();
      }
      else if($(this).prop("checked") == false){
          console.log("Checkbox is unchecked.");
          langStr = "en";
          console.log(langStr);

          hidealldiv();
          ajaxchange(langStr);
          showalldiv();
      }
  });
