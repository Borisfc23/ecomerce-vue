<template>
  <div id="mapContainer"></div>
</template>
<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  ref,
  onMounted,
  onBeforeUnmount,
  defineProps,
  onUpdated,
  Ref,
} from "vue";

const map: Ref<any> = ref(null);

const prop = defineProps({
  infoShop: { required: true, type: Object },
});

onMounted(() => {
  map.value = L.map("mapContainer", { zoomControl: false }).setView(
    [-12.02929, -77.0140168],
    12
  );
  L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(map.value);
  //use a mix of renderers
  var customPane = map.value.createPane("customPane");
  customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400
  L.marker([-11.99435, -77.06392]).addTo(map.value);
  L.marker([-12.00822, -77.059142]).addTo(map.value);
  L.marker([-12.0155848, -76.99532]).addTo(map.value);
  L.marker([-12.056651, -76.96926]).addTo(map.value);
});
onUpdated(() => {
  if (prop.infoShop.id === 1) {
    L.marker([-11.99435, -77.06392])
      .addTo(map.value)
      .bindPopup(
        `<h5>${prop.infoShop.name}</h5><p>${prop.infoShop.address}</p>`
      )
      .openPopup();
  }
  if (prop.infoShop.id === 2) {
    L.marker([-12.00822, -77.059142])
      .addTo(map.value)
      .bindPopup(
        `<h5>${prop.infoShop.name}</h5><p>${prop.infoShop.address}</p>`
      )
      .openPopup();
  }
  if (prop.infoShop.id === 3) {
    L.marker([-12.0155848, -76.99532])
      .addTo(map.value)
      .bindPopup(
        `<h5>${prop.infoShop.name}</h5><p>${prop.infoShop.address}</p>`
      )
      .openPopup();
  }
  if (prop.infoShop.id === 4) {
    L.marker([-12.056651, -76.96926])
      .addTo(map.value)
      .bindPopup(
        `<h5>${prop.infoShop.name}</h5><p>${prop.infoShop.address}</p>`
      )
      .openPopup();
  }
}),
  onBeforeUnmount(() => {
    if (map) {
      map.value.remove();
    }
  });
</script>
<style>
#mapContainer {
  width: 100%;
  height: 100vh;
}
</style>
