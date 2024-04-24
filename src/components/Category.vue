<template>
  <v-item-group mandatory class="mt-1">
    <v-container fluid s>
      <v-row justify-center class="space padding-content">
        <v-col
          lg="2"
          cols="12"
          sm="4"
          md="3"
          v-for="(item, index) in categories"
          :key="index"
        >
          <v-item>
            <v-card
              :color="active[index] ? '#D5F0DB' : 'white'"
              :class="active[index] ? 'borderme' : 'borderout'"
              class="d-flex align-center rounded-lg mx-2"
              height="180"
              elevation="3"
              @click="toggleActive(index)"
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line class="text-center">
                    <v-list-item>
                      <div align="center" justify="center">
                        <v-img
                          :src="item.img"
                          max-height="80"
                          max-width="80"
                          cover
                        ></v-img>
                      </div>
                      <v-list-item-subtitle
                        :class="active[index] ? 'text-green' : 'text-black'"
                        class="cation mt-4"
                      >
                        {{ item.title }}
                      </v-list-item-subtitle>
                    </v-list-item>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>
<script setup lang="ts">
import { Ref, ref } from "vue";
import { ICategories } from "../interfaces/CategoryInterface";
const active = ref<boolean[]>(new Array(6).fill(false));
function toggleActive(index: number) {
  active.value = active.value.map((val, idx) => (idx === index ? !val : false));
}
const categories: Ref<Array<ICategories>> = ref<Array<ICategories>>([
  { img: "ecomerce-vue/01.png", title: "Meat & Fish" },
  { img: "ecomerce-vue/02.png", title: "Vegetables" },
  { img: "ecomerce-vue/3.png", title: "Medicine" },
  { img: "ecomerce-vue/4.png", title: "Baby" },
  { img: "ecomerce-vue/5.png", title: "Office" },
  { img: "ecomerce-vue/6.png", title: "Beauty" },
]);
</script>
<style scoped>
.padding-content {
  padding: 0 90px !important;
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
</style>
