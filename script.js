function play_se(){
  var waring = new Audio('warn.mp3');
  var voice = new Audio('message.mp3');
  waring.play()
  voice.play()
  navigator.vibrate([200, 100, 200, 100, 200, 100, 200, 100,])
}

$(function(){
  // ページが読み込むと実行

  //プラウザバック禁止
  history.pushState(null, null, null);
  //ブラウザバックボタン押下時
  $(window).on("popstate", function (event) {
    history.pushState(null, null, null);
    play_se();
  });

  // モーダル表示

  $('.modal').modal({dismissible: false});
  $('#alert').modal('open');
  $('#close').click(function(){
    $('#alert').modal('close');
    play_se();
  })

  //デバイス情報を取得

  var device = navigator.userAgent.match(/iPhone|iPad|iPod|Android/);
  if (device == null) {
    device = '端末';
  }
  $('#device').text(device);

  //カウントダウン

  var time = 200;
  setInterval(function(){
    time--;
    $('#timer').text(time);
  }, 1000);
});
