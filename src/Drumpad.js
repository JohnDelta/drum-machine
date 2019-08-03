import React from 'react';

class Drumpad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			padToSounds : [],
			soundEffects : [],
			volume : 0
		};
		this.handleClick = this.handleClick.bind(this);
		this.playSound = this.playSound.bind(this);
	}
	
	componentWillMount() {
		this.setState({
			padToSounds : this.props.padToSounds,
			soundEffects : this.props.soundEffects,
			volume : this.props.volume
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
		audio.play();
		
		this.props.updateDisplay(soundEffect.idSound);
	}
	
	render() {
		let pads = []; 
		this.props.padToSounds.forEach((padToSound,index) => {
			pads.push(
				<button
					className="drum-pad"
					key={index} 
					id={padToSound.keyTrigger} 
					dangerouslySetInnerHTML={{__html : padToSound.keyTrigger}}
					onClick={this.handleClick}
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