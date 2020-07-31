/*To top*/

$('#top-btn').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 1000);
});

/* Hover */

$('.features-left-wrap').mouseenter(function() {
        $(this).find('path').css('stroke', '#c51718');
    })
.mouseleave(function() {
    $(this).find('path').css('stroke', '#1e1e1e');
});
$('.features-right-wrap').mouseenter(function() {
        $(this).find('path').css('stroke', '#c51718');
    })
.mouseleave(function() {
    $(this).find('path').css('stroke', '#1e1e1e');
});

/*Slider*/
$(document).ready(function(){

    var left1 = $('.slide-left-col'),
        right1 = $('.slide-right-col'),
        left2 = $('.slide-left-bottom'),
        right2 =  $('.slide-right-bottom');

        var width1 = $(window).width();
        var width2 = $('.slide-middle-col').width();
        var result1 = (width1 - width2) /2;

        left1.width(result1);
        right1.width(result1);
        left2.width(result1);
        right2.width(result1);
});
$(window).resize(function() {
    var left1 = $('.slide-left-col'),
        right1 = $('.slide-right-col'),
        left2 = $('.slide-left-bottom'),
        right2 =  $('.slide-right-bottom');

        var width1 = $('.main-content-row').width();
        var width2 = $('.slide-middle-col').width();
        var result1 = (width1 - width2) /2;

        left1.width(result1);
        right1.width(result1);
        left2.width(result1);
        right2.width(result1);

});


$(window).resize(function() {
  $('#test').prepend('<div>' + $(window).width() + '</div>');
});


// (function () {
//     var left1 = $('.slide-left-col'),
//         right1 = $('.slide-right-col'),
//         left2 = $('.slide-left-bottom'),
//         right2 =  $('.slide-right-bottom');
    

//     function setColWidth() {
//         var width1 = $('.main-content-row').width();
//         var width2 = $('.slide-middle-col').width();
//         var result1 = (width1 - width2) /2;

//         left1.width(result1);
//         right1.width(result1);
//         left2.width(result1);
//         right2.width(result1);
//     }
//     setColWidth();


//     $(window).resize(function () {
//         setColWidth();
//     })
// })();


/*Mobile menu*/

$(document).ready(function(){

    $('.mobile-menu-item').has( "ul" ).addClass('not-empty');

    $('.show-sub-mobile-menu').click(function(){
        $('.mobile-sub-menu').removeClass('active-sub').addClass('inactive-sub');

        $(this).prev('.mobile-sub-menu').removeClass('inactive-sub').addClass('active-sub');
        $('.mobile-sub-menu.active-sub').slideToggle();
        $('.mobile-sub-menu.inactive-sub').slideUp();
        // $('.show-sub-mobile-menu').not(this).removeClass('active-sub').find('.mobile-sub-menu').slideUp();
        // $('.mobile-sub-menu').not(this).removeClass('active-sub').slideUp();

        $(this).toggleClass('menu-roll-up');


    });


    $('.show-sub-mobile-menu').click(function() {
        $('.show-sub-mobile-menu').not(this).removeClass('menu-roll-up');
    });

$('.mobile-menu-btn').click(function(){
    $(this).toggleClass('focus-menu')
    $('.mobile-header-navbar').toggle();
    $('body').toggleClass('mobile-menu-open');
});

 
});

/*Preloader*/


$(window).on("load", function() {
    $('.preloader-wrap').delay(2000).fadeOut();
});

/*Modal window*/
$(document).ready(function(){
    $("#apply-btn").click(function() {
        $(".modal-window").show();
    });

    $('.close-btn').click(function(){
        $(".modal-window").hide();
    });

    $('#vacancy-submit').click(function() {
         $(".modal-window").hide();
        $('#success-modal-2').show();
        return false;
     });

    $('.close-btn').click(function(){
        $('#success-modal-2').hide();
    });

});
$(document).ready(function(){
    $("#education-btn").click(function() {
        $(".modal-window").show();
    });
    
    $('.close-btn').click(function(){
        $(".modal-window").hide();
    });
});

$(document).ready(function() {
    $('#education-submit').click(function() {
         $(".modal-window").hide();
        $('#success-modal-4').show();
        return false;
     });

    $('.close-btn').click(function(){
        $('#success-modal-4').hide();
    });
});

//Open world modal
$(document).ready(function() {
$('.world-btn-wrap').click(function() {
        $('.modal-world').show();
        return false;
     });

    $('.close-btn').click(function(){
        $('.modal-world').hide();
    });
});


//Success modal for subscribe form
$(document).ready(function() {
    $('#sub-submit').click(function() {
         $(".modal-window").hide();
        $('#success-modal-1').show();
        return false;
     });

    $('.close-btn').click(function(){
        $('#success-modal-1').hide();
    });
});

//Success modal for message form
$(document).ready(function() {
    $('#message-submit').click(function() {
        $(".modal-window").hide();
        $('#success-modal-3').show();
        return false;
     });

    $('.close-btn').click(function(){
        $('#success-modal-3').hide();
    });
});

$(document).ready(function(){
    $(".write-msg").click(function() {
        $(".modal-window").show();
    });

    $('.close-btn').click(function(){
        $(".modal-window").hide();
    });

    $('#contact-submit').click(function() {
        $(".modal-window").hide();
        $('#success-modal-5').show();
        return false;
     });

    $('.close-btn').click(function(){
        $('#success-modal-5').hide();
    });

});

/*Animation*/
$( "#animated-50mm" ).hover(function() {
    $( this ).toggleClass( "active" );
});

$( "#animated-70mm" ).hover(function() {
    $( this ).toggleClass( "active" );
});

$( "#animated-76mm" ).hover(function() {
    $( this ).toggleClass( "active" );
});

$( "#animated-88mm" ).hover(function() {
    $( this ).toggleClass( "active" );
});

$( "#animated-76doors" ).hover(function() {
    $( this ).toggleClass( "active" );
});

$( "#animated-88doors" ).hover(function() {
    $( this ).toggleClass( "active" );
});


/*Systems*/
$(document).ready(function(){
    
    $('.product-category-list li').mouseenter(function(){
        var wrap = $(this).closest('.product-card-wrap');
        var target = $(this).attr('data-switch');
        wrap.find('.product-card-img img').attr('src', target);
       
    });
    $('.product-category-list li').mouseleave(function(){
        var wrap = $(this).closest('.product-card-wrap');
        var staticImg = wrap.find('.product-category-list li').first().attr('data-switch');
        wrap.find('.product-card-img img').attr('src', staticImg);
    });
});

jQuery(function($){
  $("#partnerSurname").mask("+38 (999) 999 99 99");
});