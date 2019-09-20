var utils = {
  router() {
    const route = location.hash.slice(2) || 'index'
    const [view, params] = route.split('?')
    const function_to_invoke = views[view]

    if (function_to_invoke) {
      function_to_invoke(params)
    } else {
      // ...todo...
      // show a 404 page
      // for now redirect back to index
      window.location.hash = '/'
    }
  },
  render(element_id, content) {
    document.getElementById(element_id).innerHTML = content
    document.getElementById(element_id).scrollIntoView()
  },
  is_logged_in() {
    return JSON.parse(localStorage.getItem('isLoggedIn') || 'false')  
  },
  show_loader(element_id) {
    utils.render(element_id, templates.loader())
  },
  shorten(text, length) {
    return text.length > length ? `${text.slice(0, length)}...` : text
  },
  getFormData (form) {
    const name = form.hotel_name.value.trim()
    const price = form.hotel_price.value.trim()
    const description = form.hotel_desc.value.trim()
    const location = form.hotel_location.value
    const type = form.room_type.value
    const address = form.hotel_address.value.trim()

    return { name, price, description, type, location, address }
}

}