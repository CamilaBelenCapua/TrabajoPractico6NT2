<template>
  <section class="src-components-cuadrado">
    <div v-if="$store.state.squares" id="container">
      <div class="square" v-for="cuadrado in $store.state.squares" :style="cuadrado.style" :key="cuadrado.id" @click="getInformation(cuadrado.style)"></div>
    </div>
  </section>
</template>

<script>
  export default  {
    name: 'src-components-cuadrado',
    props: [],
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
      getInformation(squareStyle){
        let { backgroundColor } = squareStyle
        if ( backgroundColor === this.$store.state.pickedColor) {
              this.$store.dispatch('setMessage', 'You Picked Right!')      
              this.$store.dispatch('messageButton','Play Again!')
              this.setearColores();
              document.querySelector('#header').style.background = this.$store.state.pickedColor 
            } else {
              this.$store.dispatch('setMessage', "Try Again!")
              squareStyle.backgroundColor = "#232323"
            }
      },
      
      setearColores() {
        this.$store.state.squares.forEach((square) => square.style= { ...square.style, backgroundColor: this.$store.state.pickedColor})
      }
    },
    computed: {
    }
}
</script>

<style scoped lang="css">
  .src-components-board {
  }
  .square {
	width: 30%;
	background: blue;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;
}
  #container {
    margin: 20px auto;
    max-width: 600px;
  }
</style>