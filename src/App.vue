<template>
  <div class="q-pa-md row items-start q-gutter-md">
   
    <router-view />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LayoutDefault',
  setup() {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
