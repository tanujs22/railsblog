$(document).ready(function(){
  $('.abc').slick({
    infinite:true,
    autoplaySpeed:5000,
    speed:1000,
    accessibility:true,
    arrows:false,
    autoplay:true,
    slidesToShow:2,
    slidesToScroll:2,
     responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        
                }
    }]
  });
});

$('#welcome .col-sm-4').hover(function(){
 $(this).find('img').css("transform","scale(1.1)");
 
 

},function(){
   $(this).find('img').css("transform","scale(1.0)");
});	

$('.overlay').hover(function(){
  $(this).find('h4').css("display","block"); 
},function(){
   $(this).find('h4').css("display","none"); 
}); 