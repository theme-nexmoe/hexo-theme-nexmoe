const getRealPath = (pathname, desc = false) => {
  if (!pathname) {
    pathname = window.location.pathname;
  }
  let names = pathname.split("/");
  if (desc === false) {
    for (let i = names.length - 1; i >= 0; --i) {
      let name = names[i].trim();
      if (name.length > 0 && name !== "/" && name !== "index.html") {
        return name;
      }
    }
  } else {
    for (let i = 0; i < names.length; ++i) {
      let name = names[i].trim();
      if (name.length > 0 && name !== "/" && name !== "index.html") {
        return name;
      }
    }
  }
  return "/";
};
let links = document.querySelectorAll(".nexmoe-list-item");
let rootRealPath = getRealPath(window.location.pathname, true);
for (let link of links) {
  let linkPath = link.getAttribute("href");
  if (linkPath && getRealPath(linkPath, true) === rootRealPath) {
    link.className = "active nexmoe-list-item mdui-list-item mdui-ripple";
  }
}

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

function catalogue() {
  var inst = new mdui.Drawer('#drawer');
  inst.toggle();
  $("body").toggleClass("catalogue");
}

$(document).on("copy", function(){
  if(!window.copyTip){ return; }
  var sel = document.getSelection();
  var ele = document.createElement("div");
  ele.innerHTML = '<div style="position: fixed;opacity: 0;white-space: pre;">' + sel + "\n\n" + window.copyTip.replaceAll("%url",document.location.href) + ' </div>' 
  document.body.appendChild(ele);
  sel.selectAllChildren(ele);
  setTimeout(function () {document.body.removeChild(ele);});
});