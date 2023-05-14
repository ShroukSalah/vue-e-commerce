<template>
  <div>
    <div class="tw-container tw-mx-auto">
      <h1 class="tw-text-3xl tw-font-bold tw-underline tw-bg-red-700 tw-p-48">
        Hello world!
      </h1>
    </div>

  </div>
</template>

<script>
import { products } from "@/services/products/index";
export default {
  name: 'productsList',

}
const fetchData = async () => {
  try {
    const { data } = await products();

    console.log(data)

  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  fetchData();
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
