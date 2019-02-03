<template>
  <div class="filter-section shadow-sm">
    <!-- filter header -->
    <div class="shadow-sm pt-2 pb-2 header pl-3">
      <h2>
            <font-awesome-icon icon="faChartLine" />
            Dashboard
      </h2>
    </div>

    <!-- Filter -->
    <h4 class="pl-3 mt-3">Filter</h4>

    <div class="pl-4 pr-4">
      <span>
        <h5>Search by text</h5>
        <input class="inputText" type="text" placeholder="Title, Reference code">
      </span>
      
      <span>
        <h5>Category</h5>
        <fieldset class="group">
          <div class="row pl-4 pr-4 checkbox">
            <div class="col-6 p-0">
              <input class="filter-checkbox" type="checkbox" id="vid-cb1" value="cat-name" checked>
              <label class="truck-margin" for="vid-cb1">
                <i class="fas fa-circle mr-1"></i>Cat name
              </label>
              <input class="filter-checkbox" type="checkbox" id="vid-cb2" value="Clothing" checked>
              <label class="truck-margin" for="vid-cb2">
                <i class="fas fa-circle mr-1"></i>Clothing
              </label>
            </div>
            <div class="col-6 p-0">
              <input class="filter-checkbox" type="checkbox" id="vid-cb3" value="Shopping" checked>
              <label class="truck-margin" for="vid-cb3">
                <i class="fas fa-circle mr-1"></i>Shopping
              </label>
              <input class="filter-checkbox" type="checkbox" id="vid-cb4" value="Gaming" checked>
              <label class="truck-margin" for="vid-cb4">
                <i class="fas fa-circle mr-1"></i>Gaming
              </label>
            </div>
          </div>
        </fieldset>
      </span>
      
      <span>
        <h5 class="mt-2">Price</h5>
        <div id="histogram"></div>
      </span>
      
      <span>
        <h5 class="mt-2">Brand</h5>
        <input class="inputText" type="text" placeholder="Title, Reference code">
      </span>
      
      <span>
        <h5>Favourite</h5>
        <fieldset id="favourites">
          <input type="radio" value="All" id="allFavourites" name="favourites">
          <label class="ml-2" for="allFavourites">All</label>
          <br>
          <input type="radio" value="Show my favourites" id="myFavourites" name="favourites">
          <label class="ml-2" for="myFavourites">Show my favourites</label>
        </fieldset>
      </span>
      
      <span>
        <h5 class="mt-2">Stock</h5>
        <fieldset id="stock">
          <input type="radio" value="all" id="all" name="stock">
          <label class="ml-2" for="all">All</label>
          <br>
          <input type="radio" value="In stock" id="instock" name="stock">
          <label class="ml-2" for="instock">
            In
            stock
          </label>
          <br>
          <input type="radio" value="Out of stock" id="outofstock" name="stock">
          <label class="ml-2" for="outofstock">
            Out
            of stock
          </label>
        </fieldset>
      </span>
      
      <span>
        <h5 class="mt-2">Matched products</h5>
        <input class="inputText" type="text" placeholder="Type product name">
      </span>

      <br>
      <div class="text-center">
        <button class="mt-2 mb-1 btn-search">Search</button>
        <br>
        <button class="mb-3 btn-clear">clear</button>
      </div>
    </div>
  </div>
</template>