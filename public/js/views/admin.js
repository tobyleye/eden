views.login = function () {
  if (utils.is_logged_in()) {
    location.hash = '/dashboard'
    return
  }
  let content = templates.login_page()
  utils.render('app', content)
}

views.dashboard = function () {
  if (!utils.is_logged_in()) {
    location.hash = '/login'
    return
  }

  let content = templates.dashboard_page()
  utils.render('app', content)
  utils.render('dashboardContent', templates.loader())

  fetch(`${api_root}/hotels`)
    .then(res => res.json())
    .then(data => {
      let content = data.length ? templates.generate_table(data): templates.dashboard_empty()
      utils.render('dashboardContent', content)
    })
}

views.add = function () {
  if (!utils.is_logged_in()) {
    location.hash = '/login'
    return
  }
  let content = templates.add_hotel_page()
  utils.render('app', content)

}

views.edit = function (params) {
  if (!utils.is_logged_in()) {
    location.hash = '/login'
    return
  }

  const content = templates.edit_hotel_page(params)
  utils.render('app', content)

  fetch(`${api_root}/hotels/${params}`)
    .then(res => res.json())
    .then(({ name, price, description, location, address }) => {
      document.querySelector('#hotel_name').value = name
      document.querySelector('#hotel_price').value = price
      document.querySelector('#hotel_desc').value = description
      document.querySelector('#hotel_address').value = address
      document.querySelector(`option[value="${location}"]`).setAttribute('selected', 'selected')
    })
}

views.logout = function() {
  localStorage.clear('isLoggedIn')
  location.hash = '#/login'
}
