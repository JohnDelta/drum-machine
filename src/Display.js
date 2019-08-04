import React from 'react';

class Display extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidUpdate() {
		/*
			If we're not in edit mode, then in order to restart the animation
			in each click(update), we must remove the child-node 'display-text' 
			and append it again.
		*/
		if(!this.props.edit) { 
			let display = document.querySelector(".Display");
			if(display.contains(document.querySelector(".display-text"))) {
				display.removeChild(document.querySelector(".display-text"));
			}
		}		
		
		/*Insert child again here*/
		if(!this.props.edit) {
			let display = document.querySelector(".Display");
			let text = document.createElement("div");
			text.innerHTML = this.props.display;
			text.classList.add("display-text");
			text.classList.add("textFadeAway-animation");
			display.appendChild(text);
		}
		
		if(!this.props.power) {
			document.querySelector(".display-text").innerHTML = "";
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
					className="DisplayEdit" 
					id="display"
					style={powerStyle}
				>
				
				</div>
			);
		}
	}
}

export default Display;