var
cursor = $(".cursor"),
cWidth = 30, //カーソルの大きさ
mouseX = 0, //マウスのX座標
mouseY = 0; //マウスのY座標

TweenMax.to({}, 0.001, {
  repeat: -1,
  onRepeat: function() {
    
    TweenMax.set(cursor, {
        css: {
          left: mouseX - (cWidth / 2),
          top: mouseY - (cWidth / 2)
        }
    });
  }
});

//マウス座標取得
$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});


$("a").on({
  "mouseenter": function() {
    cursor.addClass("is-active");
  },
  "mouseleave": function() {
    cursor.removeClass("is-active");
  }
});

$("button").on({
  "mouseenter": function() {
    cursor.addClass("is-active");
  },
  "mouseleave": function() {
    cursor.removeClass("is-active");
  }
});

$(".menu-trigger").click(function () {
    $(this).toggleClass('clic'),$("#screen").toggleClass('clic'),$(".gnav").toggleClass('clic'),cursor.toggleClass('color-change');
});

$(".menu-trigger").hover(function () {
    $(this).toggleClass('hover');
});