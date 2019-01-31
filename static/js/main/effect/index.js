var wallPaper = document.getElementById("wallpaper");
wallPaper.style.height = document.documentElement.clientHeight + "px";
wallPaper.style.width = document.documentElement.scrollWidth + "px";
window.onresize = function(){
  wallPaper.style.height = document.documentElement.clientHeight + "px";
  wallPaper.style.width = document.documentElement.scrollWidth + "px";
}
window.onscroll = function(){
  var scrollTop = document.documentElement.scrollTop;
  var headBar = document.getElementById("head-bar");
  var a = headBar.getElementsByTagName("a");
  var wallPaperHeight = wallPaper.offsetHeight;
  var headBarHeight = headBar.offsetHeight;
  var changePoint = wallPaperHeight - headBarHeight;
  switch(scrollTop > changePoint){
    case true:
      headBar.style.background = "rgba(255,255,255,1)";
      headBar.style.transition = "all .1s";
      for(var index in a){
        a[index].style.color = "#000";
      }
    break;
    case false: 
      headBar.style.background = "rgba(255,255,255,.2)";
      headBar.style.transition = "all .1s";
      for(var index in a){
        a[index].style.color = "#fff";
      }
    break;
  }
}