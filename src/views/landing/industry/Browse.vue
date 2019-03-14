<template>
  <div>
    <div class="browse-header" :style="{ backgroundImage: 'url(' + require('@/assets/img/browse-header.jpg') + ')' }">
      <div class="container ver-align">
        <div class="row">
          <div class="col-12">
            <h1 class="services-title bg-white pl-3 pr-3">
              Browse
              <span></span>
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-6 col-md-7 col-sm-12 col-12 text-left pb-5 ">
          <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam officia quidem, ullam ipsa fugit facere magnam similique velit totam reiciendis esse aliquid inventore praesentium veritatis excepturi ab voluptatem maiores eos</h5>
        </div>
      </div>
      <div class="row browse-container mb-5">
        <div class="col-lg-4 col-md-6 col-sm-12 col-12 p-3">
          <router-link to="/industries/fashion-and-beauty">
            <div
              class="browse-card row m-0 justify-content-center align-items-center"
              :style="{ backgroundImage: 'url(' + require('@/assets/img/fashion-thumb.jpg') + ')' }"
            >
              <h3 class="pt-3 pb-3 shadow-sm">Fashion & Beauty</h3>
            </div>
          </router-link>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12 col-12 p-3">
          <router-link to="/industries/sports">
            <div
              class="browse-card row m-0 justify-content-center align-items-center"
              :style="{ backgroundImage: 'url(' + require('@/assets/img/sports-thumb.jpg') + ')' }"
            >
              <h3 class="pt-3 pb-3 shadow-sm">Sports</h3>
            </div>
          </router-link>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12 col-12 p-3">
          <router-link to="/industries/music">
            <div
              class="browse-card row m-0 justify-content-center align-items-center"
              :style="{ backgroundImage: 'url(' + require('@/assets/img/music-thumb.jpg') + ')' }"
            >
              <h3 class="pt-3 pb-3 shadow-sm">Music</h3>
            </div>
          </router-link>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12 col-12 p-3">
          <router-link to="/industries/health-and-wellness">
            <div
              class="browse-card row m-0 justify-content-center align-items-center"
              :style="{ backgroundImage: 'url(' + require('@/assets/img/health-thumb.jpg') + ')' }"
            >
              <h3 class="pt-3 pb-3 shadow-sm">Health & Wellness</h3>
            </div>
          </router-link>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12 col-12 p-3">
          <router-link to="/industries/toys-and-games">
            <div
              class="browse-card row m-0 justify-content-center align-items-center"
              :style="{ backgroundImage: 'url(' + require('@/assets/img/toys-thumb.jpg') + ')' }"
            >
              <h3 class="pt-3 pb-3 shadow-sm">Toys & Games</h3>
            </div>
          </router-link>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12 col-12 p-3">
          <router-link to="/industries/entertainment">
            <div
              class="browse-card row m-0 justify-content-center align-items-center"
              :style="{ backgroundImage: 'url(' + require('@/assets/img/entertainment-thumb.jpg') + ')' }"
            >
              <h3 class="pt-3 pb-3 shadow-sm">Entertainment</h3>
            </div>
          </router-link>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "browse",
  components: {

  }
};
</script>