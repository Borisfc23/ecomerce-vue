<template>
  <v-row class="px-sm-16 mt-10 px-9">
    <v-col cols="3" v-for="(item, index) in partners" :key="index">
      <div align="center" justify="center">
        <v-img :src="item.img" max-height="80" max-width="80" cover></v-img>
      </div>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
import { Ref, ref } from "vue";
import { IPartner } from "../interfaces/PartnerInterface";
const partners: Ref<Array<IPartner>> = ref<Array<IPartner>>([
  { img: "airbnb.png" },
  { img: "adidas.png" },
  { img: "swords.png" },
  { img: "castle.png" },
]);
</script>
<style lang="css" scoped>
@media screen and (max-width: 500px) {
  .padding-content {
    padding: 0 30px;
  }
}
</style>
