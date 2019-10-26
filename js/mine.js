
// To Set hight Of WebSie Automaic for window of user device
$("header").height($(window).outerHeight(true));

// Happend When Push Start Button
$(".start-btn").click(function(){
    
    $(".start-btn").addClass("rotate"); // start rotate for btn
    
    $("header").css({"background-color":"#04D8D8","opacity":"0"}); // change background 
    
    $("header").fadeTo(2000,1,function(){ // fade in opicity for bcground
        
        $(".navbar").show(1500,function(){ // show nave bar
            
            $(".navbar-brand h3").show(1000,function(){  //show brand of nav
                
                $(".nav-link h4").slideDown(1000,function(){ // slide down options of nav
                    
                $("#myImage").attr("src","images/72225227_2698134393565251_2111289262811906048_n.jpg"); 
                    // change button with my image
                    
                    
                        $(".home-info h1").slideDown(1500,function(){  // slide down job
                            
                            $(".home-info .social a i").fadeIn(1500,function(){ // fade in social links
                                
                                $(".home-info button").slideDown(1000,function(){  // slide down cv button
                                    $(".start-btn").removeClass("rotate");  // stop rotate my image
                                    
                                    
                                    
                                });    
                            
                        });
                        
                    })
                    
                    
                });
                
                
            });
        });
    });
   
    
})

// End Of Header Jquery Functions


// About Page
$('#about').click(function(){
    
    $(".about").show(1000,function(){
    
    
    $(".profile-image").slideDown(2000,function(){
        $(".profile-info").slideDown(2000);
        var x = $(".profile-info").offset().top;
        $("body,html").animate({scrollTop:x},1000);
        
        new TypeIt('.st1', { cursor:false,Speed: 2000,strings:" 21-7-1994"}).go();
        new TypeIt('.st2', { cursor:false,Speed: 2000,strings:" Single"}).go();
        new TypeIt('.st3', { cursor:false,Speed: 2000,strings:" Completed"}).go();
        new TypeIt('.st4', { cursor:false,Speed: 2000,strings:" 5 st Abo-Khouda-El Zaher"}).go();
        new TypeIt('.st5', { cursor:false,Speed: 2000,strings:" +201149598231"}).go();
        new TypeIt('.st6', { cursor:false,Speed: 2000,strings:" +201550829268"}).go();
        new TypeIt('.st7', { cursor:false,Speed: 2000,strings:" Bachelor of Science: Pure Mathematics And CS - 2016 <br> Ain-Shams University."}).go();
        new TypeIt('.st8', { cursor:false,Speed: 2000,strings:" Front-End Course At ROUTE Center - 2019"}).go();
    });
    });
    
    $(".esc-btn").click(function(){
        
        $(".profile-info").slideUp(1000,function(){
            $(".profile-image").slideUp(1000,function(){
                $(".about").hide(1000);
            });
        });
        
        
    
        
    })
});

// skills Page
$('#skills').click(function(){
    $('.skills').fadeIn(2000,function(){
        for(let i=0 ; i<12 ; i++)
            $(".progress-bar").eq(i).show(1000);
    });
    
    $(".skills .esc-btn").click(function(){
        
        $(".skills").fadeOut(2000);
    });

});

// Portfolio Page
$('#portfolio').click(function(){
    
    $('.portfolio').slideDown(2000);
    
    $(".portfolio .esc-btn").click(function(){
        
        $(".portfolio").slideUp(2000);
    });

});

// Spinner page

$(document).ready(function(){
    
$(".loading").fadeOut(5000,function(){
    $(".body").css("overflow","auto");
})

    });