<template>
  <div class="alerts">
    <UserHeader/>
    <div class="container mt-2 p-3">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-12 col-12 p-lg-0 p-md-0 p-sm-3 p-3">
          <div class="filter-section shadow-sm">
            <!-- Alert header -->
            <div class="shadow-sm pt-2 pb-2 header pl-3">
              <h2>
                <i class="fas fa-chart-line mr-2"></i>Create an alert
              </h2>
            </div>

            <div class="pl-4 pr-4 mt-4">
              <span>
                <h5>Alert Name</h5>
                <input class="inputText" type="text" placeholder="Name">
              </span>
              
              <span>
                <h5>Select Products</h5>
                <p>tags list</p>
                <p></p>
              </span>
              
              <span>
                <h5 class="mt-2">Price(%) Difference</h5>
                <div id="histogram"></div>
              </span>
              
              <span>
                <h5 class="mt-2">Assign alert</h5>
                <p>Select assignee</p>
              </span>

              <br>
              <div class="text-center">
                <button class="mt-2 mb-4 btn-search">Create alert</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-9 col-md-9 col-sm-12 col-12">
          <!-- ALERT -->
          <div class="alert-section shadow-sm">
            <div class="row h-100 justify-content-center align-items-center">
              <img src="../assets/chart-empty-table.svg">
              <h2 class="mt-2">No price
                <br>alert found
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserHeader from "@/components/Header.vue";

export default {
  name: "competitors",
  components: {
    UserHeader
  }
};
</script>