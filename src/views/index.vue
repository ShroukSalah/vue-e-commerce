<template>
  <div>
    <div class="tw-container tw-mx-auto">
      <q-btn-group push>
        <q-btn push label="First" icon="timeline" />
        <q-btn push label="Second" icon="visibility" />
        <q-btn push label="Third" icon="update" />
      </q-btn-group>
      <router-link to="/LoginPage">
        login
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomePage',

}
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
