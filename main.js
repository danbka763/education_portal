$(function(){
    $('.menu-btn').on('click', function(){
        $('.bar').slideToggle(200, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
        return false;
    });
});