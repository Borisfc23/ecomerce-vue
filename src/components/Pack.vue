<template>
  <v-container fluid>
    <v-row
      justify="between"
      class="padding-content"
      style="padding-bottom: 30px"
    >
      <v-col
        cols="6"
        sm="6"
        md="3"
        lg="2"
        v-for="(item, index) in packs"
        :key="index"
      >
        <v-card
          class="mx-auto rounded-xl py-4"
          rounded="xl"
          max-width="300"
          flat
          variant="outlined"
        >
          <div align="center" justify="center">
            <div class="content-img-product">
              <v-img
                max-width="300"
                max-height="300"
                :src="item.img"
                cover
                class="img-product"
              ></v-img>
              <div class="content-heart">
                <v-icon
                  :icon="
                    item.favorite == true
                      ? 'fas fa-heart'
                      : 'fa-regular fa-heart'
                  "
                  color="red"
                  @click="toggleActive(item.id)"
                ></v-icon>
              </div>
            </div>
            <v-card-title class="text-center title-product">{{
              item.title
            }}</v-card-title>
            <v-row class="d-flex justify-space-around">
              <v-card-title
                class="text-grey-darken-1 mt-6 texto-space subtitle-product"
                >{{ item.subtitle }}</v-card-title
              >
              <v-card-title class="mt-6 text-green-darken-1 price-product"
                >S/. {{ item.price }}</v-card-title
              >
            </v-row>
            <v-row class="justify-center mt-7 mb-1 content-button">
              <v-btn color="green" @click="goDetails(item.id)">Show Now</v-btn>
            </v-row>
          </div>
        </v-card></v-col
      >
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import { IPack } from "../interfaces/PackInterface";
import router from "../router";
import peticiones from "../store/index";
const store = peticiones();
const packs = store.products.filter((item: IPack) => item.id > 6);
// VIEW DETAILS
const goDetails = (id: number) => {
  router.push({ name: "details", params: { id: id } });
};
//FAVORITE
const toggleActive = (id: number) => {
  store.addFavorite(id);
};
</script>
<style scoped>
.content-img-product {
  position: relative;
}
.content-heart {
  position: absolute;
  right: 10px;
  top: -8px;
}
.overflow-e {
  max-width: 300px;
}
.texto-space {
  width: 100%;
  white-space: pre-line;
}
.padding-content {
  padding: 0 90px !important;
}
@media screen and (max-width: 900px) {
  .padding-content {
    padding: 0px 50px !important;
  }
}
@media screen and (max-width: 500px) {
  .card-item {
    max-width: 350px;
  }
  .texto-space {
    width: 100%;
    white-space: nowrap;
  }
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
