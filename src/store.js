import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state : {
		pickedColor: '',
		message: '',
		display: 'none',
		squares: [],
		button: 'NEW COLORS'
	},
	actions : {
		
		setSquare({commit}, squares){
			commit('squaresBackgrounds', squares)
		},

		easyMode({commit}){
			commit('changeMode')
		},

		setColor({commit}, color){
			commit('getColor', color)
		},

		messageButton({commit}, msgBoton){
			commit('messageButton', msgBoton)
		},

		setMessage({commit}, message){
			commit('showMessage', message)
		},

	},
	mutations : {

		showMessage(state, mensaje){
			state.message = mensaje
		},

		messageButton(state, msgBoton){
			state.button = msgBoton
		},

		squaresBackgrounds(state, backgrounds){
			state.squares = backgrounds
		},

		getColor(state, color){
			state.pickedColor = color
		},

		changeMode(state){
			state.squares.splice(3)
		}
	}

})