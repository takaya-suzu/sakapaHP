function slide() {
    if($('.toggle-icon').hasClass('toggle-icon-change')) {
        $('.toggle-icon').removeClass('toggle-icon-change');
    }else {
        $('.toggle-icon').addClass('toggle-icon-change');
    }

    $('.header-container').slideToggle();
}

// $(function() {
//   $('.container h1').slideDown();
// })

$(function () {
    $('.container h1').textillate({
      //繰り返し
      loop: true,
      // アニメーションの間隔時間
      minDisplayTime: 3000,
      // アニメーション開始までの遅延時間
      initialDelay: 1000,
      // アニメーションの自動スタート
      autoStart: true,

      // 開始時のアニメーション設定
      in: {
        // エフェクトの指定
        effect: 'fadeIn',
        // 遅延時間の指数
        delayScale: 1.5,
        // 文字ごとの遅延時間
        delay: 50,
        // true:アニメーションをすべての文字に同時適用
        sync: false,
        // true:文字表示がランダムな順に表示される
        shuffle: false
      },

      // 終了時のアニメーション設定
      out: {
        effect: 'fadeOut',
        delayScale: 1.5,
        delay: 50,
        sync: false,
        shuffle: false
      }
    });
})
