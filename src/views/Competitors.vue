<template>
  <div class="competitors">
    <UserHeader/>
    <div class="container mt-2 p-3">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-12 col-12 p-lg-0 p-md-0 p-sm-3 p-3"></div>

        <div class="col-lg-9 col-md-9 col-sm-12 col-12">
          <!-- PRICE COLLAPSE -->
          <!-- COMPANY 1 -->
          <div class="accordion accordion-wrapper shadow-sm mb-4" id="competitorAccordion">
            <h3 class="shadow-sm">Company 1</h3>
            <div class="row m-0">
              <div class="col-12 col-sm-12 col-md-4 col-lg-4 section p-0">
                <div class="card-sections cheaper" id="companyOne">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      120 products cheaper
                      <i class="fas fa-angle-down"></i>
                    </button>
                  </h5>
                </div>
              </div>

              <div class="col-12 col-sm-12 col-md-4 col-lg-4 section p-0">
                <div class="card-sections same" id="companyOne">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      120 products equal pricing
                      <i class="fas fa-angle-down"></i>
                    </button>
                  </h5>
                </div>
              </div>

              <div class="col-12 col-sm-12 col-md-4 col-lg-4 section p-0">
                <div class="card-sections expensive" id="companyOne">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      120 products more expensive
                      <i class="fas fa-angle-down"></i>
                    </button>
                  </h5>
                </div>
              </div>
            </div>

            <!-- content -->
            <div class="row">
              <div class="col-12">
                <!-- cheaper -->
                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="companyOne"
                  data-parent="#competitorAccordion"
                >
                  <div class="card-body p-0">
                    <table>
                      <tr>
                        <th>
                          <i class="fas fa-star"></i>
                        </th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Difference</th>
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
                        <td class="text-center">$53</td>
                        <td class="text-center">
                          <span class="price-down">
                            <i class="fas fa-arrow-down mr-1 d-md-none d-lg-inline"></i>
                            <span>-20%</span>
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
                        <td class="text-center">$53</td>
                        <td class="text-center">
                          <span class="price-down">
                            <i class="fas fa-arrow-down mr-1 d-md-none d-lg-inline"></i>
                            <span>-20%</span>
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
                        <td class="text-center">$53</td>
                        <td class="text-center">
                          <span class="price-down">
                            <i class="fas fa-arrow-down mr-1 d-md-none d-lg-inline"></i>
                            <span>-20%</span>
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
                        <td class="text-center">$53</td>
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
                <!-- same -->
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="companyOne"
                  data-parent="#competitorAccordion"
                >
                  <div class="card-body p-0">
                    <table>
                      <tr>
                        <th>
                          <i class="fas fa-star"></i>
                        </th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Difference</th>
                      </tr>
                      <!-- PRICE SAME -->
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
                        <td class="text-center">$53</td>
                        <td class="text-center">
                          <span class="price-same">
                            <i class="fas fa-arrow-right mr-1 d-md-none d-lg-inline"></i>
                            <span>1%</span>
                          </span>
                        </td>
                      </tr>
                      <!-- PRICE SAME -->
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
                        <td class="text-center">$53</td>
                        <td class="text-center">
                          <span class="price-same">
                            <i class="fas fa-arrow-right mr-1 d-md-none d-lg-inline"></i>
                            <span>1%</span>
                          </span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <!-- expensive -->
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="companyOne"
                  data-parent="#competitorAccordion"
                >
                  <div class="card-body p-0">
                    <table>
                      <tr>
                        <th>
                          <i class="fas fa-star"></i>
                        </th>
                        <th>Product Name</th>
                        <th>Price</th>
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
                        <td class="text-center">$53</td>
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
                        <td class="text-center">$53</td>
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
                        <td class="text-center">$53</td>
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
                        <td class="text-center">$53</td>
                        <td class="text-center">
                          <span class="price-up">
                            <i class="fas fa-arrow-up mr-1"></i>
                            <span>+20%</span>
                          </span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <!-- COMPANY 2 -->
          <div class="accordion accordion-wrapper shadow-sm mb-4" id="competitorAccordionTwo">
            <h3 class="shadow-sm">Company 2</h3>
            <div class="row m-0">
              <div class="col-12 col-sm-12 col-md-4 col-lg-4 section p-0">
                <div class="card-sections cheaper" id="companyTwo">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOneTwo"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      120 products cheaper
                      <i class="fas fa-angle-down"></i>
                    </button>
                  </h5>
                </div>
              </div>

              <div class="col-12 col-sm-12 col-md-4 col-lg-4 section p-0">
                <div class="card-sections same" id="companyTwo">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwoTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      120 products equal pricing
                      <i class="fas fa-angle-down"></i>
                    </button>
                  </h5>
                </div>
              </div>

              <div class="col-12 col-sm-12 col-md-4 col-lg-4 section p-0">
                <div class="card-sections expensive" id="companyTwo">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThreeTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      120 products more expensive
                      <i class="fas fa-angle-down"></i>
                    </button>
                  </h5>
                </div>
              </div>
            </div>

            <!-- content -->
            <div class="row">
              <div class="col-12">
                <!-- cheaper -->
                <div
                  id="collapseOneTwo"
                  class="collapse"
                  aria-labelledby="companyTwo"
                  data-parent="#competitorAccordionTwo"
                >
                  <div class="card-body p-0">
                    <table>
                      <tr>
                        <th>
                          <i class="fas fa-star"></i>
                        </th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Difference</th>
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
                        <td class="text-center">$53</td>
                        <td class="text-center">
                          <span class="price-down">
                            <i class="fas fa-arrow-down mr-1 d-md-none d-lg-inline"></i>
                            <span>-20%</span>
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
                        <td class="text-center">$53</td>
                        <td class="text-center">
                          <span class="price-down">
                            <i class="fas fa-arrow-down mr-1 d-md-none d-lg-inline"></i>
                            <span>-20%</span>
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
                        <td class="text-center">$53</td>
                        <td class="text-center">
                          <span class="price-down">
                            <i class="fas fa-arrow-down mr-1 d-md-none d-lg-inline"></i>
                            <span>-20%</span>
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
                        <td class="text-center">$53</td>
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
                <!-- same -->
                <div
                  id="collapseTwoTwo"
                  class="collapse"
                  aria-labelledby="companyTwo"
                  data-parent="#competitorAccordionTwo"
                >
                  <div class="card-body p-0">
                    <table>
                      <tr>
                        <th>
                          <i class="fas fa-star"></i>
                        </th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Difference</th>
                      </tr>
                      <!-- PRICE SAME -->
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
                        <td class="text-center">$53</td>
                        <td class="text-center">
                          <span class="price-same">
                            <i class="fas fa-arrow-right mr-1 d-md-none d-lg-inline"></i>
                            <span>1%</span>
                          </span>
                        </td>
                      </tr>
                      <!-- PRICE SAME -->
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
                        <td class="text-center">$53</td>
                        <td class="text-center">
                          <span class="price-same">
                            <i class="fas fa-arrow-right mr-1 d-md-none d-lg-inline"></i>
                            <span>1%</span>
                          </span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <!-- expensive -->
                <div
                  id="collapseThreeTwo"
                  class="collapse"
                  aria-labelledby="companyTwo"
                  data-parent="#competitorAccordionTwo"
                >
                  <div class="card-body p-0">
                    <table>
                      <tr>
                        <th>
                          <i class="fas fa-star"></i>
                        </th>
                        <th>Product Name</th>
                        <th>Price</th>
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
                        <td class="text-center">$53</td>
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
                        <td class="text-center">$53</td>
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
                        <td class="text-center">$53</td>
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
                        <td class="text-center">$53</td>
                        <td class="text-center">
                          <span class="price-up">
                            <i class="fas fa-arrow-up mr-1"></i>
                            <span>+20%</span>
                          </span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
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