$(function(){
  var loc = false;
  var isBtn = false;

  // 閉じるイベント
  $(window).bind('beforeunload', function(e) {
    console.log('CLOSE:::', e.target);
    if (!loc) {
      return '本当に終了しますか？';
    } else {
      // ボタンクリックだったらlocを戻さない
      // リロードは戻す
      if(!locBtn) {
        loc = false;
      }
    }
  });

  // ボタン制御
  $('form').submit(function(){
    loc = true;
    locBtn = true;
    setTimeout(function(){
      loc = false;
      locBtn = false;
    },100);

  });
  $('a, button').on('click', function() {
    loc = true;
    locBtn = true;
    setTimeout(function(){
      loc = false;
      locBtn = false;
    },100);

  });

  // キーボード制御
  $(document).keydown(function(e){
    // クリックされたキーコードを取得する
    var keyCode = e.keyCode;

    // F5
    if(keyCode == 116) {
      loc = true;
      return true;
    }

    // Enter
    if (keyCode == 13) {
      loc = true;
      setTimeout(function(){
        loc = false;
        locBtn = false;
      },100);
    }

    // バックスペースキーを制御する
    if(keyCode == 8){
      loc = true;
    }
  });
});
