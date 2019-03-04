<template>
  <div class="useful-links-section">
    <Header/>
    <!--  -->
    <div
      class="content-header"
      :style="{ backgroundImage: 'url(' + require('@/assets/img/faq-bg.jpg') + ')' }"
    >
      <div class="container ver-align">
        <div class="row">
          <div
            style="max-width: 450px;"
            class="col-12 col-lg-6 col-md-12 col-sm-12 bg-white text-lg-left text-md-center text-sm-center text-center m-3"
          >
            <h1 class="industry-title">Frequently Asked Questions</h1>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="container mt-4 faq">
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
          <div role="tablist">
            <!--  -->
            <b-card no-body class="mb-1 card-container">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button
                  block
                  href="#"
                  v-b-toggle.accordion1
                  variant="info"
                  class="text-left d-flex justify-content-between"
                >{{ t_faq1 }}
                  <font-awesome-icon  :icon="['fas', 'chevron-down']" class="arrow align-self-center"/>
                </b-button>
              </b-card-header>
              <b-collapse id="accordion1" visible accordion="faq-accordion" role="tabpanel">
                <b-card-body>
                  <p class="card-text">{{ faq1 }}</p>
                </b-card-body>
              </b-collapse>
            </b-card>
            <!--  -->
            <!--  -->
            <b-card no-body class="mb-1 card-container">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button
                  block
                  href="#"
                  v-b-toggle.accordion2
                  variant="info"
                  class="text-left d-flex justify-content-between"
                >{{ t_faq2 }}
                  <font-awesome-icon  :icon="['fas', 'chevron-down']" class="arrow align-self-center"/>
                </b-button>
              </b-card-header>
              <b-collapse id="accordion2" accordion="faq-accordion" role="tabpanel">
                <b-card-body>
                  <p class="card-text">{{ faq2 }}</p>
                </b-card-body>
              </b-collapse>
            </b-card>
            <!--  -->
            <!--  -->
            <b-card no-body class="mb-1 card-container">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button
                  block
                  href="#"
                  v-b-toggle.accordion3
                  variant="info"
                  class="text-left d-flex justify-content-between"
                >{{ t_faq3 }}
                  <font-awesome-icon  :icon="['fas', 'chevron-down']" class="arrow align-self-center"/>
                </b-button>
              </b-card-header>
              <b-collapse id="accordion3" accordion="faq-accordion" role="tabpanel">
                <b-card-body>
                  <p class="card-text">{{ faq3 }}</p>
                </b-card-body>
              </b-collapse>
            </b-card>
            <!--  -->
            <!--  -->
            <b-card no-body class="mb-1 card-container">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button
                  block
                  href="#"
                  v-b-toggle.accordion4
                  variant="info"
                  class="text-left d-flex justify-content-between"
                >{{ t_faq4 }}
                  <font-awesome-icon  :icon="['fas', 'chevron-down']" class="arrow align-self-center"/>
                </b-button>
              </b-card-header>
              <b-collapse id="accordion4" accordion="faq-accordion" role="tabpanel">
                <b-card-body>
                  <p class="card-text">{{ faq4 }}</p>
                </b-card-body>
              </b-collapse>
            </b-card>
            <!--  -->
            <!--  -->
            <b-card no-body class="mb-1 card-container">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button
                  block
                  href="#"
                  v-b-toggle.accordion5
                  variant="info"
                  class="text-left d-flex justify-content-between"
                >{{ t_faq5 }}
                  <font-awesome-icon  :icon="['fas', 'chevron-down']" class="arrow align-self-center"/>
                </b-button>
              </b-card-header>
              <b-collapse id="accordion5" accordion="faq-accordion" role="tabpanel">
                <b-card-body>
                  <p class="card-text">{{ faq5 }}</p>
                </b-card-body>
              </b-collapse>
            </b-card>
            <!--  -->
            <!--  -->
            <b-card no-body class="mb-1 card-container">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button
                  block
                  href="#"
                  v-b-toggle.accordion6
                  variant="info"
                  class="text-left d-flex justify-content-between"
                >{{ t_faq6 }}
                  <font-awesome-icon  :icon="['fas', 'chevron-down']" class="arrow align-self-center"/>
                </b-button>
              </b-card-header>
              <b-collapse id="accordion6" accordion="faq-accordion" role="tabpanel">
                <b-card-body>
                  <p class="card-text">{{ faq6 }}</p>
                </b-card-body>
              </b-collapse>
            </b-card>
            <!--  -->
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <Footer/>
  </div>
</template>



<script>
import Header from "@/components/LandingHeader.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "faq",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      t_faq1:`Lorem impsum dolor one?`,
      faq1: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
      t_faq2:`Lorem impsum dolor two?`,
      faq2: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
      t_faq3:`Lorem impsum dolor three?`,
      faq3: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
      t_faq4:`Lorem impsum dolor four?`,
      faq4: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
      t_faq5:`Lorem impsum dolor five?`,
      faq5: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
      t_faq6:`Lorem impsum dolor six?`,
      faq6: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
    };
  }
};
</script>