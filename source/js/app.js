var $ = mdui.JQ;

function search() {
  window.open($("#search_form").attr("action_e") + " " + $("#search_value").val());
  return false;
}

function reLoad() {
  loadMeting();
  $("table")
    .has("img")
    .addClass("nexmoe-album");
  mdui.mutation();
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
}

reLoad();
InstantClick.on('change', function() {
  reLoad();
});