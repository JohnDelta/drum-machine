import React from 'react';

class Drumpad extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.playSound = this.playSound.bind(this);
	}
	
	componentDidMount() {
		document.addEventListener("keydown",(event) => {
			this.props.padToSounds.forEach((item,index) => {
				if(item.keyCode === event.keyCode) {
					this.playSound(item.keyTrigger);
				}
			});
		});
	}
	
	handleClick(e) {
		this.playSound(e.target.id);
	}
	
	playSound(idPadToSound) {
		let padToSound = this.props.padToSounds
				.filter((item) => item.keyTrigger === idPadToSound)[0];
		let soundEffect = this.props.soundEffects
				.filter((item) => padToSound.idSound === item.idSound)[0];
		let audio = new Audio(soundEffect.url);
		audio.volume = this.props.volume * 1/100;
		if(this.props.power) {
			audio.play();
			this.props.updateDisplay(soundEffect.idSound);
		}
	}
	
	render() {
		/*Create the power off style*/
		let powerStyle = {};
		if(!this.props.power) {
			powerStyle = {
				color : "#7a2100",
				pointerEvents : "none"
			};
		}
		
		let pads = []; 
		this.props.padToSounds.forEach((padToSound,index) => {
			pads.push(
				<button
					className="drum-pad"
					key={index} 
					id={padToSound.keyTrigger} 
					dangerouslySetInnerHTML={{__html : padToSound.keyTrigger}}
					onClick={this.handleClick}
					style={powerStyle}
				/>
			);
		});
		
		return(
			<div className="Drumpad">
				{pads}
			</div>
		);
	}
}

export default Drumpad;