//custom.js
$(document).ready(function(){
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Scrolls to the selected menu item on the page
    $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }


        });
    
        /*
    $("#hey").hide(0).delay(500).fadeIn(2000);
    $("#this").hide(0).delay(700).fadeIn(2000);
    $("#is").hide(0).delay(1000).fadeIn(2000);
    $("#shrey").hide(0).delay(1600).fadeIn(2000);
    
    $("#developer").hide(0).delay(1800).fadeIn(2000);
    $("#programmer").hide(0).delay(2200).fadeIn(2000);
    $("#enthusiast").hide(0).delay(2400).fadeIn(2000);
    
    $("#buttons").hide(0).delay(3000).show();
    */
    $(window).on('resize', function(){
        /*
            if($(window).width() <= 991){
                $("#right").removeClass('right');
            } else {
                $("#right").addClass('right');
            }
        });
        */
    }); 
    
    
    //sync connections
    $("div.portfolio-item#identity").scroll(function(){
      alert('hello');  
    });
    
    //css button fix
    
});