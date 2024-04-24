<template>
  <div height="100vh" class="mt-15">
    <v-card class="mx-auto pa-sm-8 pa-5 border login" rounded="lg">
      <v-title class="text-center">
        <h1 class="mb-3 title-register">Register</h1>
      </v-title>
      <div class="text-subtitle-1 mt-8 text-medium-emphasis">Name</div>

      <v-text-field
        density="compact"
        placeholder="Full Name"
        prepend-inner-icon="fas fa-user"
        variant="outlined"
        required
      ></v-text-field>
      <div class="text-subtitle-1 text-medium-emphasis">Lastname</div>

      <v-text-field
        density="compact"
        placeholder="Full Lastname"
        prepend-inner-icon="fas fa-user"
        variant="outlined"
        required
      ></v-text-field>
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="fas fa-envelope"
        variant="outlined"
        required
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Password
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'fas fa-eye' : 'fas fa-eye-slash'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="fas fa-lock"
        variant="outlined"
        required
        @click:append-inner="visible = !visible"
      ></v-text-field>
      <v-alert
        v-if="created"
        text="Account Created Successfully!"
        title="Success"
        class="mb-5"
        type="success"
      ></v-alert>
      <v-btn
        class="mb-8 text-center"
        color="green"
        size="large"
        variant="tonal"
        block
        @click="
          () => {
            created = true;
          }
        "
      >
        Create
      </v-btn>

      <v-card-text class="text-center">
        <router-link
          class="text-green text-decoration-none"
          :to="{ name: 'home' }"
        >
          Back Shop<v-icon icon="fas fa-angle-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const created = ref(false);
const visible = ref(false);
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
<style scoped>
.title-register::after {
  width: 55px;
  content: "";
  display: block;
  margin: 0.18em auto 0;
  border-top: 3px solid black;
  transition: width 1.2s cubic-bezier(0.13, 0.88, 0.62, 1) 0.7s;
}
@media screen and (max-width: 470px) {
  .login {
    width: 320px;
  }
}
@media screen and (min-width: 471px) {
  .login {
    width: 450px;
  }
}
</style>
