$(document).ready(function(){

  (function($) {

    $('#header__icon').click(function(e){
      console.log("calling");
      e.preventDefault();
      $('body').toggleClass('with--sidebar');
    });

    $('#site-cache').click(function(e){
      $('body').removeClass('with--sidebar');
    });

    $('.secondLevelMenu').click(function(e){
      console.log("clicked element:");
      console.log(this);
      e.preventDefault();
      var root = $(this).parent().find("ul");
      console.log(root);
      $(this).parent().find("ul").toggleClass('openedChildren');
    });


  })(jQuery);

});
