<template>
  <v-row class="mx-0 mb-5 flex-column flex-sm-row">
    <v-col lg="3" md="4" sm="5" xs="12">
      <v-card-title>
        <h2 class="title2 text-center">Our Shops</h2>
      </v-card-title>
      <v-card-subtitle class="px-1">
        <p class="mb-3 padding-content">Find your nearest store</p>
        <v-text-field
          label="Search your city"
          prepend-inner-icon="fa-solid fa-magnifying-glass"
          rounded
          flat
          variant="outlined"
          @input="searchShop"
          v-model="filtro"
          class="padding-content"
        >
        </v-text-field>
      </v-card-subtitle>
      <CardShop :shops="shopsFiltrados" @info="viewInfo" />
      <v-card-subtitle v-if="!shopsFiltrados.length"
        >There are no stores in that location</v-card-subtitle
      >
    </v-col>
    <v-col lg="9" md="8" sm="7" xs="12" class="mx-0 px-0">
      <Map :infoShop="infoShopFat"></Map>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import Map from "../components/Map.vue";
import CardShop from "../components/CardShop.vue";
import { computed, ref } from "vue";

const infoShopFat = ref("");

const shops = [
  {
    id: 1,
    name: " MEGA PLAZA",
    address:
      "Mega Plaza, Av. Globo Terráqueo 3698, Independencia 15311, Perú, Lima, Lima, Perú",
    phone: "954136186",
    information:
      "Encuentra tus prendas y accesorios favoritos en  MEGA PLAZA NORTE.",
    state: { val: true, text: "Cierra a las 10:00pm" },
    schedule: [
      { day: "Lunes - Viernes", hours: "9:00am - 10:00pm" },
      { day: "Sábado - Domingo", hours: "10:00am - 8:00pm" },
    ],
  },
  {
    id: 2,
    name: " PLAZA NORTE",
    address: "Av. Tomas Valle, Independencia 15311, Perú, Lima, Lima, Perú",
    phone: "954136186",
    information:
      "Encuentra tus prendas y accesorios favoritos en  MEGA PLAZA NORTE.",
    state: { val: true, text: "Cierra a las 10:00pm" },
    schedule: [
      { day: "Lunes - Viernes", hours: "9:00am - 10:00pm" },
      { day: "Sábado - Domingo", hours: "10:00am - 8:00pm" },
    ],
  },
  {
    id: 3,
    name: " AVENTURA SAN JUAN DE LURIGANCHO",
    address:
      "Av. Lurigancho Cdra. 9, San Juan de Lurigancho 15427, Lima, Lima, Perú",
    phone: "954136186",
    information:
      "Encuentra tus prendas y accesorios favoritos en  MEGA PLAZA NORTE.",
    state: { val: true, text: "Cierra a las 10:00pm" },
    schedule: [
      { day: "Lunes - Viernes", hours: "9:00am - 10:00pm" },
      { day: "Sábado - Domingo", hours: "10:00am - 8:00pm" },
    ],
  },
  {
    id: 4,
    name: " MALL AVENTURA SANTA ANITA",
    address: "Av. Nicolás Ayllón, Santa Anita 15008, Perú, Lima, Lima, Perú",
    phone: "954136186",
    information:
      "Encuentra tus prendas y accesorios favoritos en  MEGA PLAZA NORTE.",
    state: { val: true, text: "Cierra a las 10:00pm" },
    schedule: [
      { day: "Lunes - Viernes", hours: "9:00am - 10:00pm" },
      { day: "Sábado - Domingo", hours: "10:00am - 8:00pm" },
    ],
  },
];

const filtro = ref("");
const shopsFiltrados = computed(() => {
  return shops.filter(
    (item) =>
      item.name.toLowerCase().includes(filtro.value) ||
      item.address.toLowerCase().includes(filtro.value)
  );
});
const searchShop = () => {
  filtro.value = filtro.value.toLowerCase();
};

const viewInfo = (msg: string) => {
  infoShopFat.value = msg;
};
</script>

<style scoped>
.padding-content {
  padding: 0 10px !important;
}
</style>
