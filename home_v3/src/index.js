
let first_ani = 1000; //第一次動畫執行時間
$(document).ready(function () {
    $(".loading").css({ top: "0%" }); //初始化
    $(".container-fluid").css({ display: "none" }); //初始化
    $(".loading").animate({ top: "50%" }, { //執行動畫
        easing: "easeOutBounce",
        duration: first_ani, complete: () => { $(".loading").addClass("loading_ani"); }
    });


    $(".container-fluid").load("main.html .contentdiv") //ajax

    $(document).ajaxStop(function () { //ajax結束時
        let imgCount = $("img").length; //取得img 總數
        let imgLoaded = 0;
        if (imgCount == 0) { //如果內部沒有img標籤
            setTimeout(function () { small() }, first_ani + 1000) //延遲100毫秒結束進度條 (直接結束會失敗))
        } else { //有img
            $("img").on("load", function () { //img 完成讀取後 
                imgLoaded += 1; //回傳計數
                if (imgLoaded == imgCount) {//計數等於總數時
                    setTimeout(() => { small(); }, first_ani + 1000)

                }
            });

        }
        click_evt()
    });
})

function small() { //第二次動畫縮小齒輪
    let sec_duration = 1000;
    $(".loadingIn").addClass("loading_small");
    $(".loading").css({ animation: "laoding 0.5s infinite" });
    // $(".loading").removeClass("loading_ani");

    //     $(".loading").velocity({ transform: ["scale(0)", "scale(1)"] }, {
    //     duration: 1000,
    //     complete:()=>{
    //         // $(".loading").css({ display: "none" });
    //         
    //     }
    // });
    setTimeout(() => {
        $(".container-fluid").css({ display: "block" });
        $(".loading").css({ display: "none" });
        container_ani();
    }, sec_duration)

}

function container_ani() { //container 內動畫
    $(".imgdiv:nth-child(even)").css({ transform: "translateX(-1920px)" }); //初始化
    $(".imgdiv:nth-child(odd)").css({ transform: "translateX(1920px)" }); //初始化
    $(".imgdiv").addClass("imgdiv_ani");
}
var click_count = 0
//click 之後動畫
function click_evt() {
    $("a").click((evt) => {
        if(click_count===0){
        evt.preventDefault();
        $(".imgdiv").css({ transform: "translateX(0px)" });

        $(".imgdiv").removeClass("imgdiv_ani");
        $(".imgdiv").addClass("imgdiv_out");
        for (let i = 1; i <= $(".imgdiv").length; i++) {
            $(`.imgdiv:nth-child(${i})`).css({ "animation-delay": `${(i - 4) * -0.2}s` });
        }
        click_count += 1;
        setTimeout(() => { $(evt.target).trigger("click");console.log(evt) }, 1000)}
    })
}

