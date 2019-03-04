<template>
  <div class="footer  pt-5 pb-3" :style="{ backgroundImage: 'url(' + require('@/assets/img/footerbg.jpg') + ')' }">
  
    <div class="container  mb-1">
      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-3 col-sm-6 col-12">
            <h6>About us</h6>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcor.
            </p>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-6 col-6 offset-lg-1 offset-md-1 offset-sm-0 offset-0">
          <h6>Industries</h6>
          <ul>
            <li>
              <router-link to="/industry/fashion-and-beauty">Fashion & Beauty</router-link>
            </li>
            <li>
              <router-link to="/industry/sports">Sports</router-link>
            </li>
            <li>
              <router-link to="/industry/music">Music</router-link>
            </li>
            <li>
              <router-link to="/industry/health-and-wellness">Health & Wellness</router-link>
            </li>
            <li>
              <router-link to="/industry/toys-and-games">Toys & Games</router-link>
            </li>
            <li>
              <router-link to="/industry/entertainment">Entertainment</router-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-6 col-6 offset-lg-1 offset-md-1 offset-sm-0 offset-0">
          <h6>Sitemap</h6>
          <ul>
            <li>
             <router-link to="/case-studies">Case studies</router-link>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-6 col-12 offset-lg-1 offset-md-1 offset-sm-0 offset-0">
          <h6>Useful Links</h6>
          <ul>
            <li>
              <a href="/terms-and-conditions">Terms & Conditions</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/cookies">Cookies</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/support">Support</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="row mt-4">
        <p class="w-100 text-center copyright">&copy; 2019 Price Platform. All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>