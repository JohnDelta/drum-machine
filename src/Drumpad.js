import React from 'react';

class Drumpad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			padToSounds : [],
			soundEffects : [],
			volume : 0,
			power : false
		};
		this.handleClick = this.handleClick.bind(this);
		this.playSound = this.playSound.bind(this);
	}
	
	componentWillMount() {
		this.setState({
			padToSounds : this.props.padToSounds,
			soundEffects : this.props.soundEffects,
			volume : this.props.volume,
			power : this.props.power
		});
	}
	
	componentDidMount() {
		document.addEventListener("keydown",(event) => {
			this.state.padToSounds.forEach((item,index) => {
				if(item.keyCode === event.keyCode) {
					this.playSound(item.keyTrigger);
				}
			});
		});
	}
	
	componentDidUpdate() {
		if(this.state.volume !== this.props.volume) {
			this.setState({
				volume : this.props.volume
			});
		}
		if(this.state.power !== this.props.power) {
			this.setState({
				power : this.props.power
			});
		}
	}
	
	handleClick(e) {
		this.playSound(e.target.id);
	}
	
	playSound(idPadToSound) {
		let padToSound = this.state.padToSounds
				.filter((item) => item.keyTrigger === idPadToSound)[0];
		let soundEffect = this.state.soundEffects
				.filter((item) => padToSound.idSound === item.idSound)[0];
		let audio = new Audio(soundEffect.url);
		audio.volume = this.state.volume * 1/100;
		if(this.state.power) {
			audio.play();
			this.props.updateDisplay(soundEffect.idSound);
		}
	}
	
	render() {
		/*Create the power off style*/
		let powerStyle = {};
		if(!this.state.power) {
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