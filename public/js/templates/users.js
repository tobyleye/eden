templates.index_page = function () {
  return `
    <div id="index" class="v-height fixed-header">
      ${templates.header(false)}
      <main class="main">
        <section class="search-box">
          <div class="container">
            <h3 class="search-box__title">Find hotels near you</h3>
            <p class="search-box__sub-title">From cozy homes to spunky ass apartment</p>
            <form class="search-form">
              <select name="state_id" class="select-control" id="hotelLocation" required>
                  <option>Select State</option>
                  <option value="Abia">Abia</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Adamawa">Adamawa</option>
                  <option value="Akwa Ibom">Akwa Ibom</option>
                  <option value="Anambra">Anambra</option>
                  <option value="Bauchi">Bauchi</option>
                  <option value="Bayelsa">Bayelsa</option>
                  <option value="Benue">Benue</option>
                  <option value="Borno">Borno</option>
                  <option value="Cross River">Cross River</option>
                  <option value="Delta">Delta</option>
                  <option value="Ebonyi">Ebonyi</option>
                  <option value="Edo">Edo</option>
                  <option value="Ekiti">Ekiti</option>
                  <option value="Enugu">Enugu</option>
                  <option value="Gombe">Gombe</option>
                  <option value="Imo">Imo</option>
                  <option value="Jigawa">Jigawa</option>
                  <option value="Kaduna">Kaduna</option>
                  <option value="Kano">Kano</option>
                  <option value="Katsina">Katsina</option>
                  <option value="Kebbi">Kebbi</option>
                  <option value="Kogi">Kogi</option>
                  <option value="Kwara">Kwara</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Nasarawa">Nasarawa</option>
                  <option value="Niger">Niger</option>
                  <option value="Ogun">Ogun</option>
                  <option value="Ondo">Ondo</option>
                  <option value="Osun">Osun</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Plateau">Plateau</option>
                  <option value="Rivers">Rivers</option>
                  <option value="Sokoto">Sokoto</option>
                  <option value="Taraba">Taraba</option>
                  <option value="Yobe">Yobe</option>
                  <option value="Zamfara">Zamfara</option>
                </select>
                <button type="submit" class="search-box-button">Search Hotels</button>
            </form>
          </div>
        </section>
        <section id="topHotels" class="top-hotels">
          <div class="container">
            <h2 class="top-hotels__title">Explore our top hotels</h2>
            <div class="hotel-listings" id="hotelListings">
            </div>
          </div>
        </section>
      </main>
    </div>
  `
}

templates.header = function (isAdmin) {
  return `
  <header class="header">
    <div class="header-wrap">
      <a href="${isAdmin ? '#/dashboard' : '#/'}" class="brand">Eden</a>
      ${isAdmin ?
      `<div class="admin">
        <span class="welcome-message">Welcome Admin</span>
        <a href="#/logout" id="logout">Logout</a>
      </div>
      ` : ''}
  </header>
`
}

templates.hotel_listing = function ({
  id,
  name,
  image,
  price,
  description,
  location,
  address
}) {
  return `
    <article class="hotel">
      <div class="hotel-photo-block">
        <a href="hotel-details.html" class="hotel_img_link">
          <img src="${image}" class="hotel_img" alt="">
        </a>
      </div>
      <section class="hotel-details-block">
        <div class="hotel_info">
          <h2 class="hotel_title">
            <a href="#/hotel?${id}" class="hotel_name_link">${name}</a>
          </h2>
          <p class="hotel_location">${[address, location].join(', ')}</p>
          <p class="hotel_dec">${utils.shorten(description, 200)}</p>
        </div>

        <div class="price-block">
          <p class="hotel_price">${parseFloat(price).toLocaleString()}
            <span>per night</span>
          </p>
        </div>
      </section>
    </article>
  `
}

templates.not_found = function () {
  return `
    <div class="not-found">
      <h1>Hotel not found 🐙</h1>
      <p>Well this is awkward. How about we pretend it didn't happen ?</p>
      <a href="#/">Back home</a>
    </div>
  `
}

templates.empty_listing = function () {
  return `
    <div class="no-record">
      We have no hotel available
    </div>
  `
}

templates.hotel_page = function () {
  return `
    <div id="hotelPage" class="v-height fixed-header">
      ${templates.header(false)}
      <main role="main">
        <div class="hp-content" id="hotelInfo">
        </div>
      </main>
    </div>
  `
 }

templates.hotel_info = function({
  id,
  name,
  image,
  price,
  description,
  location,
  address,
  facilities=""
}) {
  return `
    <div>
      <div class="hp-header">
        <div class="hp-info">
          <h1 class="hp__hotel-name">${name}</h1>
          <p class="hp__hotel-address">${address}<p>
          <p class="hp__hotel-price hotel_price">${parseFloat(price).toLocaleString()}</p>
        </div>
        <button class="button book-button" onclick="controllers.bookHotel(event)">Book</button>
      </div>
        
      <section class="hp-gallery">
        <img src="img/hotel-img-1.webp" alt="${name}">
      </section>
      <section class="hp-description">
        <h3>Hotel Description</h3>
        <p>${description}</p>
      </section>
      <section class="hotel_facilities">
        <p>${facilities}</p>
      </section>
    </div>
  `
}

templates.loader = function() {
  return `
    <div class="loader">
      <svg viewBox="0 0 32 32" width="32" height="32">
        <circle id="spinner" cx="16" cy="16" r="14" fill="none"></circle>
      </svg>
    </div>
  `
}