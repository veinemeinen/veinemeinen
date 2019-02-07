$(document).ready(function () {

  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
  }

  $(".button").on("click tap", function() {
    toggleSidebar();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

}); 





(".form").on('click', function(){
  $(this).addClass('active');
});

$(".submit").on('click', function() {
  $(this).parent().parent().hide(300);
  $(".ok_message").addClass("active");
});

$(".ok_message").on('click', function() {
  $(this).removeClass("active");
  $(".form").removeClass("active").show();
});