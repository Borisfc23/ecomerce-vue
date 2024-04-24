<template>
  <v-container fluid class="px-0 py-0">
    <v-row class="flex-column flex-lg-row" style="">
      <!-- COLUMN FORM -->
      <v-col
        md="12"
        lg="6"
        class="mx-auto py-12 col-form"
        style="background-color: black"
      >
        <v-row class="justify-lg-end justify-center">
          <v-col xxl="8" xl="8" lg="10" md="10" sm="10" class="mr-md-4">
            <v-title>
              <h1 class="title-cart text-center text-white">E-Comerce</h1>
              <p class="text-subtitle text-center">
                <span class="text-orange-darken-4">Cart</span>
                <v-icon
                  icon="fas fa-angle-right"
                  class="text-grey mx-1"
                  size="x-small"
                ></v-icon
                ><span class="text-white">Information</span
                ><v-icon
                  icon="fas fa-angle-right"
                  class="text-grey mx-1"
                  size="x-small"
                ></v-icon
                ><span class="text-grey">Shipments</span
                ><v-icon
                  icon="fas fa-angle-right"
                  class="text-grey mx-1"
                  size="x-small"
                ></v-icon>
                <span class="text-grey">Pay</span>
              </p>
            </v-title>

            <v-row class="justify-center">
              <v-col cols="11" xl="12" xxl="12" lg="12" md="12" sm="12">
                <v-title>
                  <h2 class="text-white">Contact</h2>
                </v-title>
                <v-text-field
                  label="Email Address"
                  bg-color="white"
                  variant="solo"
                  class="my-0 py-0"
                ></v-text-field>
                <v-checkbox
                  label="Send me news and offers by email"
                  class="text-white"
                  color="orange-darken-4"
                  v-model="checkbox"
                ></v-checkbox>
                <v-title>
                  <h2 class="text-white">
                    Home address / Store name (Pick Up)
                  </h2>
                </v-title>
                <v-text-field
                  label="Country / Region"
                  bg-color="white"
                  variant="solo"
                ></v-text-field>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="Name"
                      bg-color="white"
                      variant="solo"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="Lastname"
                      bg-color="white"
                      variant="solo"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-text-field
                  label="DNI, CE or RUC"
                  bg-color="white"
                  variant="solo"
                ></v-text-field>
                <v-text-field
                  label="Address"
                  bg-color="white"
                  variant="solo"
                ></v-text-field>
                <v-text-field
                  label="References"
                  bg-color="white"
                  variant="solo"
                ></v-text-field>
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      label="City"
                      bg-color="white"
                      variant="solo"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4"
                    ><v-select
                      label="Select"
                      bg-color="white"
                      :items="[
                        'California',
                        'Colorado',
                        'Florida',
                        'Georgia',
                        'Texas',
                        'Wyoming',
                      ]"
                    ></v-select
                  ></v-col>
                  <v-col cols="4">
                    <v-text-field
                      label="District"
                      bg-color="white"
                      variant="solo"
                    ></v-text-field
                  ></v-col>
                </v-row>
                <v-text-field
                  label="Phone"
                  bg-color="white"
                  variant="solo"
                ></v-text-field>
                <v-checkbox
                  label="
              Save my information and refer to it more quickly next time"
                  class="text-white"
                  color="orange-darken-4"
                ></v-checkbox>
                <v-row>
                  <v-col
                    cols="12"
                    class="d-flex flex-sm-row justify-sm-space-between flex-column align-center"
                  >
                    <v-btn
                      size="large"
                      color="white"
                      class="mt-3 mr-4"
                      @click="goToCart"
                    >
                      <v-icon icon="fas fa-angle-left" size="xs"></v-icon> Back
                      to Cart</v-btn
                    >
                    <v-btn
                      size="large"
                      color="orange-darken-4"
                      class="mt-3"
                      @click="goToHome"
                    >
                      Continue Shipments</v-btn
                    >
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <!-- COLUMN LIST SHOPPING-->
      <v-col
        md="12"
        lg="6"
        class="py-12 col-cart"
        style="background-color: #fafafa"
      >
        <v-row class="justify-lg-start justify-center">
          <v-col xl="7" xxl="7" lg="10" md="7" sm="9" class="ml-md-4">
            <v-title>
              <h1 class="title-cart text-center title-list">Shopping List</h1>
            </v-title>
            <div class="mt-6">
              <table width="100%">
                <thead>
                  <th width="80%" style="text-align: left"></th>

                  <th width="20%"></th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in products" :key="index">
                    <td class="item-title">
                      <v-badge
                        color="blue-grey-darken-2"
                        :content="item.quantity"
                        class="mr-2 mt-1"
                        size="x-large"
                      >
                        <v-img
                          :src="item.img"
                          :width="100"
                          :height="90"
                        ></v-img>
                      </v-badge>
                      <div class="ml-3">
                        <p>{{ item.title }}</p>
                        <span class="text-grey">{{ item.subtitle }}</span>
                      </div>
                    </td>
                    <td class="text-sm-end text-lg-end text-xxl-end">
                      S/. {{ item.price * item.quantity }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="d-flex content-list">
              <v-text-field
                bg-color="white"
                label="Discount Code"
                variant="outlined"
                color="deep-orange-accent-3"
                class="mr-3"
              ></v-text-field>
              <v-btn size="x-large" color="grey-lighten-2">Apply</v-btn>
            </div>
            <div class="content-list">
              <v-row>
                <v-col cols="6">
                  <p>Subtotal</p>
                  <p class="my-1">Shipment</p>
                  <p>IGV(19%)</p>
                  <p class="text-h5 font-weight-bold my-1">Total</p>
                </v-col>
                <v-col cols="6" class="text-end">
                  <p>S/.{{ totalAcumulador }}</p>
                  <p class="my-1">Free</p>
                  <p>S/.{{ totalAcumulador * 0.19 }}</p>
                  <p class="text-h5 font-weight-bold my-1">
                    S/.{{ totalAcumulador + totalAcumulador * 0.19 }}
                  </p>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-col></v-row
    >
  </v-container>
</template>
<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import router from "../router";
import peticiones from "../store/index";
const store = peticiones();

const products = ref([]);

let totalAcumulador = ref(0);
watchEffect(() => {
  totalAcumulador.value = 0;
  products.value.map((item: any) => {
    totalAcumulador.value = item.quantity * item.price + totalAcumulador.value;
  });
});

onMounted(() => {
  products.value = store.cart;
  window.scrollTo(0, 0);
});

const goToCart = () => {
  router.push({ name: "cart" });
};
const goToHome = () => {
  router.push({ name: "home" });
};
const checkbox = ref(true);
</script>
<style scoped>
.title-list::after {
  width: 90px;
  content: "";
  display: block;
  margin: 0.18em auto 0;
  border-top: 3px solid black;
  transition: width 1.2s cubic-bezier(0.13, 0.88, 0.62, 1) 0.7s;
}
.text-subtitle {
  font-size: 13px;
}
.item-title {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 600px) {
  table,
  .content-list {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
