$(document).ready( function(){
    /**
    * @brief menu click event
    */
    $('#w_search_icon,.Msb_top_close').click( function(){
        $('#M_search_box').slideToggle();
    });

    /**
    * @brief menu click event
    */
    $('#M_menu_icon').click( function(){
        $('.header_middle').css('right','0');
        $('.menu_bg').toggle();
    });

    $('.menu_bg,.M_close_btn').click( function(){
        $('.header_middle').css('right','-100%');
        $('.menu_bg').toggle();
    });
});