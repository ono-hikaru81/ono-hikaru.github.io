$(function()
{
    // ページ内スクロール
    var navHeight = $(".header").outerHeight();

    $('a[href^="#"].').on("click", function()
    {
        var href = $(this).after("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var positon = target.offset().top - navHeight;

        $("html, body").animation({scrollTop : positon,}, 300, "swing");

        return false;
    });

    // ページトップ
    $("#js-page-top").on("click", function()
    {
        $("body, html").animation({scrollTop : 0,}, 300);

        return false;
    });
});
