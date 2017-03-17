<<<<<<< HEAD
window.addEventListener("resize", debounce(function(event) {
							eventWidth=document.body.clientWidth;
							console.log(eventWidth + ' wide by ');
							bigIcon();
							if (eventWidth>1002){
								buttonMobile=false;
								$(".slider").removeClass("slider-transform-2-1");
								$(".slider").removeClass("slider-transform-2-2");	
								clearTimeout(tid1);
								clearTimeout(tid2);
								slidePosition=false;
								$(".slider").addClass("slider-transform");
								return slider1();

							}else{
								buttonMobile=true;
								clearTimeout(tid1);
								clearTimeout(tid2);
								$(".slider").removeClass("slider-transform");
								$(".arrow-right").removeClass("disabled");
								$(".arrow-left").removeClass("disabled");
								slidePosition=true;
								slidePositionSecond=false;
								slidePositionBack=false;
								return slider2();
							}
							
							},100));

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
var slidePositionSecond=false;
var slidePositionBack=false;
var buttonMobile;
function slider1() {
					if (slidePosition==true){
						
						$(".slider").removeClass("slider-transform-2-1");
						$(".slider").removeClass("slider-transform-2-2");
						$(".slider").toggleClass("slider-transform");
							console.log("slide:"+slidePosition);
							slidePosition=false;
							slidePositionSecond=false;
							$(".arrow-right").addClass("disabled");
							$(".arrow-left").removeClass("disabled");
						
						}else{
							$(".slider").toggleClass("slider-transform");
							console.log("slide:"+slidePosition);
							slidePosition=true;
							slidePositionSecond=false;
							
							$(".arrow-right").removeClass("disabled");
							$(".arrow-left").addClass("disabled");
							
						}
						
					tid1 = setTimeout(slider1, 5000); // repeat myself
				}
function activeButtonsMobile(left,right){
	if (right==1&&left==0){
		$(".arrow-right").addClass("disabled");
		$(".arrow-left").removeClass("disabled");
	}else if (right==0&&left==1){
	$(".arrow-right").removeClass("disabled");
	$(".arrow-left").addClass("disabled");
	}else if (right==0&&left==0){
	$(".arrow-right").addClass("disabled");
	$(".arrow-left").addClass("disabled");
	}else{
	$(".arrow-right").removeClass("disabled");
	$(".arrow-left").removeClass("disabled");		
	}
}				
function slider2() {
	console.log(slidePosition,
	slidePositionSecond,
	slidePositionBack);
					console.log("slide:"+slidePosition);
					if (slidePosition==true&&slidePositionSecond==false){
						$(".slider").removeClass("slider-transform");
						$(".slider").removeClass("slider-transform-2-2");
						$(".slider").addClass("slider-transform-2-1");
						activeButtonsMobile(1,1);
						if (slidePositionBack==false){
							slidePosition=false;
							slidePositionSecond=true;						
						}else{
							slidePosition=false;
							slidePositionSecond=false;
						}
					}else if (slidePosition==false&&slidePositionSecond==true) {
						$(".slider").removeClass("slider-transform-2-1");
						$(".slider").addClass("slider-transform-2-2");
						if (slidePositionBack==true){
							slidePosition=true;
							slidePositionSecond=false;
							slidePositionBack=false;
							activeButtonsMobile(1,1);
						}else{
							slidePosition=true;
							slidePositionSecond=false;
							slidePositionBack=true;
							activeButtonsMobile(0,1);
						}
					}else{
						$(".slider").removeClass("slider-transform-2-1");
						$(".slider").removeClass("slider-transform-2-2");
						slidePosition=true;
						slidePositionSecond=false;	
						slidePositionBack=false;
						activeButtonsMobile(1,0);
					}
					
					tid2 = setTimeout(slider2, 5000); // repeat myself
			}	
function changeSlider2(SP,SPS,SPB){
	slidePosition=SP;
	slidePositionSecond=SPS;
	slidePositionBack=SPB;
}			
	function slideReset(){
		main();
		bigIcon();
		menuMobile();
			if($(window).width()>1002){
				buttonMobile=false;
				tid1 = setTimeout(slider1, 5000);
				
			} else {
				
				slidePosition=true;
				buttonMobile=true;
				activeButtonsMobile(0,0);
				var tid2 = setTimeout(slider2, 5000);
				}
	}
function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}
function main(){
	console.log("read main");
	
	$(".bottom-footer-up").click(
	function(){
		 $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
	});
	
	if (detectmob()==true){
	$('.hcontack-phone').click(function(event){
	}	
	);	}else{
			$('.hcontack-phone').click(function(event){
		event.preventDefault();
		$(this).find('.contact-show').animate({ width: 'toggle'});
	}	);
	}
	$(".arrow-left").click(
	function(){
		if (buttonMobile==false){
		 if(slidePosition==false){
			 clearTimeout(tid1);
			 return slider1();
		}}else{
			/*buttonMobile*/
			if (slidePosition==true&&slidePositionSecond==false&&slidePositionBack==true){
				clearTimeout(tid2);
				changeSlider2(true,false,true);
				return slider2();
			}else if(slidePosition==false&&slidePositionSecond==false&&slidePositionBack==true){
				clearTimeout(tid2);
				changeSlider2(false,false,true);
				return slider2();				
			}
		}
    return false;
	});
		$(".arrow-right").click(
	function(){
		if (buttonMobile==false){
		 if(slidePosition==true){
			 clearTimeout(tid1);
			 return slider1();
		 }}else{
			/*buttonMobile*/
				if (slidePosition==true&&slidePositionSecond==false&&slidePositionBack==false){
				clearTimeout(tid2);
				changeSlider2(true,false,false);
				return slider2();
			}else if(slidePosition==false&&slidePositionSecond==true&&slidePositionBack==false){
				clearTimeout(tid2);
				changeSlider2(false,true,false);
				return slider2();				
			}
		}
    return false;
	});
}
window.onload = slideReset;

=======
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

>>>>>>> 13ad0f35ca7960a903caa3511d14b95fde8182c5
