import React from 'react';

class Display extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			edit : true,
			display : ""
		};
	}
	
	componentWillMount() {
		this.setState({
			display : this.props.display,
			edit : this.props.edit
		});
	}
	
	componentDidUpdate() {
		if(this.state.edit !== this.props.edit) {
			this.setState({
				edit : this.props.edit
			});
		}
		/*
			If we're not in edit mode, then in order to restart the animation
			in each click(update), we must remove the child-node 'display-text' 
			and append it again.
		*/
		if(!this.state.edit) { 
			let display = document.querySelector(".Display");
			if(display.contains(document.querySelector(".display-text"))) {
				display.removeChild(document.querySelector(".display-text"));
			}
		}		
	
		if(this.state.display !== this.props.display) {
			
			this.setState({
				display : this.props.display
			});
		}
		
		/*Insert child again here*/
		if(!this.state.edit) {
			let display = document.querySelector(".Display");
			let text = document.createElement("div");
			text.innerHTML = this.props.display;
			text.classList.add("display-text");
			text.classList.add("textFadeAway-animation");
			display.appendChild(text);
		}
	}
	
	render() {
		
		if(!this.state.edit) {
			return(
				<div 
					className="Display" 
					id="display"
				/>
			);
		} else {
			return (
				<div 
					className="DisplayEdit" 
					id="display"
				>
				</div>
			);
		}
	}
}

export default Display;