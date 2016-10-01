$(document).ready(function(){
  $('.abc').slick({
    infinite:true,accessibility:true,arrows:false,autoplay:true,slidesToShow:2, slidesToScroll:2
  });
});
			
$('.overlay').hover(function(){
  $(this).find('h4').css("display","block"); 
},function(){
   $(this).find('h4').css("display","none"); 
});			