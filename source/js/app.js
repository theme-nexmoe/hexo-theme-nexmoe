$("table:has(img)").addClass("nexmoe-album");
$("article img").each(function () {
     var element = document.createElement("a");
     $(element).attr("data-fancybox", "gallery");
     $(element).attr("href", $(this).attr("src"));
     $(this).wrap(element);
 });
 $("#nexmoe-sidebar a").addClass("mdui-ripple");
 mdui.mutation();