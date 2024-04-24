<template>
  <!-- REST COMPONENTS -->
  <Header />
  <!-- CATEGORY COMPONENT -->
  <v-toolbar flat color="transparent padding-content">
    <v-toolbar-title class="text-sm-h5 text-xs-h6 font-weight-medium mx-0"
      >Category</v-toolbar-title
    >
    <v-btn-toggle v-model="toggle_exclusive" group color="#49d9a0">
      <v-btn>
        <v-icon>fa-solid fa-chevron-left</v-icon>
      </v-btn>
      <v-btn class="">
        <v-icon>fa-solid fa-chevron-right</v-icon>
      </v-btn>
    </v-btn-toggle>
  </v-toolbar>
  <Category />
  <!-- POPULAR PRODUCT COMPONENT -->
  <v-toolbar flat color="transparent" class="mt-5 padding-content">
    <v-toolbar-title class="text-sm-h5 text-xs-h6 font-weight-medium mx-0"
      >Popular Product</v-toolbar-title
    >
    <v-btn rounded color="green" dark class="mx-0">See</v-btn>
  </v-toolbar>
  <Product />
  <v-card flat color="#E2F2E5" class="rounded-xl mt-5 pb-12">
    <v-toolbar falt color="transparent" class="mb-4 padding-content">
      <v-toolbar-title
        class="text-sm-h5 text-xs-h6 font-weight-medium mt-5 mx-0"
        >Popular Bundle Pack</v-toolbar-title
      >
    </v-toolbar>
    <Pack />
  </v-card>
  <!-- CLIENT COMPONENT -->
  <v-card flat color="#fafafa" class="py-12 px-sm-16 px-3">
    <v-title class="text-center">
      <h2>What our client Say</h2>
    </v-title>
  </v-card>
  <Client />

  <v-toolbar flat color="transparent" class="mt-8 padding-content">
    <v-toolbar-title class="text-sm-h5 text-xs-h6 font-weight-medium mx-0"
      >Our Trusted Partner</v-toolbar-title
    >
  </v-toolbar>
  <Partner />
  <Download />
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import Category from "../components/Category.vue";
import Product from "../components/Product.vue";
import Pack from "../components/Pack.vue";
import Client from "../components/Client.vue";
import Partner from "../components/Partner.vue";
import Download from "../components/Download.vue";
import Header from "../components/Header.vue";
const toggle_exclusive = ref(0);

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
<style scoped>
/* STYLE INDEX */
.padding-content {
  padding: 0 90px !important;
}
.marginLeft {
  margin-left: -90px;
}

.mtop {
  margin-top: 100px;
}

.mtop-2 {
  margin-top: 170px;
}

.mbottom {
  margin-bottom: 100px;
}

.v-card.borderme {
  border: 2px solid green !important;
}

.v-card.borderout {
  border: 1px solid #d5f0db !important;
}

.v-btn:not(.v-btn--round).v-size--default.add {
  min-width: 0px !important;
}

.theme--light.v-sheet--outlined.mobile {
  border: 2px solid black !important;
}

@media only screen and (max-width: 600px) {
  h2.title1 {
    font-size: 15px;
  }

  h2.title2 {
    font-size: 15px;
  }

  .top {
    margin-top: 20px;
  }
}

@media only screen and (min-width: 600px) {
  .top {
    margin-top: 70px;
  }
}
@media screen and (max-width: 900px) {
  .padding-content {
    padding: 0px 50px !important;
  }
}
@media screen and (max-width: 500px) {
  .padding-content {
    padding: 0 20px !important;
  }
}
@media only screen and (min-width: 768px) {
  .top {
    margin-top: 120px;
  }
}
</style>
