<template>
    <div flat style="background-color: #e2f2e5;" class="rounded-xl mbottom mtop-2 pa-4 ">
        <div class="content-app-mobile">
            <div class="column-app-mobile">
                <div class="rounded-xl content-img">
                    <img src="/mobile2.png" class="rounded-xl"></img>
                </div>
            </div>
            <div class="column-app-mobile py-lg-15 py-md-5 py-1">
                <h1>Download App</h1>
                <p class="mb-5 mt-2 hidden">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nam doloremque cum, minus
                    aspernatur soluta praesentium dolores numquam harum perspiciatis necessitatibus tempore veniam
                    excepturi. Blanditiis odio eaque cum ab! Quaerat ipsum magni voluptates, ad sequi at repudiandae
                    unde
                    blanditiis autem.
                </p>
                <v-btn color="black" dark class="button-download ml-1">
                    <v-icon color="white" left>fab fa-apple</v-icon>
                    App Store
                </v-btn>
                <v-btn color="black" dark class="ml-sm-4 ml-1 button-download">
                    <v-icon color="white" left>fab fa-google-play</v-icon>
                    Play Store
                </v-btn>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style scoped>
.content-app-mobile {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.column-app-mobile {
  width: 45%;
  position: relative;
}

.column-app-mobile .content-img {
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translate(-50%);
  border: 2.8px solid black;
}
@media screen and (max-width: 400px) {
  .button-download {
    margin: 0.5rem 0;
  }
  .hidden {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .content-app-mobile {
    flex-direction: column;
    height: 100%;
    align-items: center;
  }

  .column-app-mobile {
    width: 95%;
    position: relative;
  }

  .column-app-mobile .content-img {
    position: relative;
    top: 0;
    display: flex;
    justify-content: center;
    border: none;
    margin-top: 1rem;
  }

  .column-app-mobile .content-img img {
    border: 2.8px solid black;
    margin-bottom: 1rem;
  }
}

</style>