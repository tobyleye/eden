templates.login_page = function () {
  return `
    <div id="login">
      <div class="col-1">
        <div class="form-container">
          <h3 class="form-title">Welcome back</h3>
          <form id="loginForm" onsubmit="controllers.login(event)">
            <div id="formErrors"></div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="enter your email" required>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" placeholder="enter your password" required>  
          </div>
          <div class="form-submit">
            <button class="button">Login</button>
          </div>
          </form>
        </div>
      </div>
      <div class="col-2">
      </div>
    </div>
  `
}

templates.generate_table_row = function ({ 
  id, 
  name,
  image,
  price,
  description,
  location,
  type,
  address
}, index) {
  return `
  <tr>
    <td>${index + 1}</td>
    <td>
        <a href="#">${name}</a>
    </td>
    <td class="img">
        <img src="${image}" alt="${name}">
    </td>
    <td class="type">${type}</td>
    <td class="hotel_price">${parseFloat(price).toLocaleString()}</td>
    <td class="desc">${utils.shorten(description, 120)}</td>
    <td>${utils.shorten(address, 50)}</td>
    <td>${location}</td>
    <td>
      <a href="#/edit?${id}" class="edit icon-btn" data-action="edit">
        <i class="material-icons">create</i>
      </a>
    </td>
    <td>
      <button class="delete icon-btn" onclick="controllers.deleteHotel(event, ${id})" 
        data-action="delete" data-index="${id}">
          <i class="material-icons">delete</i>
      </button>
    </td>
  </tr>
  `
}

templates.dashboard_page = function () {
  return `
    <div id="adminDashboard" class="v-height fixed-header">
      ${templates.header(true)}
      <div class="main-section">
        <header>
          <h2></h2>
          <a href="#/add" class="add-hotel button">Add Hotel</a>
        </header>

        <div id="dashboardContent">
      </div>
    </div>
  `
}

templates.dashboard_empty = function () {
  return `
    <div class="empty">
      <span role="img">😿</span>
      <p>You have not added any Hotel</p>
    </div>
  `
}

templates.generate_table = function (data) {
  return `
    <div class="table-wrapper">
      <table class="table">
        <thead>
          <tr>
            <th>No#</th>
            <th>Hotel Name</th>
            <th class="img">Photo</th>
            <th>Room Type</th>
            <th>Price (₦)</th>
            <th class="desc">Description</th>
            <th>Address</th>
            <th>Location (state)</th>
            <th></th>
            <th></th>
            </tr>
        </thead>
        <tbody>
          ${data.map(templates.generate_table_row).join('')}
        </tbody>
      </table>
    </div>
  `
}

templates.add_hotel_page = function () {
  return `
    <div id="addHotel" class="v-height fixed-header">
      ${templates.header(true)}
      <main>
        ${templates.hotel_form(mode='add', handleSubmit='controllers.addHotel')}
      </main>
    </div>
  `
}

templates.edit_hotel_page = function (param) {
  return `
    <div id="editHotel" class="v-height fixed-header">
      ${templates.header(true)}
      <main>
        ${templates.hotel_form(mode='edit', handleSubmit='controllers.updateHotel', hotelId=param)}
      </main>
    </div>
  `
}

templates.images = ['img/hotel-img-1.webp', 'img/hotel-img-2.webp', 'img/hotel-img-3.webp', 'img/hotel-img-4.webp']

templates.hotel_form = function (mode, handleSubmit, hotelId) {
  return `
    <div class="form-container">
      <h3 class="form__title">${mode == 'edit' ? 'Edit' : 'Add'} Hotel</h3>
       <form onsubmit="${handleSubmit}(event, ${hotelId})">
        <div class="form-group">
          <label for="hotel_name">Hotel Name</label>
          <input type="text" id="hotel_name" placeholder="enter hotel name" required="required">
        </div>
        <div class="form-group">
          <label for="hotel_room_type">Room type</label>
          <select id="room_type" required>
            <option value="" disabled selected>Selete a room type</option>
            <option value="junior suite">Junior Suite</option>
            <option value="standard suite">Standard Suite</option>
            <option value="deluxe suite">Deluxe Suite</option>
            <option value="executive suite">Executive Suite</option>
          </select>
        </div>
        <div class="form-group">
          <label for="hotel_price">Price</label>
          <input type="number" id="hotel_price" placeholder="price per night" required="required">
        </div>
        <div class="form-group">
          <label for="hotel_desc">Description</label>
          <textarea id="hotel_desc" placeholder="tell us more about the hotel" required="required"></textarea>
        </div>
        <div class="form-group-wrap">
          <div class="form-group">
            <label for="hotel_location">Location</label>
            <select class="select-control" id="hotel_location" required>
              <option value="" disabled selected>Select State</option>
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
          </div>
          <div class="form-group">
            <label for="hotel_address">Address</label>
            <input type="text" id="hotel_address" placeholder="enter hotel address" required="required">
          </div>
        </div>
        <div class="form-submit">
          <button class="button">Save</button>
        </div>
      </form>
    </div>
  `
}