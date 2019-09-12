let yearButton = $('.btn')

//year button active

yearButton.click(function () {
    
    $(this).addClass('is-active').siblings().removeClass('is-active');

})

