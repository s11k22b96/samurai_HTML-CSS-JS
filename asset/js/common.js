$('.slick01').slick({
    autoplay: true, // 自動再生を設定
    autoplaySpeed: 4000, // 自動再生のスピード（ミリ秒単位）
    dots: true, // ドットインジケーターの表示
    arrows: false // コントローラー
});

/*メニュー開閉*/
$('#spbtn').on('click', function() {
    if($('#mainmenu').hasClass('js-action')){
        $(this).removeClass('js-action');
        $('#mainmenu').removeClass('js-action');
    }else{
        $('#mainmenu').addClass('js-action');
        $(this).addClass('js-action');
    }
})