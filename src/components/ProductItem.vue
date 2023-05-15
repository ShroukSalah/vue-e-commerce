<template>
  <div>
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
  </div>
</template>

<style></style>

<script setup>
// import { onMounted } from 'vue';
// import useProductsHandler from "../composables/products/useProductsHandler";

// const {
//   getProducts
// } = useProductsHandler();

// // import { GetProducts } from "../services/products/service";

// // // const fetchData = async () => {
// // //   try {
// //     const { data } = await Promise.GetProducts();
// // // await Promise.all[(getVideos, getManuals)]
// //     console.log(data)
// // //     // const questionArray = data.map(() => {
// // //     //   return {

// // //     //   };
// // //     // });
// // //     // state.QuestionsOptions = questionArray;
// // //   } catch (error) {
// // //     console.log(error);
// // //   }
// // // };

// onMounted(async () => {
//   // fetchData();
//   getProducts
// });
</script>
