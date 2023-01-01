var el = document.getElementById('modal-data');
let timer = null
document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
  var e = event || window.event || arguments.callee.caller.arguments[0];
  if (e && e.key == 'F12') {
    if (timer) {
      return false
    }
    el.style.visibility = 'visible'

    if (el.style.visibility === 'visible') {
      timer = setTimeout(() => {
        el.style.visibility = 'hidden'
        timer = null
      }, 2000)
    }
    return false
  }
}

