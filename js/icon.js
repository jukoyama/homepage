window.log = (function() { return console.log.bind(console) })()
//window.log = (() => console.log.bind(console))()

var pagesetup = function () {
  var hash = window.location.hash.match(/^#![\w_-]+$/) ? window.location.hash.slice(2) : null

  var div = document.createElement('div')
  div.className = 'demotext'
  div.innerHTML = 'D E M O'
  document.body.appendChild(div)

  // iframe
  if (window !== window.parent) {
    var a = document.createElement('a')
    a.href = window.location.href
    a.className = 'openlink'
    a.innerHTML = '別窓で表示'
    a.target = '_blank'
    document.body.appendChild(a)
    document.body.className = 'iframe'

    var bodyHeight = document.body.clientHeight

    if (hash !== null) {
      var originHeight = window.parent.document.getElementById('demoframe_' + hash).style.height
      if (!originHeight) {
        if (document.getElementById(hash)) {
          var areaRect = document.getElementById(hash).getBoundingClientRect()
          var position = areaRect.top + window.pageYOffset
          window.scrollTo(0, position)
          window.parent.document.getElementById('demoframe_' + hash).height = areaRect.height
        } else {
          window.parent.document.getElementById('demoframe_' + hash).height = bodyHeight
        }
      }
    } else if (window.parent.document.getElementById('demoframe')) {
      window.parent.document.getElementById('demoframe').height = bodyHeight
    }
  }
}

window.addEventListener('load', pagesetup)
