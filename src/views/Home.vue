<template>
  <div class="dashboard">
    <UserHeader/>
    <div class="container mt-2 p-3">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-12 col-12 p-lg-0 p-md-0 p-sm-3 p-3">
          <!-- FILTER -->
        </div>

        <div class="col-lg-9 col-md-9 col-sm-12 col-12">
          <!-- welcome row -->
          <div class="row mt-sm-4 mt-4 mt-md-2 mt-lg-2">
            <div class="col-lg-9 col-md-6 col-sm-12 col-12 welcome-back">
              <h3 class="mb-2">
                Welcome back to
                <b>Storename</b> price dashboard!
              </h3>
              <p>
                Your products are
                <span>6% more expensive</span> than your competitors. Consider lowering the price of
                219
                products.
              </p>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12 latest-update">
              <span>Latest update:</span>
              <br>
              <span>21/01/2019 12:21AM</span>
            </div>
          </div>
          <!-- Quick states -->
          <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12 col-12 mt-2">
              <span class="quick-stat-card shadow-sm d-flex">
                <div class="circle cheaper ml-3 mr-3">
                  <span>112</span>
                </div>
                <span class="mr-2">Products Cheaper</span>
              </span>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 col-12 mt-2">
              <span class="quick-stat-card shadow-sm d-flex">
                <div class="circle same ml-3 mr-3">
                  <span>112</span>
                </div>
                <span class="mr-2">Products w/t Equal Price</span>
              </span>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 col-12 mt-2">
              <span class="quick-stat-card shadow-sm d-flex">
                <div class="circle expensive ml-3 mr-3">
                  <span>112</span>
                </div>
                <span class="mr-2">Products More Expensive</span>
              </span>
            </div>
          </div>
          <!-- Dashboard -->
          <div class="row">
            <div class="col-12 mt-3 mb-3">
              <div class="graph shadow-sm p-2 pt-3 pb-2">
                <canvas id="overviewDashboard"></canvas>
              </div>
            </div>
          </div>
          <!-- LIST -->
          <div class="row d-sm-none d-none d-md-block d-lg-block">
            <div class="col-12">
              <table>
                <tr>
                  <th>
                    <i class="fas fa-star"></i>
                  </th>
                  <th>Product Name</th>
                  <th>Stock</th>
                  <th>Price</th>
                  <th>Competitors</th>
                  <th>Difference</th>
                </tr>
                <!-- PRICE UP -->
                <tr class="product-row">
                  <td class="text-center p-3">
                    <i class="far fa-star"></i>
                  </td>
                  <td class="p-3">
                    <div class="d-flex">
                      <img
                        src="https://cdn.shopify.com/s/files/1/1367/5201/products/Camo_Seamless_LS_Crop_Top_Black_C_1440x.jpg?v=1545063467"
                      >
                      <span class="pl-4">
                        <h6>Product Name</h6>
                        <p>id: 321312524</p>
                      </span>
                      <span class="ml-auto product-detail-button">
                        <a data-toggle="modal" data-target="#productDetailModal">
                          <i class="fas fa-info-circle"></i>
                        </a>
                      </span>
                    </div>
                  </td>
                  <td class="text-center">YES</td>
                  <td class="text-center">$53</td>
                  <td class="text-center">$20 - $65</td>
                  <td class="text-center">
                    <span class="price-up">
                      <i class="fas fa-arrow-up mr-1"></i>
                      <span>+20%</span>
                    </span>
                  </td>
                </tr>
                <!-- PRICE DOWN -->
                <tr class="product-row">
                  <td class="text-center p-3">
                    <i class="far fa-star"></i>
                  </td>
                  <td class="p-3">
                    <div class="d-flex">
                      <img
                        src="https://cdn.shopify.com/s/files/1/1367/5201/products/Camo_Seamless_LS_Crop_Top_Black_C_1440x.jpg?v=1545063467"
                      >
                      <span class="pl-4">
                        <h6>Product Name</h6>
                        <p>id: 321312524</p>
                      </span>
                      <span class="ml-auto product-detail-button">
                        <a data-toggle="modal" data-target="#productDetailModal">
                          <i class="fas fa-info-circle"></i>
                        </a>
                      </span>
                    </div>
                  </td>
                  <td class="text-center">YES</td>
                  <td class="text-center">$53</td>
                  <td class="text-center">$20 - $65</td>
                  <td class="text-center">
                    <span class="price-down">
                      <i class="fas fa-arrow-down mr-1 d-md-none d-lg-inline"></i>
                      <span>-20%</span>
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cell Modal -->
    <div
      class="modal fade product-detail"
      id="productDetailModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="productDetailModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>





<script>
import UserHeader from "@/components/Header.vue";

export default {
  name: "maindashboard",
  components: {
    UserHeader
  }
};
</script>