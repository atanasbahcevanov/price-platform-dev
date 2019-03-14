<template>
  <div>
    <div class="about-us">
      <!-- Header -->
      <div class="container about-us-header">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-12 text-left">
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</h1>
            <ul>
              <li>lorem ipsum sit amet, consectetur adipiscing elit</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum sit amet, consectetur adipiscing elit</li>
            </ul>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-12 pl-3 pr-3">
            <div class="img"  :style="{ backgroundImage: 'url(' + require('@/assets/img/about-header.jpg') + ')' }">
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="container spacer">
        <div class="row"></div>
        <!--  -->
        <div class="row bg-white shadow-sm text-left">
          <div class="col-12 pt-5 mt-3">
            <h2 class="mt-lg-0 mt-md-0 mt-sm-4 mt-4">Our Mission</h2>
            <p
              class="p-2"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div class="col-12 pt-3 pb-5">
            <h2>Our Strategy</h2>
            <p
              class="p-2"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
        <!-- facts -->
        <div class="row justify-content-center mt-5 p-3">
          <div class="col-lg-4 col-md-6 col-sm-12 col-12 p-0 mb-4">
            <div class="bg-white shadow-sm m-3 pt-5 pb-5">
              <h3 class="m-0">1342</h3>
              <h5>stores</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-12 p-0 mb-4">
            <div class="bg-white shadow-sm m-3 pt-5 pb-5">
              <h3 class="m-0">+ 200k</h3>
              <h5>products</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-12 p-0 mb-4">
            <div class="bg-white shadow-sm m-3 pt-5 pb-5">
              <h3 class="m-0">+ 240</h3>
              <h5>reports</h5>
            </div>
          </div>
        </div>
        <!-- contact -->
        <div class="row mb-5 pb-5 mt-3 pt-5">
          <div class="col-12 col-lg-6 col-md-6 col-sm-12 contact-details">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d712.8384451289832!2d-1.1192999070556553!3d51.36877219387111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876a17dc2289429%3A0x15c72d91b2036e40!2sFuturePro+Logistics+Ltd!5e0!3m2!1sen!2sbg!4v1548684519973"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>

            <h6 class="mt-4">HQ
              <address></address>
            </h6>
            <p>PricePlaform Ltd
              <br>Street
              <br>City, Postcode
            </p>

            <h6>Call us today</h6>
            <p>(+359) 3123 321 213</p>
          </div>

          <div class="col-12 col-lg-6 col-md-6 col-sm-12 contact-form">
            <div class="row">
              <h2>Drop us a line</h2>
            </div>
            <!--  -->
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-12 p-0 pr-lg-2 pr-md-2 pr-0">
                <input
                  class="form-control required"
                  name=""
                  id="name"
                  type="text"
                  placeholder="First Name"
                >
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-12 p-0 pl-lg-2 pl-md-2 pl-0">
                <input
                  class="form-control"
                  name=""
                  type="text"
                  placeholder="Last Name"
                >
              </div>
            </div>

            <div class="row">
              <input
                class="form-control"
                name=""
                type="text"
                placeholder="Company Name"
              >
            </div>

            <div class="row">
              <input
                class="form-control required"
                name=""
                id="email"
                type="email"
                placeholder="Email"
              >
            </div>

            <div class="row">
              <input
                class="form-control"
                name=""
                type="text"
                placeholder="Phone"
              >
            </div>

            <div class="row mt-3 textarea">
              <textarea
                class="form-control"
                name=""
                rows="5"
                cols="30"
                placeholder="How can we help?"
              ></textarea>
            </div>

            <div class="row">
              <div
                class="g-recaptcha"
                id="rcaptcha"
                data-sitekey="6LeYWY0UAAAAANmKhrukBFaFyJzW03NgHk_l1mnE"
              ></div>
              <span id="captcha" style="color:red"></span>
              
              <button class="btn buttonAccent" onClick="formSubmit(this,'form_1')">
                Submit
                <i class="fas fa-spinner fa-spin no-spin"></i>
              </button>
            </div>

            <input class="form-control upload_dir" value="" type="hidden">
            <!--  -->
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  components: {}
};
</script>