import $ from 'jquery';
window.jQuery = window.$ = $;
import vl from 'velocity-animate';
import loading from 'jquery-easy-loading';

var screen_width

$(document).ready(function () {
    $.ajax("home.html").then(function (res) {

        
        $(".content").html(res);
        setTimeout(function () {
            $(".content").fadeIn(2000);

            input_event()
        },6000)



    })
    setTimeout(function () {
        $("body").append('<div class="open" style="position:fixed;width:100vw;height:100vh;z-index:1000;display:flex;justify-content: center;align-items: center;"><p style= "display:none;font-size:48px;color:#fff;text-shadow:0px 0px 10px rgba(0,0,0,1)">HI</p></div>');
        $(".open p").fadeIn(2000);
        $(".cir").fadeIn(2000);
    }, 500);
    setTimeout(function(){
        $(".open").fadeOut(1000);},3000);
    setTimeout(function(){
        $(".background").fadeIn(1000);},4500)

    
})
//復原bar
//$(".cir_group").click(barbackani);


function scroll_fun() {
    var nowY = $(window).scrollTop();
    var sec_ary = [];
    $("section").each(function (id, el) {

        var get_secY = $(el).offset().top;
        sec_ary.push(get_secY);

    });
    for (var i = 0; i < sec_ary.length; i++) {

        console.log(nowY, sec_ary[i], i)
        if (nowY < sec_ary[i]) {
            var body = $("html, body");
            var scrollY = sec_ary[i]
            body.stop().animate({
                scrollTop: scrollY
            }, 500, 'swing', function () {

            });
            break
        }
    }

}
var baropen = 0
$(".cir_group").click(bardef);
$(".link_group a").click(bardef);
$(".barbackground").click(bardef);
//$.ajax("Works.html").then(function(res){$(".content").html(res.responseText)})
function bardef(evt) {
    evt.preventDefault();
    var link_text = $(this).text();

    if (baropen == 0) {
        baropani()
    } else {
        baredani(link_text)
    }

}
//ajax
function ajaxWeb(text, wait) {
    if (text == " Works") {

        setTimeout(function () {
            $(".content").fadeOut(1000)
        }, wait - 2000)
        $.ajax("Works.html").then(function (res) {
            setTimeout(function () {
                $(".content").html(res);
                $(".content").fadeIn(1000);
                $(".scroll").click(scroll_fun);
            }, wait - 500)
        })
    } else if (text == " Home") {
        setTimeout(function () {
            $(".content").fadeOut(1000)
        }, wait - 2000)
        $.ajax("home.html").then(function (res) {
            setTimeout(function () {
                $(".content").html(res);
                $(".content").fadeIn(1000)
            }, wait - 500)
        })

    } else if (text == " About") {
        setTimeout(function () {
            $(".content").fadeOut(1000)
        }, wait - 2000)
        $.ajax("about.html").then(function (res) {
            setTimeout(function () {
                $(".content").html(res);
                $(".content").fadeIn(1000);
                $(".scroll").click(scroll_fun);
            }, wait - 500)
        })
    }


    input_event();

}

function baredani(link_text) {
    baropen = 0
    $(".cir_group").css('pointer-events', 'none'); //避免過多點擊事件
    $("h1 a").css('pointer-events', 'none');
    $(".barbackground").css('pointer-events', 'none');
    ajaxWeb(link_text, 1700);
    Velocity($(".cir"), {
        scale: ["0", "1"]
    }, {
        duration: 700
    });

    setTimeout(function () {
        $("h1 span").animate({
            opacity: "0"
        });
    }, 700);


    setTimeout(function () {
        $(".bar_op").animate({
            width: "0%"
        });
    }, 1000);
    setTimeout(function () {
        $(".barbackground").animate({
            width: "0vh"
        }, 200);
        $(".bar_op").addClass("bar");
        $(".bar").removeClass("bar_op");
        $(".bar .cir_group .cir").css("animation", "ball 2s infinite alternate");
    }, 1300);
    setTimeout(function () {
        $(".bar").css("width", "100px");
        Velocity($(".cir"), {
            scale: ["1", "0"]
        }, {
            complete: function () {
                $(".cir_group").css('pointer-events', 'auto');

                $(".barbackground").css('pointer-events', 'auto');

                $("h1 a").css('pointer-events', 'auto');

            },
            duration: 2200
        });
    }, 1700);

}

$("a").hover(function () {
    textflash(this);
});
$("a").mouseout(function () {
    $('span').css('animation', 'none');
});

function textflash(that) {
    $(that).find('span').each(function (id, el) {
        if (id % 2) {
            $(el).css('animation', 'textflash 2s infinite ');

        } else {
            $(el).css('animation', 'textflash 2s infinite ');
            $(el).css('animation-delay', '1s')

        }

    })

};

function textani(target, time) {
    target.each(function (id, el) {
        setTimeout(function () {
            $(el).css("opacity", 1);
        }, time * (id));

    });

};


function baropani() {
    baropen = 1
    $(".cir_group").css('pointer-events', 'none');

    $(".barbackground").css('pointer-events', 'none');
    $("h1 a").css('pointer-events', 'none');
    $(".bar .cir_group .cir").css("animation", "none");
    Velocity($(".cir"), {
        scale: ["0", "1"]
    }, {
        duration: 700
    });

    setTimeout(function () {

        $(".bar").css("width", "0px");
        $(".bar").addClass("bar_op");
        $(".bar_op").removeClass("bar");
        $(".barbackground").animate({
            width: "100vw"
        });
    }, 700);
    setTimeout(function () {
        if (screen_width < 720) {
            $(".bar_op").animate({
                width: "100%"
            });
        } else {
            $(".bar_op").animate({
                width: "50%"
            });
        }

    }, 1200)
    setTimeout(function () {
        textani($("h1 span"), 100)
    }, 1700);

    Velocity($(".cir"), {
        scale: ["1", "0"]
    }, {
        complete: function () {
            $(".cir_group").css('pointer-events', 'auto');

            $(".barbackground").css('pointer-events', 'auto');
            $("h1 a").css('pointer-events', 'auto');
        },
        duration: 2700
    });




}

//imgani
function input_event() {

    setInterval(function () {
        screen_width = window.screen.width;
        $(".imgdiv").hover(imgfocus, imgoutfocus);
    }, 1000)
}



function imgfocus(evt) {
    $('.home_section .imgdiv').each(function (id, el) {
        if ($(el).is($(evt.target))) {
            $(el).removeClass("imgfocus");
            if (screen_width > 1024) {
                if (id == 0 || id == 3) {
                    $(el).css('background-size', '130%').animate({
                        backgroundSize: "150%"
                    }, 5000);
                } else if (screen_width > 1024) {
                    $(el).css('background-size', '100%').animate({
                        backgroundSize: "120%"
                    }, 5000);
                }
            } else {
                //pass
            }

            //pass
        } else {
            $(el).addClass("imgfocus");
        }

    })


}

function imgoutfocus(evt) {
    $('.home_section .imgdiv').each(function (id, el) {
        $(el).clearQueue();
        $(el).stop();
        $(el).removeAttr("style")
        $(el).removeClass("imgfocus");
        //pass


    })


}
