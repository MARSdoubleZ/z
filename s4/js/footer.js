// 左侧菜单点击效果

$("#sidlenav .list_dt").on("click", function () {

    $(this).siblings("dt").removeAttr("id");

    $(this).attr("id","open"); // 赋值 id="open"
    $(this).next().slideDown(); // 显示当前一级菜单下的二级菜单
    $(this).next().siblings('dd').slideUp(); // 其他的二级菜单隐藏

    // $(this).attr("id","open").next().slideDown().siblings('dd').slideUp();

    // if ($(this).attr("id") == "open") {
    //     $(this).removeAttr("id").siblings("dd").slideUp();
    // } else {
    //     $(this).attr("id", "open").next().slideDown().siblings("dd").slideUp();
    // }

});