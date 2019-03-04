<template>
  <div class="navigation-section sticky">
    <!-- Row 1 -->
    <div class="d-sm-none d-none d-md-block d-lg-block d-xl-block">
      <div class="navigation shadow-sm">
        <div class="container d-flex justify-content-end">
          <nav class="navbar-small navbar-expand-md">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul id="menu" class="navbar-nav mr-auto">
                <li class="nav-item-tiny m-2">
                  <router-link to="/industries/fashion-and-beauty" class="nav-link">Fashion & Beauty</router-link>
                </li>
                <li class="nav-item-tiny-bar">|</li>
                <li class="nav-item-tiny m-2">
                  <router-link to="/industries/sports" class="nav-link">Sports</router-link>
                </li>
                <li class="nav-item-tiny-bar">|</li>
                <li class="nav-item-tiny m-2">
                  <router-link to="/industries/music" class="nav-link">Music</router-link>
                </li>
                <li class="nav-item-tiny-bar">|</li>
                <li class="nav-item-tiny m-2">
                  <router-link
                    to="/industries/health-and-wellness"
                    class="nav-link"
                  >Health & Wellness</router-link>
                </li>
                <li class="nav-item-tiny-bar">|</li>
                <li class="nav-item-tiny m-2">
                  <router-link to="/industries/toys-and-games" class="nav-link">Toys & Games</router-link>
                </li>
                <li class="nav-item-tiny-bar">|</li>
                <li class="nav-item-tiny m-2">
                  <router-link to="/industries/entertainment" class="nav-link">Entertainment</router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <!--  -->
    <!-- ROW 2 -->
    <div class="menu-holder nav">
      <div class="w-100 bg-white">
        <div class="col-12 order-md-1 pt-3 pb-3">
          <div class="container topbar">
            <div class="row">
              <div class="col-sm-12 col-12 col-md-6 col-lg-6 d-flex align-items-center align-logo">
                <a
                  v-b-toggle.collapse1
                  class="mobile-profile-left d-sm-flex d-flex d-md-none d-lg-none d-xl-none"
                >
                  <FontAwesomeIcon icon="bars"></FontAwesomeIcon>
                </a>

                <router-link to="/">
                  <img src="../assets/logo.png" height="30">
                </router-link>

                <span class="mobile-profile d-sm-flex d-flex d-md-none d-lg-none d-xl-none">
                  <b-dropdown variant="link" right no-caret>
                    <template slot="button-content">
                      <font-awesome-icon :icon="['fas', 'globe-americas']" class="globe"/>
                    </template>
                    <h4>We speak:</h4>
                    <hr>
                    <b-dropdown-item href="#">
                      <flag iso="bg" style="font-size: 32px; border:1px solid lightgray;"/>Bulgarian
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                      <flag iso="de" style="font-size: 32px; border:1px solid lightgray;"/>Deutsch
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                      <flag iso="gb" style="font-size: 32px; border:1px solid lightgray;"/>English
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                      <flag iso="it" style="font-size: 32px; border:1px solid lightgray;"/>Italiano
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                      <flag iso="fr" style="font-size: 32px; border:1px solid lightgray;"/>Français
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
              </div>
              <div
                class="second-row-menu col-6 align-items-center d-sm-none d-none d-md-flex d-lg-flex d-xl-flex justify-content-flex-end"
              >
                <div class="p-0">
                  <router-link to="/news">News</router-link>
                  <span>|</span>
                  <b-dropdown variant="link" right no-caret>
                    <template slot="button-content">
                      <span class="dropbtn ml-2">
                        <font-awesome-icon :icon="['fas', 'globe-americas']" class="globe"/>
                      </span>
                    </template>
                    <h4>We speak:</h4>
                    <hr>
                    <b-dropdown-item href="#">
                      <flag iso="bg" style="font-size: 32px; border:1px solid lightgray;"/>Bulgarian
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                      <flag iso="de" style="font-size: 32px; border:1px solid lightgray;"/>Deutsch
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                      <flag iso="gb" style="font-size: 32px; border:1px solid lightgray;"/>English
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                      <flag iso="it" style="font-size: 32px; border:1px solid lightgray;"/>Italiano
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                      <flag iso="fr" style="font-size: 32px; border:1px solid lightgray;"/>Français
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>

        <b-collapse id="collapse1" class="mt-2">
          <b-card>
            <ul id="menu" class="navbar-nav mr-auto menu-mobile">
              <li class="nav-item">
                <router-link to="#features" class="nav-link">Features</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/industries" class="nav-link">Industries</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/case-studies" class="nav-link">Case Studies</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/pricing" class="nav-link">Pricing</router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link">About</router-link>
              </li>
              <!--  -->
              <!-- Auth Mobile -->
              <li class="nav-item m-auto">
                <router-link to="#" class="sign-up">
                  <strong>Sign up</strong>
                </router-link>
              </li>
              <li class="nav-item m-auto">
                <router-link to="#" class="sign-in">Get Started</router-link>
              </li>
              <!--  -->
            </ul>
          </b-card>
        </b-collapse>

        <!-- DESKTOP -->
        <div class="col-12 order-md-2 d-sm-none d-none d-md-block d-lg-block d-xl-block p-0">
          <div class="navigation shadow-sm">
            <div class="container">
              <nav class="navbar navbar-expand-md">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul id="menu" class="navbar-nav mr-auto">
                    <li class="nav-item m-2">
                      <router-link to="#features" class="nav-link">Features</router-link>
                    </li>
                    <li class="nav-item m-2">
                      <router-link to="/industries" class="nav-link">Industries</router-link>
                    </li>
                    <li class="nav-item m-2">
                      <router-link to="/case-studies" class="nav-link">Case Studies</router-link>
                    </li>
                    <li class="nav-item m-2">
                      <router-link to="/pricing" class="nav-link">Pricing</router-link>
                    </li>
                    <li class="nav-item m-2">
                      <router-link to="/report" class="nav-link">About</router-link>
                    </li>
                  </ul>
                  <!--  -->
                  <!-- Auth Desktop -->
                  <div class="navbar-end">
                    <div class="navbar-item">
                      <div class="buttons">
                        <router-link to="#" class="sign-up">
                          <strong>Sign up</strong>
                        </router-link>
                        <router-link to="#" class="sign-in">Get Started</router-link>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Help modal view -->
    <b-modal id="creditInfoModal" title="Credits" ok-only ok-title="Alright">
      <div class="modal-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula libero,
          scelerisque eu iaculis non, faucibus ut dui. Aenean rhoncus massa purus, id cursus velit
          facilisis a. Nulla nisl velit, suscipit eu maximus sit amet, gravida at felis. In hac
          habitasse platea dictumst. Cras odio odio, ultrices a eleifend non, molestie sed elit.
          In et pretium lectus.
        </p>
      </div>
    </b-modal>
  </div>
</template>
