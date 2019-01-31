document.onload = load()
function load () {
  let wrap = document.getElementById('wrap')
  let footer = document.getElementById('footer')

  let contentHeight = wrap.offsetHeight
  let docHeight = document.documentElement.offsetHeight

  if (contentHeight < docHeight) {
    footer.style.position = 'fixed'
    footer.style.bottom = 0
    footer.style.left = 0
  }
}
