window.addEventListener("resize", debounce(function(event) {
							eventWidth=document.body.clientWidth;
							console.log(eventWidth + ' wide by ');
							bigIcon();
							main();
							if (eventWidth>1002){
								
								clearTimeout(tid1);
								clearTimeout(tid2);
								if (slidePosition==true){
									$(".slider").addClass("slider-transform");
									
								}else{
									$(".slider").removeClass("slider-transform");
									$(".slider").removeClass("slider-transform-2");
								}
								return slider1();
							}else{
								clearTimeout(tid1);
								clearTimeout(tid2);
								if (slidePosition==true){
								$(".slider").addClass("slider-transform-2");
								}else{
									setTimeout(function(){
									$(".slider").removeClass("slider-transform");},250);
									$(".slider").removeClass("slider-transform-2");
								}
								return slider2();
							}
							
							},500));

function menuMobile(){
	$(".link-menu").click(
	function(){
		 $(".hmenu-mobile").slideToggle();
    return false;
	});
}						
function bigIcon(){
			console.log("read icon");
			if (document.body.clientWidth<=1002){
				$(".hcontact").find(".fa-1x").addClass("fa-2x");
				$(".hcontact").find(".fa-1x").removeClass("fa-1x");
				console.log(document.body.clientWidth);
				
			} else {
				console.log(document.body.clientWidth);
				$(".hcontact").find(".fa-2x").addClass("fa-1x");
				$(".hcontact").find(".fa-2x").removeClass("fa-2x");
			}
			
		}
		var eventWidth = null;
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}
var tid1;
var tid2;
var slidePosition=true;
function slider1() {
					if (slidePosition==true){
						
						$(".slider").removeClass("slider-transform-2");
						$(".slider").toggleClass("slider-transform");
							console.log("slide:"+slidePosition);
							slidePosition=false;
						}else{
							$(".slider").toggleClass("slider-transform");
							console.log("slide:"+slidePosition);
							slidePosition=true;
						}
						
					tid1 = setTimeout(slider1, 5000); // repeat myself
				}
				
function slider2() {
					if (slidePosition==true){
						$(".slider").removeClass("slider-transform");
						$(".slider").toggleClass("slider-transform-2");
							console.log("slide2:"+slidePosition);
							slidePosition=false;
						}else{
							$(".slider").toggleClass("slider-transform-2");
							console.log("slide2:"+slidePosition);
							slidePosition=true;
						}
					
					tid2 = setTimeout(slider2, 5000); // repeat myself
			}				
	function slideReset(){
		main();
		bigIcon();
		menuMobile();
			if($(window).width()>1002){
				
				tid1 = setTimeout(slider1, 5000);
				
			} else {
				var slidePosition=true;
				var tid2 = setTimeout(slider2, 5000);
				}
	}
function main(){
	console.log("read main");
	$(".slide").hover(function(){
		
		$(this).find(".slider-gray").addClass("slider-color");
		$(this).find(".slider-gray").addClass("slide-zoom");
		
		return false;
	}, function() {
		$(this).find(".slider-gray").removeClass("slider-color");
		$(this).find(".slider-gray").removeClass("slide-zoom");
		return false;
	});
	
	$(".bottom-footer-up").click(
	function(){
		 $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
	});
	if (document.body.clientWidth<=1002){
	$('.hcontack-phone').click(function(event){
	}	
	);	}else{
			$('.hcontack-phone').click(function(event){
		event.preventDefault();
		$(this).find('.contact-show').animate({ width: 'toggle'});
	}	
	);
	}
	
}
window.onload = slideReset;

