$(document).ready(function(){
    popup();
    //tab();
    tab_version2();
    menu();
    slide();
    slide_move();
})

function popup(){
    $(".pop").click(function(){
        $("#popup").show();
    })

    $("#closeBtn").click(function(){
        $("#popup").hide();
    })
}

function tab(){
    $(".tab_btn>a").eq(0).click(function(){
        $(".tab_contents>div").eq(0).show();
        $(".tab_contents>div").eq(1).hide();
    })
    $(".tab_btn>a").eq(1).click(function(){
        $(".tab_contents>div").eq(0).hide();
        $(".tab_contents>div").eq(1).show();
    })
}

function tab_version2(){
    var idx = 0;
    $(".tab_btn>a").click(function(){
        idx=$(this).index()
        $(".tab_contents>div").hide();
        $(".tab_contents>div").eq(idx).show();
    })
}

function menu(){
    $(".gnb>li").hover(
        function(){
            $(".lnb").stop().slideDown(500);
        },
        function(){
            $(".lnb").stop().slideUp(500);
        }
    )
}

function slide(){
    setInterval(slide_move,3000);
}
    var cur_top = 0;
function slide_move(){
    $("#slide_contents").animate({"top":cur_top},400,"swing");
    cur_top -= 300;
    if(cur_top < -600){
        cur_top = 0;
    };
}