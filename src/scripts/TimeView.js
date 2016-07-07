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
	
	interval: null,


	getInitialState: function(){
		return {
			year: new Date().getFullYear(),
			status: ''
		}
	},

	_counterForward: function(){

		var self = this
		// if(this.state.status){
			var forward =  
				setInterval(function(){
				self.setState({
					year: self.state.year + 1,
					status: 'forward'
				})
			}, 500)
		// } 

		Backbone.Events.on('stopTimer', function(){
			clearInterval(forward)
			self.setState({
				status: 'stopped'
			})
		})

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
	},

	_counterBackwards: function(){
		var self = this
		var backwards = setInterval(function(){
			self.setState({
				year: self.state.year - 1,
				status: 'backward'
			})
		}, 500)

		Backbone.Events.on('stopTimer', function(){
			clearInterval(backwards)
		})
	},

	_stopCounter: function(){
			Backbone.Events.trigger('stopTimer')
			// document.querySelector('#wrapper').innerHTML = "Enjoy the moment"
	},

	render: function(){
		console.log(this.state)
		var color = {
			background: ''
		}
		if(this.state.status === 'backward'){
			color.background = 'red'
		} else if (this.state.status === 'forward'){
			color.background = 'lightgreen'
			} else { 
			color.background = 'white'
			}

		return (
			<div id="mainContainer">
				<h1>In the Moment</h1>
				<div id="wrapper">
					<h3 style={color}>{this.state.year}</h3>
					<div id="buttonwrapper">
						<button onClick={this._counterForward} >Forwards</button>
						<button onClick={this._stopCounter} >In the Moment</button>
						<button onClick={this._counterBackwards} > Backwards</button>
					</div>
				</div>
			</div>
			)
	}
})




export default TimeView