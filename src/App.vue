<template>
  <div class="container-fluid mt-3">
    <div>
      <Color/>
    </div> 
  </div>
</template>

<script>

import Color from './components/Color.vue'

export default {
  name: 'App',
  components: {
    Color
  }
}
</script>

<style>

 body {
    background: #232323;
    margin: 0;
    font-family: "Montserrat", "Avenir";
  }
  h1 {
    font-weight: normal;
    line-height: 1.1;
    padding: 20px 0;
  }

</style>
