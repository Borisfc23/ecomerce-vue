<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import router from "./router";
router;
onMounted(() => {
  router.push({ name: "home" });
});
</script>
