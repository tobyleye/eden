controllers.addHotel = function (event) {
  event.preventDefault()

  const target = event.target
  const btn = target.querySelector('button')
  btn.setAttribute('disabled', 'disabled')
  btn.textContent = 'Saving...'
  const randNo = Math.floor(Math.random()*templates.images.length)
  const image = templates.images[randNo]

  const formData = utils.getFormData(target)
  formData['image'] = image

  fetch(`${api_root}/hotels`, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(formData)
  })
    .then(res => res.json())
    .then(data => {
      window.location.hash = '#/dashboard'
    })
    .catch(err => console.log(err))
    .finally(() => {
      btn.removeAttribute('disabled')
      btn.textContent = 'Save'
    })
}

controllers.updateHotel = function (event, hotelId) {
  event.preventDefault()

  const target = event.target
  const btn = target.querySelector('button')
  btn.setAttribute('disabled', 'disabled')
  btn.textContent = 'Saving...'

  const formData = utils.getFormData(target)
  
  const randNo = Math.floor(Math.random()*templates.images.length)
  const image = templates.images[randNo]

  formData['image'] = image

  fetch(`${api_root}/hotels/${hotelId}`, {
    method: 'put',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      window.location.hash = '#/dashboard'
    })
    .catch(err => console.log(err))
    .finally(() => {
      btn.removeAttribute('disabled')
      btn.textContent = 'Save'
  })
}

controllers.deleteHotel = function (event, hotelId) {    
  fetch(`${api_root}/hotels/${hotelId}`, {
    method: 'delete',
    headers: { 'content-type': 'application/json' }
  })
    .then(res => res.json())
    .then(() => {
      views.dashboard()
    })
}

controllers.login = function (event) {
  event.preventDefault()
  const target = event.target;
  const formErrors = target.querySelector('#formErrors')
  const btn = target.querySelector('button')

  // clear form errors
  formErrors.textContent = ''

  // disable login btn
  btn.setAttribute('disabled', 'disabled')
  btn.textContent = 'Logging in...'

  const email = target.email.value.trim()
  const password = target.password.value.trim()

  // send request
  fetch(`${api_root}/login`)
    .then(res => res.json())
    .then(res => {
        let adminAuth = res[0]
        if (email === adminAuth.email && password === adminAuth.password) {
          localStorage.setItem('isLoggedIn', JSON.stringify(true))
          location.hash = '#/dashboard'
        } else {
          formErrors.textContent = 'Invalid Email or password'
        }
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      btn.removeAttribute('disabled')
      btn.textContent = 'Login'
    })
}

controllers.bookHotel = function () {
  console.log('booking hotel');
  alert('Booking confirmed !!! See you soon 😊')
}