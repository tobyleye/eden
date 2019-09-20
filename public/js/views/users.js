views.index = function () {
  let content = templates.index_page()
  utils.render('app', content)

  // show loader
  utils.show_loader('hotelListings')
  
  // fetch hotels
  fetch(`${api_root}/hotels`)
    .then(res => res.json())
    .then(data => {
      let content = data.map(templates.hotel_listing).join('\n') || templates.empty_listing()
      setTimeout(() => {
        utils.render('hotelListings',content)
      }, 1000)
    })
    .catch(err => {
      console.log(err)
  })
}

views.hotel = function (params) {
  let content = templates.hotel_page()
  utils.render('app', content)

  // show loader
  utils.show_loader('hotelInfo')

  fetch(`${api_root}/hotels/${params}`)
    .then(res => res.json())
    .then(data => {
      let content = 'id' in data ? templates.hotel_info(data) : templates.not_found()
      setTimeout(() => {
        utils.render('hotelInfo', content)
      }, 1000)
    })
}