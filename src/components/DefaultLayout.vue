<template>
  <NavBar />
  <v-app>
    <div>
      <v-row>
        <v-col cols="12" class="px-0">
          <main>
            <!-- popup -->
            <div>
              <Popup />
            </div>
            <router-view />
          </main>
        </v-col>
      </v-row>
    </div>
  </v-app>
  <Footer />
</template>
<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { ref } from "vue";
</script>
<style></style>
