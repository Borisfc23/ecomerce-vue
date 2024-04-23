<template>
  <v-card
    variant
    v-for="(item, index) in shops"
    :key="index"
    class="border-t-sm border-b-sm px-1 cursor"
    @click="toggleActive(index)"
  >
    <v-card-title>
      <h4 class="text-center text-space">{{ item.name }}</h4>
    </v-card-title>
    <v-card-subtitle class="mb-1 px-0 padding-content">
      <p class="text-space text-black">{{ item.address }}</p>
      <p class="mt-3">
        <span :class="item.state.val ? 'text-green' : ''">Abierto: </span
        >{{ item.state.text }}
      </p>
    </v-card-subtitle>
    <v-card-subtitle
      class="mx-0 mb-2 px-0 padding-content"
      :class="active[index] ? 'aparecer' : 'desaparecer'"
    >
      <h4 class="text-black my-3">Information</h4>
      <p class="text-space">{{ item.information }}</p>
      <h4 class="text-black my-3">Phone</h4>
      <p class="text-space">{{ item.phone }}</p>
      <h4 class="text-black my-3">Shedule</h4>
      <ul>
        <li v-for="(shedule, inde) in item.schedule" :key="inde">
          {{ shedule.day }} : {{ shedule.hours }}
        </li>
      </ul>
    </v-card-subtitle>
  </v-card>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
const emit = defineEmits(["info"]);
const { shops } = defineProps({ shops: { required: true, type: Array } });
const active = ref<boolean[]>(new Array(4).fill(false));
function toggleActive(index: number) {
  active.value = active.value.map((val, idx) => (idx === index ? !val : false));
  emit("info", shops[index]);
}
onMounted(() => {
  active.value[0] = true;
  emit("info", shops[0]);
});
</script>
<style scoped>
.text-space {
  width: 100%;
  white-space: pre-line;
  margin-bottom: 0.2rem;
}
.text-green {
  color: #41ab55;
  font-weight: 700;
}
.cursor {
  cursor: pointer;
}
.desaparecer {
  height: 0;
}
.aparecer {
  height: 100%;
}
.padding-content {
  padding: 0 10px !important;
}
</style>
