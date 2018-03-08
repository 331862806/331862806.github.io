	$(document).ready(function() {
				
				
			setTimeout("displayimg()",2000);
  
		  $(".link_on").mousemove(function() {
				$(this).find('h3').slideDown();
		  });
		  $('.link_on').mouseleave(function(){
				$(this).find('h3').slideUp("fast");
		  });
  
		  $(".works ul li").mousemove(function() {
        	    $(this).addClass("work_at");
				$(this).find('span').fadeIn();
		  });
		  $('.works ul li').mouseleave(function(){
        	    $(this).addClass("work_at");
				$(this).find('span').fadeOut("fast");
		  });
  
		  $(".works2 ul li").mousemove(function() {
        	    $(this).removeClass("work_at");
				$(this).find('span').fadeIn();
		  });
		  $('.works2 ul li').mouseleave(function(){
        	    $(this).removeClass("work_at");
				$(this).find('span').fadeOut("fast");
		  });
		  
		  $(".head_l ul li").mousemove(function() {
				$(this).find('h3').slideDown();
		  });
		  $('.head_l ul li').mouseleave(function(){
				$(this).find('h3').slideUp("fast");
		  });
		  
		  $(".shop_bd ul li").mousemove(function() {
        	    $(this).addClass("atsa");
				$(this).find('a').fadeIn();
		  });
		  $('.shop_bd ul li').mouseleave(function(){
        	    $(this).removeClass("atsa");
				$(this).find('a').hide();
		  });
		  
		  $(".work_bd ul li").mousemove(function() {
				$(this).find('h4').show();
		  });
		  $('.work_bd ul li').mouseleave(function(){
				$(this).find('h4').hide();
		  });
		  
		  $(".work_bd ul li h4").click(function() {
				$(".work_bd ul li h5").show();
				$(".work_bd ul li h4").hide();
				$(".work_bd ul li h3").show(200);
		  });
		  $('.work_bd ul li h5').click(function(){
				$(".work_bd ul li h4").show();
				$(".work_bd ul li h5").hide();
				$(".work_bd ul li h3").hide(200);
		  });
		  $('.work_hd a').click(function(){
				$(".work_bd ul li h4").hide();
				$(".work_bd ul li h5").hide();
				$(".work_bd ul li h3").hide();
		  });
		  
		  $("#layout_auto").css("paddingTop",($(window).height()-660)/2);
			
	});
	function displayimg(){
	  $(".body_s").fadeOut(1000);
	};
	
o = {};  
o.speed = 1000;  
o.long = function() {  
    $(".back").animate({ width:$(window).width() }, o.speed, o.short );  
}  
o.short = function() {  
    $(".back").animate({ width:"100px" }, o.speed, o.long );  
}  
    
o.left = function() {  
    $(".back1").animate({ left:"0px" }, o.speed, o.right );  
}  
o.right = function() {  
    $(".back1").animate({left:$(window).width()-100 }, o.speed, o.left);  
} 

$(document).ready(function() {  
    o.long();  
    o.right();  
    var leftFlag = 0;  
    $(".prev").click(function(){
	  if(leftFlag>0) {
            leftFlag-=612;
			$(".bd").animate({left: '+=612'}, "slow");
			}
	});
  
    $(".next").click(function(){
	  if($(".bd").width()-leftFlag>=1836) {
			leftFlag+=612;
            $(".bd").animate({left: '-=612'}, "slow");
			}
	});  
});  