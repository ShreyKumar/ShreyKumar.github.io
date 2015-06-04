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
    
    $("#hey").hide(0).css("margin-left", "35%").delay(500).fadeIn(2000);
    $("#this").hide(0).delay(700).fadeIn(4000);
    $("#is").hide(0)//.delay(1000).fadeIn(6000);
    $("#shrey").hide(0)//.delay(1600).fadeIn(8000);
        
    }); 
    
});