$("table")
  .has("img")
  .addClass("nexmoe-album");

$("#nexmoe-content img").each(function() {
  $(this).attr("data-src", $(this).attr("src"));
  $(this).attr("src", "");
  $(this).addClass("lazyload");
  $(this).attr("referrerPolicy", "no-referrer");
});

$("#nexmoe-sidebar a").addClass("mdui-ripple");
mdui.mutation();
