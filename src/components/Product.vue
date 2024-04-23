<template>
  <v-container fluid>
    <v-row
      justify="between"
      class="padding-content"
      style="margin-bottom: 10px"
    >
      <v-col
        cols="6"
        sm="6"
        md="3"
        lg="2"
        v-for="(product, index) in products"
        :keys="product.id"
      >
        <v-card
          class="mx-auto rounded-xl py-4"
          max-width="300"
          flat
          variant="outlined"
        >
          <div align="center" class="content-img-product" justify="center">
            <v-img
              :src="product.img"
              max-height="300"
              max-width="300"
              cover
              class="img-product"
            ></v-img>
            <div class="content-heart">
              <v-icon
                :icon="
                  product.favorite == true
                    ? 'fas fa-heart'
                    : 'fa-regular fa-heart'
                "
                color="red"
                size="small"
                @click="toggleActive(index)"
              ></v-icon>
            </div>
          </div>
          <v-card-title class="text-center title-product">{{
            product.title
          }}</v-card-title>
          <v-row class="d-flex justify-space-around">
            <v-card-title class="text-grey-darken-1 mt-6 subtitle-product">{{
              product.subtitle
            }}</v-card-title>
            <v-card-title class="mt-6 text-green-darken-1 price-product"
              >S/.{{ product.price }}</v-card-title
            >
          </v-row>
          <v-row class="justify-center mt-7 mb-1 content-button">
            <v-btn color="green" @click="goDetails(product.id)">Show Now</v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import { Ref, ref } from "vue";
import { IProduct } from "../interfaces/ProductInterface";
import router from "../router";
import peticiones from "../store/index";
const store = peticiones();

const products: Ref<Array<IProduct>> = ref<Array<IProduct>>(
  store.products.filter((item: IProduct) => item.id < 7)
);
const goDetails = (id: number) => {
  router.push({ name: "details", params: { id: id } });
};
//FAVORITE
const toggleActive = (index: number) => {
  store.addFavorite(index + 1);
};
</script>
<style scoped>
.padding-content {
  padding: 0 90px !important;
}
.content-img-product {
  position: relative;
}
.content-heart {
  position: absolute;
  right: 10px;
  top: -8px;
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
  .title-product {
    font-size: 17px;
    padding-top: 0;
    margin-top: 0 !important;
  }
  .subtitle-product {
    font-size: 15px;
    padding-top: 0;
    margin-top: 0 !important;
    width: 90px;
    text-overflow: ellipsis;
  }
  .price-product {
    font-size: 16px;
    padding-top: 0;
    margin-top: 0 !important;
  }
  .content-button {
    margin-top: 16px !important;
  }
  .img-product {
    width: 90% !important;
  }
}
</style>
