    var mouseposition;

    $("document").ready(function () {
        //        $(".out").fadeIn(500);
        //        $(".out").velocity({
        //            transform: ["scale(1)", "scale(1.3)"]
        //        }, {
        //            duration: 500
        //        });

        setTimeout(function () {
            $(".bar").velocity({
                height: "100vh"
            }, {
                duration: 1000
            });
        }, 1000)

        setTimeout(function () {
            $(".cir").velocity({
                width: ["5px", "0px"],
                height: ["5px", "0px"]

            }, {
                duration: 500
            })
        }, 1500)

        setTimeout(function () {
            $(".img1").fadeIn(3000)
        }, 2000)


    })
    $(".bar").hover(function () {
        movexy = moved()
        setTimeout(function () {
            barbig(movexy)
        }, 100)

    })

    function barbig(movexy) {

        if ($(".bar").css("width") == "50px" && movexy != moved()) {
            //            $('html, body').css({
            //                overflow: 'hidden',
            //                height: '100%'
            //            });

            $(".icon").velocity({
                height: "100px",
                top: Number($(".bar").css("height").replace("px", "")) / 2 - 50 + "px"
            }, {
                duration: 1000
            });
            $(".cir1").velocity({
                top: "33%",
                left: "50%"

            }, {
                duration: 1000
            });
            $(".cir2").velocity({
                top: "50%",
                left: "50%"

            }, {
                duration: 1000
            });
            $(".cir3").velocity({
                top: "67%",
                left: "50%"

            }, {
                duration: 1000
            });
            $(".barback").animate({
                width: "100%"
            }, 300, "swing", function () {

            });
            setTimeout(function () {
                $(".bar").animate({
                    width: "50%"
                }, 300, "swing", function () {
                    $(".bartext").css("display", "flex")

                    $(".bartext").velocity({
                        transform: ["translateY(0px)", "translateY(-20px)"],
                        opacity: 1
                    }, {
                        duration: 1000
                    });

                })
            }, 300);
        }
    }

    $(".barback").click(function () {
        barsmall();
    })

    function moved() {
        $(document).mousemove(function (e) {
            mouseposition = e.pageX * e.pageY
        });
        return mouseposition;

    }

    function barsmall() {
        if ($(".bartext").css("opacity") == "1") {
            $(".icon").velocity({
                height: "60px",
                top: "0px"
            }, {
                duration: 1000
            });
            $(".cir1").velocity({
                top: ["33%", "33%"],
                left: ["33%", "50%"]

            }, {
                duration: 1000
            });
            $(".cir2").velocity({
                top: ["50%", "50%"],
                left: ["66%", "50%"]

            }, {
                duration: 1000
            });
            $(".cir3").velocity({
                top: ["67%", "67%"],
                left: ["33%", "50%"]

            }, {
                duration: 1000
            });
            $(".bartext").velocity({
                transform: ["translateY(20px)", "translateY(0px)"],
                opacity: 0
            }, {
                duration: 1000
            });
            setTimeout(function () {
                $(".bar").animate({

                    width: "50px"

                }, 300, "swing", function () {
                    $(".bartext").css("display", "none")
                    $(".barback").animate({
                        width: "0%"
                    }, 300, "swing", function () {
                        //                        $('html, body').css({
                        //                            overflow: 'auto',
                        //                            height: 'auto'
                        //                        });

                    });
                });


            }, 1000);
        }

    }

    $('a[href="#aboutme"]').click(function () {
        var targetoffset = $("#aboutme").offset().top;
        $("body,html").animate({
            scrollTop: targetoffset
        }, 1500);
        barsmall();
    });
    $('a[href="#work"]').click(function () {
        var targetoffset = $("#work").offset().top;
        $("body,html").animate({
            scrollTop: targetoffset
        }, 1500);
        barsmall();
    })
    $(document).scroll(function () {
        if ($("html").scrollTop() > 300) {
            $('.carddivin').velocity({
                opacity: "1"

            }, {
                duration: 500
            });

            setTimeout(function () {
                $('.img4').velocity({
                    opacity: "1"

                }, {
                    duration: 2000
                });
            }, 1000);


            setTimeout(function () {
                $('.card-body').velocity({
                    opacity: "1"
                }, {
                    duration: 2000
                });
            }, 2500);

        }
    });
