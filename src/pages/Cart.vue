<template>
  <v-container>
    <v-row>
      <v-col xl="6" lg="7" md="11" class="mx-auto py-12">
        <v-title>
          <h1 class="title-cart text-center">Shopping Cart</h1>
        </v-title>
        <div class="table-cart mt-12">
          <table width="100%">
            <thead>
              <th width="50%" style="text-align: left">Producto</th>
              <th width="10%">Precio</th>
              <th width="30%">Cantidad</th>
              <th width="10%">Total</th>
            </thead>
            <tbody>
              <template v-if="products.length > 0">
                <tr v-for="(item, index) in products" :key="index">
                  <td class="item-title">
                    <img class="item-img" :src="item.img" alt="" />
                    <p>{{ item.title }}</p>
                  </td>
                  <td style="text-align: center">S/. {{ item.price }}</td>
                  <td>
                    <div class="content-quantity">
                      <div class="item-quantity">
                        <a class="btn-minus" @click="removeOneItem(item.id)"
                          ><span> - </span></a
                        >
                        <p>{{ item.quantity }}</p>
                        <!-- <input type="text" :value="item.quantity" readonly /> -->
                        <a class="btn-plus" @click="addToItem(item)"
                          ><span> + </span></a
                        >
                      </div>
                      <div class="item-trash">
                        <v-icon
                          class="icon-trash"
                          icon="fa-regular fa-trash-can"
                          @click="removeItem(item.id)"
                        >
                        </v-icon>
                      </div>
                    </div>
                  </td>
                  <td style="text-align: center">
                    S/. {{ item.price * item.quantity }}
                  </td>
                </tr>
              </template>
              <template v-else>
                <tr>
                  <td colspan="4" style="text-align: center; font-weight: 600">
                    Empty Shopping Cart
                  </td>
                </tr>
              </template>
            </tbody>
            <template v-if="products.length > 0">
              <tfoot>
                <tr class="row-foot">
                  <td colspan="2" class="col-foot-text">SubTotal</td>
                  <td colspan="2" class="col-foot-price">
                    S/{{ totalAcumulador }} PEN
                  </td>
                </tr>
              </tfoot>
            </template>
          </table>
        </div>
        <div class="my-10 text-center">
          <p>
            *On the payment screen the tax is included and shipping costs are
            calculated
          </p>
          <v-btn
            size="large"
            color="black"
            class="mt-3 mr-4"
            @click="goCheckout"
            >Finalize Order</v-btn
          >
          <v-btn size="large" class="mt-3" @click="goHome"
            >Continue Shopping</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>

  <pre>{{ totalAcumulador }}</pre>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref, watchEffect } from "vue";
import router from "../router";
import peticiones from "../store/index";
const store = peticiones();

const products = computed(() => {
  return store.cart;
});
let totalAcumulador = ref(0);

onMounted(() => {
  window.scrollTo(0, 0);
});

watchEffect(() => {
  totalAcumulador.value = 0;
  products.value.map((item: any) => {
    totalAcumulador.value = item.quantity * item.price + totalAcumulador.value;
  });
});
const goCheckout = () => {
  router.push({ name: "checkout" });
};
const goHome = () => {
  router.push({ name: "home" });
};

//REMOVE ITEM TO CART
const removeItem = (id: number) => {
  store.removeItemToCart(id);
};
//REMOVE ONE ITEM TO CART
const removeOneItem = (id: number) => {
  store.removeOneItem(id);
};
//ADD ONE MORE ITEM TO CART
const addToItem = (product: any) => {
  const quantity = product.quantity + 1;
  store.addToCart({ product, quantity });
};
</script>
<style scoped>
.table-cart th {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 0.5rem;
}
table {
  border-collapse: collapse;
}
.row-foot .col-foot-text,
.row-foot .col-foot-price {
  font-size: 22px;
  font-weight: 900;
}
.row-foot .col-foot-price {
  text-align: end;
}
.row-foot td {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
.content-quantity {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.icon-trash {
  opacity: 0.6;
  font-size: 20px;
}
td {
  padding: 12px 0;
}
.item-quantity input {
  width: 3em;
  text-align: center;
  background: #fff;
  color: #000;
  border: none;
  color: inherit;
  padding: 0.7em 0;
  max-width: 100%;
}
.item-quantity .btn-plus span {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  line-height: 1em;
  font-weight: 500;
  color: #6b6b6b;
  font-size: 20px;
  font-family: Tahoma;
  margin-top: calc(-0.5em - 1px);
  text-align: center;
}

.item-quantity .btn-minus span {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  line-height: 1em;
  margin-top: calc(-0.5em - 1px);
  font-weight: 500;
  color: #6b6b6b;
  font-size: 20px;
  font-family: Tahoma;
}
.item-quantity .btn-plus {
  position: absolute;
  top: 0;
  height: 100%;
  text-align: center;
  width: 44px;
  right: 0;
  text-decoration: none;
  /* border-left: 1px solid #bfbfbf; */
}
.item-quantity .btn-minus {
  position: absolute;
  top: 0;
  height: 100%;
  text-align: center;
  width: 44px;
  left: 0;
  text-decoration: none;
  /* border-right: 1px solid #bfbfbf; */
}
.item-quantity {
  width: 100%;
  position: relative;
  padding: 3px 44px;
  background: #fff;
  color: #000;
  border: 1px solid #bfbfbf;
  overflow: hidden;
  width: 145px;
}
.item-title {
  display: flex;
  align-items: center;
}
.item-img {
  width: 110px;
  height: 105px;
}
.title-cart::after {
  width: 106px;
  content: "";
  display: block;
  margin: 0.18em auto 0;
  border-top: 3px solid black;
  transition: width 1.2s cubic-bezier(0.13, 0.88, 0.62, 1) 0.7s;
}
@media screen and (max-width: 600px) {
  table {
    width: 580px;
    table-layout: fixed;
  }
  .table-cart {
    width: 100%;
    overflow-x: scroll;
  }
}
</style>
