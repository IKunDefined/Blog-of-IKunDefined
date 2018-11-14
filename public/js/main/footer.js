document.onload = load();

function load() {
  var wrap = document.getElementById("wrap");
  var footer = document.getElementById("footer");
  
  var contentHeight = wrap.offsetHeight;
  var docHeight = document.documentElement.offsetHeight;

  if (contentHeight < docHeight) {
    footer.style.position = "fixed";
    footer.style.bottom = "0px";
  }
}