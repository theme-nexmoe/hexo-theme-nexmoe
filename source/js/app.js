$("table").has('img').addClass("nexmoe-album");

$("img").each(function () {
    $(this).attr("data-src", $(this).attr("src"));
    $(this).attr("src", "");
    $(this).addClass('lazyload')
    $(this).attr("referrerPolicy", "no-referrer");
});

$("article img").each(function () {
    var element = document.createElement("a");
    $(element).attr("data-fancybox", "gallery");
    $(element).attr("href", $(this).attr("src"));
    $(this).wrap(element);
});

$("#nexmoe-sidebar a").addClass("mdui-ripple");
mdui.mutation();