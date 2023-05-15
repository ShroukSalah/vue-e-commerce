<template>
  <div class="tw-container tw-mx-auto tw-px-5">
    <router-link to="/login">
      login
    </router-link>
    <div class="tw-grid lg:tw-grid-cols-4  tw-gap-4">
      <productCard />
    </div>
  </div>
</template>
<script setup>
import productCard from "@/components/ProductItem.vue"
import { onMounted } from 'vue';
// import useProductsHandler from "../composables/products/useProductsHandler";

// const {
//   getProducts
// } = useProductsHandler();

// import { GetProducts } from "../services/products/service";

// // const fetchData = async () => {
// //   try {
//     const { data } = await Promise.GetProducts();
// // await Promise.all[(getVideos, getManuals)]
//     console.log(data)
// //     // const questionArray = data.map(() => {
// //     //   return {

// //     //   };
// //     // });
// //     // state.QuestionsOptions = questionArray;
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };

onMounted(async () => {
  // fetchData();
  // getProducts
});
</script>
