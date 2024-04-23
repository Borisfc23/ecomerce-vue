<template>
  <div
    :class="{ active: isActive }"
    style="background-color: white"
    class="popup"
  >
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
      <div class="content-product" style="padding-right: 5px">
        <div class="content-product-img" style="padding-right: 2px">
          <img :src="productPopup.img" width="128px" />
        </div>
        <div class="content-product-desc">
          <p style="font-size: 18px; font-weight: 600">
            {{ productPopup.title }}
          </p>
          <p style="font-size: 14px">{{ productPopup.price }} PEN</p>
          <p style="font-size: 13px">{{ productPopup.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import peticiones from "../store/index";
const store = peticiones();
//POP UP OFFERS
const productPopup = ref({});
const isActive = ref(false);

const viewsOffers = () => {
  isActive.value = true;
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  var numeroAleatorio = getRandomInt(1, 12);
  productPopup.value = store.products[numeroAleatorio];
  setTimeout(() => {
    isActive.value = false;
  }, 5000);
};
setInterval(viewsOffers, 30000);
//CLOSE POPUP
const togglePopup = () => {
  isActive.value = false;
};
</script>
<style scoped>
.active {
  left: 20px !important;
}
.content-product {
  display: flex;
  padding-left: 20px;
}
.popup {
  position: fixed;
  border: 1px solid rgba(0, 0, 0, 0.25);
  left: -350px;
  bottom: 20px;
  z-index: 99999;
  height: 140px !important;
  width: 350px;
  border-radius: 0.5rem;
  transition: 1s all ease-in-out;
}
.content-popup-header {
  display: flex;
  padding: 10px 0 5px 20px;
  justify-content: space-between;
  position: relative;
}
.content-x {
  position: absolute;
  top: 10px;
  right: 10px;
}
@media screen and (max-width: 500px) {
  .active {
    left: 5px !important;
  }
}
</style>
