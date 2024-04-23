<template>
  <div v-if="popup" class="content-overlay">
    <PopupDetails
      :searchProduct="searchProduct"
      :popup="popup"
      @togglePopup="togglePopup"
    />
  </div>
  <v-container fluid class="px-0">
    <!-- CONTENT DETAILS IMG-BUTTON -->
    <v-row class="d-flex flex-column align-center padding-content flex-md-row">
      <v-col md="7" cols="12">
        <v-row class="justify-center">
          <v-col cols="12" lg="9" md="12" sm="12">
            <img :src="searchProduct.img" width="100%" height="100%" cover />
          </v-col>
        </v-row>
      </v-col>
      <v-col md="5" cols="12">
        <v-row>
          <v-col cols="12" lg="8" md="12" sm="12">
            <v-subtitle>
              <span style="font-size: 14px; color: grey; font-weight: 400"
                >EComerce
              </span>
            </v-subtitle>
            <v-title>
              <h1>{{ searchProduct.title }}</h1>
            </v-title>
            <v-subtitle>
              <p style="font-size: 18px; font-weight: 400">
                {{ searchProduct.price }} PEN
              </p>
              <p style="font-size: 18px; font-weight: 400">
                {{ searchProduct.subtitle }}
              </p>
            </v-subtitle>
            <v-row class="mt-6">
              <v-col cols="5" class="">
                <div class="item-quantity">
                  <button class="btn-minus" @click="decrement">
                    <span> - </span>
                  </button>
                  <input type="text" value="1" v-model="bpm" />
                  <button class="btn-plus" @click="increment">
                    <span> + </span>
                  </button>
                </div>
              </v-col>
              <v-col cols="7" class="pl-1">
                <v-btn width="100%" size="x-large" @click="addToCart"
                  >Add to Cart</v-btn
                >
              </v-col>
            </v-row>
            <v-row class="">
              <v-col cols="12" class="py-0">
                <v-btn
                  width="100%"
                  color="black"
                  size="x-large"
                  @click="showCheckout"
                  >Buy Now</v-btn
                >
              </v-col>
            </v-row>
            <v-expansion-panels variant="accordion" class="mt-8" flat>
              <v-expansion-panel>
                <v-expansion-panel-title>
                  Shipping & Returns
                  <template v-slot:actions="{ expanded }">
                    <v-icon
                      size="x-small"
                      :icon="
                        expanded ? 'fa-solid fa-minus' : 'fa-solid fa-plus'
                      "
                    ></v-icon>
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <strong>LIMA:</strong><br /><br />
                  <ul style="margin-left: 1rem">
                    <li>
                      FREE: Regular shipping to all of Lima (1 to 3 business
                      days)
                    </li>
                    <li>FREE: Pick up in store (1 to 3 business days)</li>
                    <li>S/.20: Express Shipping (Same day delivery)</li>
                  </ul>
                  <br />
                  <strong>PROVINCE: </strong><br /><br />
                  <ul style="margin-left: 1rem">
                    <li>
                      FREE: Regular shipping to all of Peru (3 to 7 business
                      days)
                    </li>
                    <li>FREE: Pick up in store (3 to 7 business days)</li>
                  </ul>
                  <br />
                  <strong>EXCHANGES & RETURNS: </strong><br /><br />
                  <ul style="margin-left: 1rem">
                    <li>
                      Exchanges and returns can be made within a maximum of 7
                      days of receiving the package.
                    </li>
                    <li>Restrictions apply.</li>
                  </ul>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-divider :thickness="2"></v-divider>
              <v-expansion-panel>
                <v-expansion-panel-title>
                  Payment Methods
                  <template v-slot:actions="{ expanded }">
                    <v-icon
                      size="x-small"
                      :icon="
                        expanded ? 'fa-solid fa-minus' : 'fa-solid fa-plus'
                      "
                    ></v-icon>
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <ul style="margin-left: 1rem">
                    <li>We accept all types of credit/debit cards and more</li>
                  </ul>
                  <img src="/tarjetas.avif" alt="" width="100%" />
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-divider :thickness="2"></v-divider>
          </v-col> </v-row
      ></v-col>
    </v-row>
    <!-- SLIDER GROUP -->
    <v-row style="background-color: #f8f8f8; padding: 100px 90px">
      <v-title class="mb-10">
        <h2>You may also like:</h2>
      </v-title>
      <v-sheet class="mx-auto" elevation="3" max-width="100%">
        <v-slide-group
          v-model="model"
          class="pa-4"
          selected-class="bg-success"
          show-arrows
        >
          <v-slide-group-item
            v-for="item in SliderProduct"
            :key="item.id"
            v-slot="{ selectedClass }"
          >
            <v-card
              :class="['ma-4', selectedClass]"
              color="#E8E8E8"
              height="380"
              width="300"
              style="cursor: pointer"
              flat
              @click="viewDetailItem(item.id)"
            >
              <v-img
                class="align-end text-black"
                height="280"
                :src="item.img"
                content
              >
              </v-img>
              <v-card-title class="pt-4"> {{ item.title }} </v-card-title>
              <v-card-text>
                <div>
                  <h2 style="font-weight: 400">S/. {{ item.price }}</h2>
                </div>
              </v-card-text>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-row>
  </v-container>
  <pre>{{ product }}</pre>
</template>
<script lang="ts" setup>
import { Ref, computed, ref } from "vue";
import { IProduct } from "../interfaces/ProductInterface";
import { useRoute } from "vue-router";
import router from "../router";
import PopupDetails from "../components/PopupDetails.vue";
import peticiones from "../store/index";
const store = peticiones();

const route = useRoute();

const products: Ref<Array<any>> = ref([]);
products.value = store.products;
const searchProduct = computed(() => {
  return products.value.filter(
    (item: IProduct) => item.id === parseInt(route.params.id.toString())
  )[0];
});
const SliderProduct = computed(() => {
  return products.value.filter(
    (item: IProduct) => item.id !== parseInt(route.params.id.toString())
  );
});

// buttons plus and minus
const bpm = ref(1);
const decrement = () => {
  if (bpm.value > 1) {
    bpm.value--;
  }
};
const increment = () => {
  bpm.value++;
};
// view popup
const popup = ref(false);
const togglePopup = (val: boolean) => {
  popup.value = val;
};
const addToCart = () => {
  popup.value = true;
  // STORE ADD CART
  const product = searchProduct.value;
  const quantity = bpm.value;

  store.addToCart({ product, quantity });
};
//VIEW CHECKOUT
const showCheckout = () => {
  router.push({ name: "checkout" });
};
// SLIDER ITEMS
const model = ref(null);
const viewDetailItem = (id: number) => {
  router.push({ name: "details", params: { id: id } });
  bpm.value = 1;
};
</script>
<style scoped>
/* STYLE ACTION BUTTONS QUANTITY */
.item-quantity input {
  width: 100%;
  text-align: center;
  background: #fff;
  color: #000;
  border: none;
  color: inherit;
  padding: 0.7em 0;
  max-width: 100%;
}
.item-quantity .btn-plus span {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  line-height: 1em;
  font-weight: 500;
  color: black;
  font-size: 20px;
  font-family: Tahoma;
  margin-top: calc(-0.5em - 1px);
  text-align: center;
}

.item-quantity .btn-minus span {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  line-height: 1em;
  margin-top: calc(-0.5em - 1px);
  font-weight: 500;
  color: black;
  font-size: 20px;
  font-family: Tahoma;
}
.item-quantity .btn-plus {
  position: absolute;
  top: 0;
  height: 100%;
  text-align: center;
  width: 44px;
  right: 0;
  text-decoration: none;
  cursor: pointer;
}
.item-quantity .btn-minus {
  cursor: pointer;
  position: absolute;
  top: 0;
  height: 100%;
  text-align: center;
  width: 44px;
  left: 0;
  text-decoration: none;
}
.item-quantity {
  display: block;
  width: 100%;
  position: relative;
  padding: 3px 44px;
  background: #fff;
  color: #000;
  border: 1px solid #bfbfbf;
  overflow: hidden;
}
.content-overlay {
  background: #0000004d;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  transition: 0.4s all ease-in-out;
}
.padding-content {
  padding: 50px 90px !important;
}
@media screen and (max-width: 900px) {
  .padding-content {
    padding: 50px 50px !important;
  }
}
@media screen and (max-width: 500px) {
  .padding-content {
    padding: 0 20px !important;
  }
}
</style>
