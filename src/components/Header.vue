<template>
  <v-card class="mx-auto rounded-b-xl header" color="#d5f0db">
    <div class="header-content">
      <div class="header-section padding-content">
        <v-card-title class="hidden pl-0">
          <h1 class="title1 d-none d-sm-flex">Order your</h1>
        </v-card-title>
        <v-card-title class="mt-sm-8 pl-0">
          <h2 class="title2">Daily Groceries</h2>
        </v-card-title>
        <v-card-text class="pl-0">
          <h3 class="text-green">#Free Delivery</h3>
        </v-card-text>
        <v-card-text>
          <v-row class="pl-0">
            <v-col md="11" xs="12" class="pb-0 pl-0 pr-0">
              <v-text-field
                clearable
                label="Search your daily groceries"
                prepend-inner-icon="fa-solid fa-magnifying-glass"
                rounded
                flat
                bg-color="white"
                variant="solo"
                color="success"
                v-model="filtro"
                @input="searchProduct"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row class="pt-0 mt-0" style="position: relative">
            <v-col
              v-if="productsFiltrados.length > 0"
              class="content-search-products pt-0 px-0 pb-0"
              md="11"
              xs="12"
              style="background-color: white"
            >
              <div
                v-for="(item, index) in productsFiltrados"
                :key="index"
                class="content-search-flex"
                @click="goToDetails(item.id)"
              >
                <div>
                  <img :src="item.img" width="80px" class="mr-3" />
                </div>
                <div class="content-text-search">
                  <p class="title-search-product">
                    {{ item.title }}
                  </p>
                  <p class="subtitle-search-product">
                    {{ item.subtitle }}
                  </p>
                  <span class="price-search-product">S/.{{ item.price }}</span>
                </div>
              </div>
            </v-col>
            <v-col
              v-if="productsFiltrados.length == 0 && filtro"
              class="content-search-noproducts pt-0 px-0 pb-0"
              md="11"
              xs="12"
              style="background-color: white"
            >
              <p class="font-weight-medium">The product does not exist</p>
            </v-col>
          </v-row>
        </v-card-text>
      </div>
      <div class="header-section-img">
        <img src="/header-img.jpg" alt="" />
      </div>
    </div>
  </v-card>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import peticiones from "../store/index";
import router from "../router/index";
const store = peticiones();

const filtro = ref("");
const searchProduct = () => {
  filtro.value = filtro.value.toLowerCase();
};

const productsFiltrados = computed(() => {
  if (filtro.value != "") {
    return store.products.filter((item: any) =>
      item.title !== "" ? item.title.toLowerCase().includes(filtro.value) : []
    );
  } else {
    return [];
  }
});
const goToDetails = (id: number) => {
  router.push({ name: "details", params: { id: id } });
};
</script>
<style scoped>
.content-search-products::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.content-search-products::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

/* ESTILO HEADER */
.content-search-noproducts {
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}
.content-search-products {
  height: 85px;
  width: 100%;
  position: absolute;
  overflow-y: scroll;
  border-radius: 0.3rem;
}
.content-text-search {
  padding: 8px 0;
}
.title-search-product {
  font-weight: 700;
  font-size: 12px;
}
.subtitle-search-product {
  font-size: 13px;
}
.price-search-product {
  font-weight: 800;
  font-size: 13px;
}
.content-search-flex {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(0, 0, 0, 0.23);
  cursor: pointer;
  padding-left: 12px;
}
.content-search-flex:hover {
  background-color: rgb(0, 0, 0, 0.03);
}
.header-content {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
}
.header {
  overflow: visible;
  z-index: 1;
}
.header-section {
  width: 40%;
  height: 100%;
}

.header-section-img {
  width: 60%;
  height: 500px;
  position: relative;
}

.header-section .section-wave {
  position: absolute;
  bottom: 0;
  top: 0;
}

.header-section-img img {
  clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 13% 51%, 0% 0%);
  height: 500px;
  width: 100%;
  object-fit: cover;
}
.padding-content {
  padding: 0 0px 0 90px !important;
}
@media screen and (max-width: 980px) {
  .header-content {
    flex-direction: column-reverse;
  }

  .hidden {
    display: none;
  }
  .padding-content {
    padding: 0 90px 0 90px !important;
  }
  .header-section,
  .header-section-img {
    width: 100%;
  }

  .header-section-img {
    height: 320px;
  }

  .header-section-img img {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 89%, 0 100%);
    height: 100%;
  }
}
@media screen and (max-width: 900px) {
  .padding-content {
    padding: 0 50px !important;
  }
}
@media screen and (max-width: 500px) {
  .padding-content {
    padding: 0 20px !important;
  }
}

@media screen and (max-width: 680px) {
  .header-section-img {
    height: 250px;
  }
}
</style>
