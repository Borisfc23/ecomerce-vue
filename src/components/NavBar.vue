<template>
  <v-app-bar app color="white" flat class="pl-3">
    <v-badge color="#d5f0db" dot>
      <v-img src="/1.png" cover width="30"></v-img>
    </v-badge>
    <v-toolbar-title class="ml-1">
      <router-link to="/" style="text-decoration: none; font-size: 25px">
        <strong class="text-green">E</strong
        ><strong style="color: black">Comerce</strong>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-badge color="#ff6d59" :content="quantityFavorite" class="mr-2 mt-1">
      <v-avatar color="#fff0ee" size="40">
        <v-icon size="x-small" color="#FF6D59">fas fa-heart</v-icon>
      </v-avatar>
    </v-badge>
    <v-badge color="#41AB55" :content="quantityCart" class="mr-2 mt-1">
      <v-avatar
        color="#fff0ee"
        size="40"
        @click="viewCart"
        class="cursor-pointer"
      >
        <v-icon size="x-small" color="#41AB55">fas fa-shopping-cart</v-icon>
      </v-avatar>
    </v-badge>
    <!-- <span class="text-grey d-none d-sm-flex">Hello<strong> </strong></span>
    <v-avatar size="30" class="ml-2 mt-1">
      <v-img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
      ></v-img>
    </v-avatar> -->
    <v-btn icon dark class="mt-1" @click.stop="drawer = !drawer">
      <v-icon size="x-small" color="#878a94"
        >fas fa-chevron-{{ drawer ? "up" : "down" }}</v-icon
      >
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-btn
      flat
      class="d-flex align-center justify-start"
      v-for="item in items"
      :key="item.title"
      :to="item.path"
    >
      <v-icon class="mr-2" dark>{{ item.icon }}</v-icon> {{ item.title }}
    </v-btn>
  </v-navigation-drawer>
</template>
<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import router from "../router";
import peticiones from "../store/index";
const store = peticiones();

const quantityCart = computed(() => {
  return store.cart.length;
});
const quantityFavorite = computed(() => {
  return store.products.filter((item: any) => item.favorite == true).length;
});
const drawer = ref(false);
const group = ref(null);
const items = [
  { title: "Shops", path: "/shops", icon: "fas fa-store" },
  { title: "Login", path: "/login", icon: "fas fa-user" },
];
const viewCart = () => {
  router.push("/cart");
};
watch(group, () => {
  drawer.value = false;
});
</script>
<style scoped>
.v-toolbar-title {
  font-size: 1rem;
}
</style>
