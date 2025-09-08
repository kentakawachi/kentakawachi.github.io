// ページの中身が全部読み込まれてから動くようにする
window.onload = function() {

  // シャボンダマン
  let syabon = document.getElementById("syabondaman");
  syabon.onmouseenter = function() {
    syabon.src = "syabondaman_hover.png"; // マウスをのせたら切り替え
  };
  syabon.onmouseleave = function() {
    syabon.src = "syabondaman.png"; // マウスをはなしたら元に戻す
  };

  // トースターまん
  let toaster = document.getElementById("toasterman");
  toaster.onmouseenter = function() {
    toaster.src = "toasterman_hover.png";
  };
  toaster.onmouseleave = function() {
    toaster.src = "toasterman.png";
  };

  // かまぼこくん
  let kamaboko = document.getElementById("kamabokokun");
  kamaboko.onmouseenter = function() {
    kamaboko.src = "kamabokokun_hover.png";
  };
  kamaboko.onmouseleave = function() {
    kamaboko.src = "kamabokokun.png";
  };

  // ノリノリのりへい
  let norihei = document.getElementById("norihei");
  norihei.onmouseenter = function() {
    norihei.src = "norihei_hover.png";
  };
  norihei.onmouseleave = function() {
    norihei.src = "norihei.png";
  };

  // うずまきパンタ
  let panta = document.getElementById("panta");
  panta.onmouseenter = function() {
    panta.src = "panta_hover.png";
  };
  panta.onmouseleave = function() {
    panta.src = "panta.png";
  };

};
