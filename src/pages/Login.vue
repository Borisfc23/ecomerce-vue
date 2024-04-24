<template>
  <div height="100vh" class="mt-15">
    <v-card class="mx-auto pa-sm-8 pa-5 border login" rounded="lg">
      <v-title class="text-center">
        <h1 class="title-login">Login</h1>
      </v-title>
      <div class="text-subtitle-1 mt-8 text-medium-emphasis">Account</div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="fas fa-envelope"
        variant="outlined"
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
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card class="mb-12" color="surface-variant" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, you account will
          be temporarily locked for three hours. If you must login now, you can
          also click "Forgot login password?" below to reset the login password.
        </v-card-text>
      </v-card>

      <v-btn class="mb-8" color="green" size="large" variant="tonal" block>
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <router-link
          class="text-green text-decoration-none"
          :to="{ name: 'register' }"
          rel="noopener noreferrer"
        >
          Sign up now <v-icon icon="fas fa-angle-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
const visible = ref(false);
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
<style scoped>
.title-login::after {
  width: 40px;
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
