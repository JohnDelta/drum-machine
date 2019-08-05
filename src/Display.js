import React from 'react';
import EditWindow from './EditWindow.js';

class Display extends React.Component {
	constructor(props) {
		super(props);
		this.clearDisplay = this.clearDisplay.bind(this);
	}
	
	componentDidUpdate() {
		/*
			If we're not in edit mode, then in order to restart the animation
			in each click(update), we must remove the child-node 'display-text' 
			and append it again.
		*/
		if(!this.props.edit) { 
			this.clearDisplay();
			/*Insert child again here*/
			let display = document.querySelector(".Display");
			let text = document.createElement("div");
			text.innerHTML = this.props.display;
			text.classList.add("display-text");
			text.classList.add("textFadeAway-animation");
			display.appendChild(text);
		} else {
			this.clearDisplay();
		}
		
		if(!this.props.power) {
			this.clearDisplay();
		}
	}
	
	clearDisplay() {
		let x = document.querySelector(".display-text");
		if(document.querySelector(".Display").contains(x)) {
			x.parentNode.removeChild(x);
		}
	}
	
	render() {
		/*Create the power off style*/
		let powerStyle = {};
		if(!this.props.power) {
			powerStyle = {
				backgroundColor : "#7a2100"
			};
		}
		
		if(!this.props.edit) {
			return(
				<div 
					className="Display" 
					id="display"
					style={powerStyle}
				/>
			);
		} else {
			return (
				<div 
					className="Display" 
					id="display"
					style={powerStyle}
				>
					<EditWindow
						edit={this.props.edit}
						power={this.props.power}
						soundEffects={this.props.soundEffects}
						padToSounds={this.props.padToSounds}
					/>
				</div>
			);
		}
	}
}

export default Display;