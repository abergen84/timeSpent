//new Date().getFullYear()

import React from 'react'
import ReactDOM from 'react-dom'	
import Backbone from 'backbone'



const TimeView = React.createClass({
	
	render: function(){
		return (
			<div>
				<MainContainer />
			</div>
			)
	}
})

const MainContainer = React.createClass({
	


	getInitialState: function(){
		return {
			year: new Date().getFullYear(),
			status: true
		}
	},

	_counter: function(){

		var self = this
		// if(this.state.status){
			var interval =  
				setInterval(function(){
				self.setState({
					year: self.state.year + 1,
				})
			}, 500)
		// } 

		Backbone.Events.on('stopTimer', function(){
			clearInterval(interval)
		})

		// if(!this.state.status){
		// 	clearInterval(interval)
		// }
		



		// clearInterval(interval)

		// var self = this
		// var interval = function(state){
		// 	console.log(self.state.year)
		// 	var state = self.setState({
		// 		year: self.state.year + 1
		// 	})
			
		// 	setTimeout(function(){
		// 	interval(state)	
		// 	}, 500)
		// }			
			
		

		// if(this.state.status) {
		// 	this.setState({
		// 		year: this.state.year + 1,
		// 		// status: false
		// 	})
		// }


	},

	_stopCounter: function(){
		// this.setState({
		// 	status: false
		// })
		// if(!this.state.status){
			Backbone.Events.trigger('stopTimer')
		// }
	},

	render: function(){
		console.log(this.state)
		return (
			<div id="mainContainer">
				<h3>{this.state.year}</h3>
				<button onClick={this._counter} >Start Forward</button>
				<button onClick={this._stopCounter} >Stop</button>
			</div>
			)
	}
})




export default TimeView