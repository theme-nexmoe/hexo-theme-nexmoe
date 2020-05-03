var $ = mdui.JQ;

function search() {
  window.open($("#search_form").attr("action_e") + " " + $("#search_value").val());
  return false;
}
$("table")
.has("img")
.addClass("nexmoe-album");