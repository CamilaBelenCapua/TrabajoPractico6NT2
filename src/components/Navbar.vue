<template>
  <section class="src-components-navbar">
      <div id="navbar">
        <button id="reset" @click="restart()">{{$store.state.button}}</button>
        <span id="message">{{$store.state.message}}</span>
        <button id="easy" @click="easy()" :class="{ selected: !isHard }">easy</button>
        <button id="hard" @click="hard()" :class="{ selected:  isHard }">hard</button>
      </div>
      <Cuadrado/>
  </section>
</template>

<script>
  import Cuadrado from './Cuadrado.vue'
  
  export default  {
    
    name: 'src-components-navbar',
    props: [],
    components: {
      Cuadrado
    },
    mounted () {
      this.setColors()
    },
    data () {
      return {
        isHard: true
      }
    },
    methods: {
      hard(){
        if (!this.isHard) {
          this.isHard = true;
          this.restart();
        }
      }, 

      easy(){    
        if (this.isHard) {
          this.isHard = false;
          this.restart();
        }
      },

      createNewColors(numbers){
        let arr = [];
        
        for (var i = 0; i < numbers; i++) {
          arr.push({id: i, style:{ backgroundColor:this.randomizeColor()}});
        }
        this.$store.dispatch('setSquare', arr)      
      },

      setColors(){
        this.createNewColors(6);
        this.pickedColor = this.$store.state.squares[this.PickColor()].style.backgroundColor;
        this.$store.dispatch('setColor', this.pickedColor)
      },

      restart(){
        this.setColors()         
        this.$store.dispatch('setMessage', '')
        this.$store.dispatch('messageButton','New Colors')
        document.querySelector('#header').style.backgroundColor = 'steelblue'
        if(!this.isHard){
          this.$store.dispatch('easyMode')
        }
      },

      PickColor(){
        let quantity;
        if (this.isHard) {
          quantity = 6;
        } else {
          quantity = 3;
        }
        return Math.floor(Math.random() * quantity );
      },

      randomizeColor(){
        let newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
        return newColor;
      },

      randomInt(){
        return Math.floor(Math.random() * 256);
      },
    },
    computed: {
    }
}
  
</script>

<style scoped lang="css">
  #navbar {
    background: #ffffff;
    height: 29px;
    text-align: center;
    margin: -1;
    margin-top: -31px;
  }
  #message {
    color: black;
    display: inline-block;
    width: 20%;
  }
  button {
    border: none;
    background-color: white;
    font-family: "Montserrat", "Avenir";
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: steelblue;
    transition: all 0.3s;
    outline: none;
  }
  button:hover {
    color: white;
    background-color: steelblue;
  }
  .selected {
    background-color: steelblue;
    color: white;
  }
</style>