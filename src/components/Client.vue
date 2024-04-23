<template>
  <v-container fluid class="padding-content" style="background-color: #fafafa">
    <v-row class="mb-5">
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="4"
        v-for="(item, index) in clients"
        :key="index"
      >
        <v-card class="elevation-3 mx-auto">
          <v-list subheader lines="two">
            <v-list-item class="">
              <template v-slot:prepend>
                <v-avatar :image="item.img"> </v-avatar>
              </template>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
          <v-card-text>
            <div>
              <v-rating
                v-model="rating"
                color="yellow darken-1"
                density="comfortable"
                half-increments
                hover
                size="small"
              ></v-rating>
            </div>
            {{ item.bio }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import { Ref, ref } from "vue";
import { IClient } from "../interfaces/ClientInterface";
const rating = ref(3);
const clients: Ref<Array<IClient>> = ref<Array<IClient>>([
  {
    img: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    title: "Kareem Benji",
    subtitle: "CPO on Maqua",
    bio: "If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. It really helps!",
  },
  {
    img: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    title: "AAE IdeaPro",
    subtitle: "CPO on Maqua",
    bio: "If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. It really helps!",
  },
  {
    img: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    title: "Raul Seem ",
    subtitle: "CPO on Maqua",
    bio: "If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. It really helps!",
  },
]);
</script>
<style scoped>
@media screen and (max-width: 500px) {
  .padding-content {
    padding: 0 30px;
  }
}
</style>
