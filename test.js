$(document).ready(function() {    
    
    $('a[name=modal]').click(function(e) {
        
        e.preventDefault();
        
        var id = $(this).attr('href');
             
        $('#modalBackdrop').fadeIn(1000);    
        $('#modalBackdrop').fadeTo("slow",0.8);    
    
        
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
            
        $(id).css('top',  windowHeight/2-$(id).height()/2);
        $(id).css('left', windowWidth/2-$(id).width()/2);
    
       
        $(id).fadeIn(2000); 
    
    });
    
  
    $('.window .close').click(function (e) {
   
        e.preventDefault();
        $('#modalBackdrop, .window').hide();
    });        
    
  
    $('#modalBackdrop').click(function () {
        $(this).hide();
        $('.window').hide();
    });            
    
});