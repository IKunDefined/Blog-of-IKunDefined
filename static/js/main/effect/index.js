let wallPaper = document.getElementById('wallpaper')
wallPaper.style.height = document.documentElement.clientHeight + 'px'
wallPaper.style.width = document.documentElement.scrollWidth + 'px'
window.onresize = function () {
  wallPaper.style.height = document.documentElement.clientHeight + 'px'
  wallPaper.style.width = document.documentElement.scrollWidth + 'px'
}
window.onscroll = function () {
  let scrollTop = document.documentElement.scrollTop
  let headBar = document.getElementById('head-bar')
  let a = headBar.getElementsByTagName('a')
  let wallPaperHeight = wallPaper.offsetHeight
  let headBarHeight = headBar.offsetHeight
  let changePoint = wallPaperHeight - headBarHeight
  switch (scrollTop > changePoint) {
    case true:
      headBar.style.background = 'rgba(255,255,255,1)'
      headBar.style.transition = 'all .1s'
      for (let index in a) {
        a[index].style.color = '#000'
      }
      break
    case false:
      headBar.style.background = 'rgba(255,255,255,.2)'
      headBar.style.transition = 'all .1s'
      for (let index in a) {
        a[index].style.color = '#fff'
      }
      break
  }
}
