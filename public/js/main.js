// initialize global variables
var templates = {}
var views = {}
var controllers = {}

window.api_root = 'http://localhost:3000'
window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('hashchange', function () {
    utils.router()
  })
  if (!location.hash) {
    location.hash = '/'
  }
  utils.router()
})

