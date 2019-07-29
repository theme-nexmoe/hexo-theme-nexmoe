$("table").has('img').addClass("nexmoe-album");

$("img").each(function () {
    $(this).attr("data-src", $(this).attr("src"));
    $(this).attr("src", "");
    $(this).addClass('lazyload')
    $(this).attr("referrerPolicy", "no-referrer");
});

$("article img").each(function () {
    var element = document.createElement("a");
    $(element).attr("href", $(this).attr("data-src"));
    var img = $(this).parent().html();
    $(this).replaceWith($(element).html(img));
});

$("#nexmoe-sidebar a").addClass("mdui-ripple");
mdui.mutation();