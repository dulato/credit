jQuery(function() {
    $('#kz').on('click', function (event){
        $('.kz_ln').addClass('active');
        $('.ru_ln').removeClass('active');
        return false;
    });
    $('#ru').on('click', function (event){
        if(!$('.ru_ln').hasClass('active')){
            $('.ru_ln').addClass('active');
            $('.kz_ln').removeClass('active');
        }
        return false;
    });
});