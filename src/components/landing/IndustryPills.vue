<template>
  <div class="industryPill container">
    <div class="row">
      <div class="col-12">
        <h1>Perfect fit for your industry</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <b-card no-body>
          <b-tabs card v-model="tabIndex">
            <b-tab title="Fashion & Beauty" :title-link-class="linkClass(0)">
              <div class="row pt-5 pb-5">
                <div class="col-md-6">
                  <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
                </div>
                <div class="col-md-6 align-self-center text-left">
                  <h3
                    class="slider-section-title mt-2"
                  >Lorem ipsum dolor sit amet, contetur adipiscing elit</h3>
                  <p
                    class="slider-description"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a lacus neque. Ut et semper arcu, sed lacinia diam. Donec massa est, euismod imperdiet libero ac, vehicula blandit urna. Donec velit sem, facilisis id faucibus vitae, facilisis vitae diam. Phasellus dapibus, leo sit amet aliquam faucibus, augue eros auctor arcu, ac dignissim lacus sapien quis ligula. Integer eu lacinia ligula. Integer magna purus, eleifend vel tempor quis, pharetra id lacus.
                    <br>Aliquam tempus placerat lobortis. Mauris et elit libero. Curabitur non eleifend enim. Nam scelerisque imperdiet arcu fermentum ornare.
                  </p>
                  <a class="learn-more-btn" href="#">Learn More</a>
                </div>
              </div>
            </b-tab>
            <b-tab title="Sports" :title-link-class="linkClass(1)"></b-tab>
            <b-tab title="Music" :title-link-class="linkClass(2)"></b-tab>
            <b-tab title="Entertainment" :title-link-class="linkClass(3)"></b-tab>
            <b-tab title="Health & Wellness" :title-link-class="linkClass(4)"></b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0
    };
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["selected-text"];
      } else {
        return ["pill-not-selected", "static-text"];
      }
    }
  }
};
</script>