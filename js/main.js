
/*Tramsition For Transition Section*/
$(document).ready(function(){
	$(".tab-two-content").hide();
	$(".tab-three-content").hide();

	$(".tab-one").click(function(){
		$(".tab-one-content").show();
		$(".tab-two-content").hide();
		$(".tab-three-content").hide();
	});

	$(".tab-two").click(function(){
		$(".tab-one-content").hide();
		$(".tab-two-content").show();
		$(".tab-three-content").hide();
	});

	$(".tab-three").click(function(){
		$(".tab-one-content").hide();
		$(".tab-two-content").hide();
		$(".tab-three-content").show();
	});
});

var header = document.getElementById("tab-button-area");
var btns = header.getElementsByClassName("tab-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  	var current = document.getElementsByClassName("tab-active");
  	current[0].className = current[0].className.replace(" tab-active", "");
  	this.className += " tab-active";
  });
}


/*Owl Carousel For Feature Section*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:false,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})


/*Owl Carousel For Testimonial Section*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:false,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})
