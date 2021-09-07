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

window.contact = window.contact || {};

window.contact.checkValidation = function(){
    if(!$('input[id="name"]').val() || !$('input[id="email"]').val() || !$('input[id="subject"]').val()|| !$('textarea[id="inquiry"]').val()){
        $('input[id=submit]').attr('disabled', 'disabled');
        return false;
    }

    $('input[id="submit"]').removeAttr('disabled');
    return true;
}

window.contact.send = function(){
    var name = $('input[id="name"]').val() 
    var email = $('input[id="email"]').val() 
    var subject = $('textarea[id="subject"]').val()
    var inquiry = $('textarea[id="inquiry"]').val()
    data = {
        name: name,
        email: email,
        subject: subject,
        inquiry: inquiry,
    }
    window.contact.ajax(data);
}

window.contact.ajax = function(data){
    var url = 'https://script.google.com/macros/s/AKfycbyt0wND0HMfCVf78GqmtquowOmO9L5iq5Dyv4aEyMU1_xALXFhrscizueVj1ruH8beP/exec';
    $.ajax({
        url: url,
        type:'POST',
        data: data
    }).done(function(res){
        if(res.response != "success") {
            console.log(JSON.stringify(res.error));
            alert('送信失敗'); 
            return;
        }
        alert('送信完了');
    }).fail(function(){
        alert('送信失敗'); 
    }).always(function(){
        location.href="./index.html";
    })
}