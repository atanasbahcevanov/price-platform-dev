<template>
  <div>
    <Header/>
    <div class="landing-section">
      <div class="image-wrapper">
        <WorldMap/>
        <div class="row align-items-center h-100 m-0 p-2">
          <div class="col-12 col-lg-4 col-md-6 col-sm-8 mx-auto landing-section-holder">
            <div class="h-100 justify-content-center">
              <div class="text-center header-section-width">
                <h1>Pricing Analysis for the
                  <br>Next Generation of Retail
                </h1>
                <a class="mt-5">Request Demo</a>
                <div class="container mt-5">
                  <div class="row">
                    <h6
                      class="text-sm-center text-md-center text-lg-left text-center w-100"
                    >Real time stats:</h6>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 p-0 mb-4">
                      <h3 class="m-0">1342</h3>
                      <h5>stores</h5>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 p-0 mb-4">
                      <h3 class="m-0">+ 200k</h3>
                      <h5>products</h5>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 p-0 mb-4">
                      <h3 class="m-0">+ 240</h3>
                      <h5>reports</h5>
                    </div>
                  </div>
                </div>
              </div>
              <!-- arrow down -->
              <!-- <div class="arrow-down">
                <font-awesome-icon :icon="['fas', 'chevron-down']" class="arrow"/>
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-bg">
      <div class="container">
        <div class="row">
          <!-- intro Description -->
          <div class="col-12 shadow-sm p-5 bg-white mt-5 mb-5" data-aos="fade">
            <h3>Take edge on the competition</h3>
            <p class="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        <!-- knowledge is power -->
        <Hotspots/>

        <FeatureGrid/>

        <div class="row">
          <IndustryPills/>
        </div>
        <div class="row">
          <Testimonial/>
        </div>
        <div class="row">
          <RequestDemo/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>


<script>
import Header from "@/components/LandingHeader.vue";
import Footer from "@/components/Footer.vue";

import WorldMap from "@/components/landing/WorldMap.vue";
import Hotspots from "@/components/landing/Hotspots.vue";
import FeatureGrid from "@/components/landing/FeatureGrid.vue";
import IndustryPills from "@/components/landing/IndustryPills.vue";
import Testimonial from "@/components/landing/Testimonial.vue";
import RequestDemo from "@/components/landing/RequestDemo.vue";

export default {
  name: "index",
  components: {
    WorldMap,
    Hotspots,
    FeatureGrid,
    IndustryPills,
    Testimonial,
    RequestDemo,
    Header,
    Footer
  }
};
</script>