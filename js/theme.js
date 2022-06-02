
/************************************************
 * Template Name: QuickAd - Classified Mobile Template
 * Version: 1.0
 * Author: BYLANCER
 * Developed By: BYLANCER
 * Author URL: www.bylancer.com
 *************************************************/

(function ($) {

    "use strict";

    /* PRELOADER */
    $(window).on('load', function () {
        $(".preloading").fadeOut("slow");
        /*if($("body").hasClass("my_splash_page")){
            setTimeout(function(){
                window.location.href = 'welcome.html';
            }, 3000);
        }*/
    });

    $('#sidebarleft ul li a').on('click', function () {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });

    feather.replace();

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".bg-header").addClass("active");
        }
        else {
            $(".bg-header").removeClass("active");
        }
    });

    $('.sidenav').on('scroll', function () {
        var scroll = $(this).scrollTop();
        if (scroll > 0) {
            $(".sidebar-header",$(this)).addClass("active");
        }
        else {
            $(".sidebar-header",$(this)).removeClass("active");
        }
    });

    /* SIDE NAVIGATION */
    $('#dismiss, .overlay').on('click', function () {
        $(this).parents('.sidenav').removeClass('active');
        $('#sidebarleft').removeClass('active');
        $('.overlay').removeClass('active');
        $('body').removeClass('noscroll');
    });

    $('#sidebarleftbutton,#sidebarrightbutton').on('click', function () {
        $('.overlay').addClass('active');
        $('body').addClass('noscroll');
    });

    $('#sidebarleftbutton').on('click', function () {
        $('#sidebarleft').addClass('active');
    });

    $('#sidebarrightbutton').on('click', function () {
        $('#sidebarright').addClass('active');
    });

    $('#locationButton').on('click', function () {
        $('#locationPage').addClass('active');
        $('body').addClass('noscroll');
    });

    $('#locationCountryButton').on('click', function (e) {
        e.preventDefault()
        $('#locationCountry').addClass('active');
        $('body').addClass('noscroll');
    });

    $('#locationCityButton').on('click', function (e) {
        e.preventDefault()
        $('#locationCity').addClass('active');
        $('body').addClass('noscroll');
    });


    /* DEFAULT CAROUSEL */
    $('.default-carousel').slick({
        dots: false,
        infinite: true,
        // speed: 500,
        slidesToShow: 5,
        centerMode: false,
        arrows: true,
        variableWidth: true,
autoplaySpeed: 1000,
        autoplay: true

    });

   
$('#carousel-example-generic').carousel({
  interval: 3000,
  cycle: true
}); 

   

    /* GALLERY - FILTERING FUCTION */
    $(".filter-button").on("click", function () {
        var value = $(this).data('filter');

        if (value == "gallery-show-all") {
            $('.gallery-img-box').removeClass("gallery-hidden");
        }
        else {
            $('.gallery-img-box:not([data-category-image*="' + value + '"]').addClass("gallery-hidden");
            $('.gallery-img-box[data-category-image*="' + value + '"]').removeClass("gallery-hidden");
        }
    });

    $('.filter-gallery .filter-button').on("click", function () {
        $('.filter-gallery').find('.filter-button.active').removeClass('active');
        $(this).addClass('active');
    });


    /* MAGNIFICPOPUP GALLERY */
    $(".image-zoom").magnificPopup({
        type: "image",
        removalDelay: 300
    });



})(jQuery);


 function pay(){
          var down = "CRIG" + ("" + Math.random()).substring(2, 8);
         

        var car_select = $('#car_select').val();
    var name = $('#name').val();
    var number = $('#number').val();
    var email = $('#email').val();
    var location = $('#location').val();
    var pickupdate = $('#pickupdate').val();
    var dropdate = $('#dropdate').val();
    var termandcondition = $('.termandcondition').val();
    if (name == "") {
        // $('#first-name-info').addClass("error");
        $(".name").html("Please Enter Full Name");
    } 
     if (number == "") {
        // $('#first-name-info').addClass("error");
        $(".number").html("Please Enter Number");
    } 
     if (email == "") {
        // $('#first-name-info').addClass("error");
        $(".email").html("Please Enter Email");
    } 
     if (location == "") {
        // $('#first-name-info').addClass("error");
        $(".location").html("Please Enter Location");
    } 
     if (pickupdate == "") {
        // $('#first-name-info').addClass("error");
        $(".pickupdate").html("Please Select Pickup Date");
    } 
     if (dropdate == "") {
        // $('#first-name-info').addClass("error");
        $(".dropdate").html("Please  Select Drop Date");
    } 
     
        
        var amt=jQuery('#amt').val();
        
      if (name != "" && number != "" && email  != "" && location != "" && pickupdate != "" && dropdate != "") {
         jQuery.ajax({
               type:'post',
               url:'payment_process.php',
               data:"pay="+amt+"&car_select="+car_select+"&name="+name+"&number="+number+"&email="+email+"&location="+location+"&pickupdate="+pickupdate+"&dropdate="+dropdate+"&termandcondition="+termandcondition+"&orderid="+down,
               success:function(result){
                   var options = {
                        "key": "rzp_live_tBoBsGzepYjIb9", 
                        "amount": amt*100, 
                        "currency": "INR",
                        "name": "Car Rental in Goa",
                        "description": "Pay Advance",
                        "image": "https://m.carrentalingoa.co.in/img/logo_4.png",
                        
                        "handler": function (response){
                           jQuery.ajax({
                               type:'post',
                               url:'payment_process.php',
                               data:"razorpay_id="+response.razorpay_payment_id,
                               success:function(result){
                                  window.location.href="payment-confirm.php";
                               }
                           });
                        },
    "prefill": {
        "name": name,
        "email": email,
        "contact": number
    }
                    };
                    var rzp1 = new Razorpay(options);
                    rzp1.open();
               }
           });
             }
        
     }



      function reserve() {
 
      



    var car_select = $('#car_select').val();
    var name = $('#name').val();
    var number = $('#number').val();
    var email = $('#email').val();
    var location = $('#location').val();
    var pickupdate = $('#pickupdate').val();
    var dropdate = $('#dropdate').val();
    var termandcondition = $('.termandcondition').val();

     if (name == "") {
        // $('#first-name-info').addClass("error");
        $(".name").html("Please Enter Full Name");
    } 
     if (number == "") {
        // $('#first-name-info').addClass("error");
        $(".number").html("Please Enter Number");
    } 
     if (email == "") {
        // $('#first-name-info').addClass("error");
        $(".email").html("Please Enter Email");
    } 
     if (location == "") {
        // $('#first-name-info').addClass("error");
        $(".location").html("Please Enter Location");
    } 
     if (pickupdate == "") {
        // $('#first-name-info').addClass("error");
        $(".pickupdate").html("Please Select Pickup Date");
    } 
     if (dropdate == "") {
        // $('#first-name-info').addClass("error");
        $(".dropdate").html("Please  Select Drop Date");
    } 
     

 
      if (name != "" && number != "" && email  != "" && location != "" && pickupdate != "" && dropdate != "") {
          jQuery.ajax({
            url: "send_detail.php",
            data:'name='+name+'&number='+number+'&email='+email+'&location='+location+'&pickupdate='+pickupdate+'&dropdate='+dropdate+'&termandcondition='+termandcondition+'&car_select='+car_select,
            type: "POST",
            success:function(data){
                $(".name").html(" ");
                $(".number").html(" ");
                $(".email").html(" ");
                $(".location").html(" ");
                $(".pickupdate").html(" ");
                $(".dropdate").html(" ");
                $("#name").val(" ");
                $("#number").val(" ");
                $("#email").val(" ");
                $("#location").val(" ");
                $("#pickupdate").val(" ");
                $("#dropdate").val(" ");
                if (data=1) {
                     $('#write-review').modal('show');

                }
            },
            
        });
      }
    
}