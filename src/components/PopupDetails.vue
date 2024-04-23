<template>
  <div style="background-color: white" class="popup">
    <div class="content-popup">
      <div class="content-popup-header">
        <div class="content-thanks">
          <v-icon icon="fas fa-check" size="x-small"></v-icon>
          <span style="font-weight: 800"> Thanks!</span>
        </div>
        <div class="content-x">
          <v-icon
            icon="fa-solid fa-x"
            style="font-size: 14px"
            class="cursor-pointer"
            @click="togglePopup"
          ></v-icon>
        </div>
      </div>
      <div class="content-product">
        <div class="content-product-img">
          <img :src="searchProduct.img" width="150px" />
        </div>
        <div class="content-product-desc">
          <p style="font-size: 18px; font-weight: 600">
            {{ searchProduct.title }}
          </p>
          <p>{{ searchProduct.price }} PEN</p>
          <p>{{ searchProduct.subtitle }}</p>
        </div>
      </div>
      <v-row class="ml-1">
        <v-col>
          <v-btn size="large" color="white" class="mt-3 mr-2" @click="goToCart">
            Cart</v-btn
          >
          <v-btn size="large" color="black" class="mt-3" @click="gotToCheckout">
            Finalize Purchase</v-btn
          ></v-col
        ></v-row
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import router from "../router";

const { searchProduct } = defineProps({
  searchProduct: { required: true, type: Object },
});
const emit = defineEmits(["togglePopup"]);
const togglePopup = () => {
  emit("togglePopup", false);
};
const goToCart = () => {
  router.push({ name: "cart" });
};
const gotToCheckout = () => {
  router.push({ name: "checkout" });
};
</script>
<style scoped>
/* STYLE POPUP */
.content-product {
  display: flex;
  padding-left: 20px;
}
.popup {
  position: fixed;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  right: 20px;
  z-index: 99999;
  height: 250px !important;
  width: 360px;
}
.content-popup-header {
  display: flex;
  padding: 20px 0 15px 20px;
  justify-content: space-between;
  position: relative;
}
.content-x {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
