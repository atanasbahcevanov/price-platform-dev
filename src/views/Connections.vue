<template>
  <div class="connections">
    <UserHeader/>
    <div class="container mt-2 p-3">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-12 col-12 p-lg-0 p-md-0 p-sm-3 p-3">

        </div>

        <div class="col-lg-9 col-md-9 col-sm-12 col-12">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserHeader from "@/components/Header.vue";

export default {
  name: "connection",
  components: {
    UserHeader
  }
};
</script>