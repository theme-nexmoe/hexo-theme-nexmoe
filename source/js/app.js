// 表格相册
$("table")
  .has("img")
  .addClass("nexmoe-album");

// 搜索
function search() {
  window.open($("#search_form").attr("action_e") + " " + $("#search_value").val());
  return false;
}

// 平滑跳转同时修复锚点链接被转义
$(document).ready(function () {
  $("a.toc-link").click(function (ev) {
    ev.preventDefault();
    $("html, body").animate({
      scrollTop: $(decodeURI($(this).attr("href"))).offset().top - 25
    }, {
      duration: 500,
      easing: "swing"
    });
  });
});

$(document).on("copy", function(){
  if(!window.copyTip){ return; }
  var sel = document.getSelection();
  var ele = document.createElement("div");
  ele.innerHTML = '<div style="position: fixed;opacity: 0;white-space: pre;">' + sel + "\n\n" + window.copyTip.replaceAll("%url",document.location.href) + ' </div>' 
  document.body.appendChild(ele);
  sel.selectAllChildren(ele);
  setTimeout(function () {document.body.removeChild(ele);});
});