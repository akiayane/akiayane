
$.ajax({
  type:'GET',
  dataType:'json',
  url: "en.json",
  cache:true,
  success: function(data){
    $('#meet').fadeIn(1200);
    $('#meet').append(data.title);
    $('#meet').append(data.hr);
    $('#meet').append(data.subtitle);
  },
  error: function(data){
    console.log("there is an error")
  }
});
