// tabble gallery
$("table")
  .has("img")
  .addClass("nexmoe-album");

// search
function search() {
  window.open($("#search_form").attr("action_e") + " " + $("#search_value").val());
  return false;
}

// 平滑跳转同时修复锚点链接被转义
$(document).ready(function () {
  $("a.toc-link").click(function (ev) {
    ev.preventDefault();
    window.scroll({
      top: $(decodeURI($(this).attr("href"))).offset().top - 24,
      behavior: 'smooth'
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

function imgOnError(_this) {
  console.log(_this)
  _this.onerror = null;
  _this.src = "https://lib.xiaoshuapp.com/imgproxy/OS9HYzNi3gJUD0wywtfjUW6Hnw0OYsuMWB59Tq2ANF0/w:96/bG9jYWw6Ly8vMzMzNTg2NjYtN2MzMC00OTViLWIwZmItYWRjNDVkMDlhNzk2LnBuZw";
}