<template>
  <div class="catalogue">
    <UserHeader/>
    <div class="container mt-2 p-3">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-12 col-12 p-lg-0 p-md-0 p-sm-3 p-3"></div>

        <div class="col-lg-9 col-md-9 col-sm-12 col-12">
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

                <!-- DUMMY DATA -->
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
                <!-- DUMMY DATA -->
              </table>
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