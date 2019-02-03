<template>
  <div class="navigation-section sticky">

    <div class="menu-holder nav">
      <div class="w-100 bg-white">
        <div class="col-12 order-md-1 pt-3 pb-3">
          <div class="container topbar">
            <div class="row">
              <div class="col-md-3 d-flex align-items-center align-logo">
                <a
                  v-b-toggle.collapse1
                  class="mobile-profile-left d-sm-flex d-flex d-md-none d-lg-none d-xl-none"
                >
                  <FontAwesomeIcon icon="bars"></FontAwesomeIcon>
                </a>

                <router-link to="/">
                  <img src="https://i.ibb.co/R9zjy0b/Logo-header.png" height="30">
                </router-link>

                <span class="mobile-profile d-sm-flex d-flex d-md-none d-lg-none d-xl-none">
                  <FontAwesomeIcon icon="user-circle"></FontAwesomeIcon>
                </span>
              </div>
              <div class="col-md-5 d-flex align-items-center">
                <input class="form-control" placeholder=" Search ">
              </div>
              <div
                class="col-md-3 align-items-center d-sm-none d-none d-md-flex d-lg-flex d-xl-flex"
              >
                <div class="center-selector p-0">
                  credit: 2931
                  <a v-b-modal="'creditInfoModal'">
                    <FontAwesomeIcon icon="question-circle" class="ml-1 mr-1"></FontAwesomeIcon>
                  </a>
                  |
                  
                    <b-dropdown variant="link" right no-caret>
                  <template slot="button-content">
                   <span class="dropbtn ml-2">My account
                    <FontAwesomeIcon icon="angle-down" class="ml-2 arrow"></FontAwesomeIcon>
                  </span>
                  </template>
                  <b-dropdown-item href="#">Settings</b-dropdown-item>
                  <hr>
                  <b-dropdown-item href="#">Sign Out</b-dropdown-item>
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
                <router-link to="/" class="nav-link">
                  <FontAwesomeIcon icon="chart-line" class="mr-2"></FontAwesomeIcon>Dashboard
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/catalogue" class="nav-link">
                  <FontAwesomeIcon icon="newspaper" class="mr-2"></FontAwesomeIcon>Catalogue
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/competitors" class="nav-link">
                  <FontAwesomeIcon icon="trophy" class="mr-2"></FontAwesomeIcon>Competitors
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/suggestions" class="nav-link">
                  <FontAwesomeIcon icon="list" class="mr-2"></FontAwesomeIcon>Suggestions
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/alerts" class="nav-link">
                  <FontAwesomeIcon icon="bell" class="mr-2"></FontAwesomeIcon>Alerts
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/report" class="nav-link">
                  <FontAwesomeIcon icon="file-invoice-dollar" class="mr-2"></FontAwesomeIcon>Report
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/connections" class="nav-link">
                  <FontAwesomeIcon icon="draw-polygon" class="mr-2"></FontAwesomeIcon>Connections
                </router-link>
              </li>
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
                      <router-link to="/" class="nav-link">
                        <FontAwesomeIcon icon="chart-line" class="mr-2"></FontAwesomeIcon>Dashboard
                      </router-link>
                    </li>
                    <li class="nav-item m-2">
                      <router-link to="/catalogue" class="nav-link">
                        <FontAwesomeIcon icon="newspaper" class="mr-2"></FontAwesomeIcon>Catalogue
                      </router-link>
                    </li>
                    <li class="nav-item m-2">
                      <router-link to="/competitors" class="nav-link">
                        <FontAwesomeIcon icon="trophy" class="mr-2"></FontAwesomeIcon>Competitors
                      </router-link>
                    </li>
                    <li class="nav-item m-2">
                      <router-link to="/suggestions" class="nav-link">
                        <FontAwesomeIcon icon="list" class="mr-2"></FontAwesomeIcon>Suggestions
                      </router-link>
                    </li>
                    <li class="nav-item m-2">
                      <router-link to="/alerts" class="nav-link">
                        <FontAwesomeIcon icon="bell" class="mr-2"></FontAwesomeIcon>Alerts
                      </router-link>
                    </li>
                    <li class="nav-item m-2">
                      <router-link to="/report" class="nav-link">
                        <FontAwesomeIcon icon="file-invoice-dollar" class="mr-2"></FontAwesomeIcon>Report
                      </router-link>
                    </li>
                    <li class="nav-item m-2">
                      <router-link to="/connections" class="nav-link">
                        <FontAwesomeIcon icon="draw-polygon" class="mr-2"></FontAwesomeIcon>Connections
                      </router-link>
                    </li>
                  </ul>
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
