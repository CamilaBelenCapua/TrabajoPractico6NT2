<template>
  <section class="src-components-color">
    <div id="header">
      <h1>The Great <br>
        <span id="colorDisplay">{{ $store.state.pickedColor || 'RGB' }} </span>
        <br>
        Guessing Game</h1>
    </div> 
    <Navbar/>
  </section>

</template>

<script>
  import Navbar from './Navbar.vue'
  export default  {
    name: 'src-components-color',
    props: [],
    components: {
      Navbar
    },
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
    },
    computed: {
    }
}
</script>

<style scoped lang="css">
  .src-components-color {
  }
  #header {
	transition: all 0.3s;
	background: steelblue;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
  }
  #colorDisplay {
    font-size: 200%;
  }
</style>